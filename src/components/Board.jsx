import React, { useState, useEffect } from "react";
import ResetScreen from "./ResetScreen";
import StartScreen from "./StartScreen";
import Container from "./Container";
// import animalArray from "./Icons.jsx"

var animalArray = [
  "fas fa-cat",
  "fas fa-dog",
  "fas fa-frog",
  "fas fa-crow",
  "fas fa-hippo",
  "fas fa-horse",
  "fas fa-dove",
  "fas fa-fish",
  "fas fa-dragon",
  "fas fa-spider",
  "fas fa-kiwi-bird"
];

var choiceArray = [];
const Board = () => {
  const [boardSize, setBoardSize] = useState("12");
  const [isHidden, setIsHidden] = useState(
    Array(parseInt(boardSize)).fill(true)
  );
  const [pairsFound, setPairsFound] = useState(0);
  const [isClickable, setIsClickable] = useState("visible");
  const [moveCount, setMoveCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  useEffect(() => {
    if (gameStarted === true) {
      console.log("dupa");
      shuffle(animalArray);
      animalArray.splice(0, animalArray.length - parseInt(boardSize) / 2);
      animalArray = animalArray.concat(animalArray);
      shuffle(animalArray);
      setIsHidden(Array(parseInt(boardSize)).fill(true));
    }
  }, [gameStarted, boardSize]);

  const handleClick = index => {
    setIsHidden(
      isHidden.map((hidden, hiddenIndex) =>
        index === hiddenIndex ? !hidden : hidden
      )
    );
    setMoveCount(moveCount + 1);
    choiceArray.push(index);
    if (choiceArray.length === 2) {
      if (animalArray[choiceArray[0]] === animalArray[choiceArray[1]]) {
        choiceArray = [];
        setPairsFound(pairsFound + 1);
      } else {
        setIsClickable("none");
        setTimeout(() => {
          setIsClickable("");
          setIsHidden(
            isHidden.map((hidden, hiddenIndex) =>
              hiddenIndex === choiceArray[0] ? !hidden : hidden
            )
          );
          choiceArray = [];
        }, 1500);
      }
    }
  };

  const newGame = () => {
    shuffle(animalArray);
    setIsHidden(Array(parseInt(boardSize)).fill(true));
    setPairsFound(0);
    setMoveCount(0);
  };
  const handleChange = e => {
    setBoardSize(e.target.value);
  };
  return (
    <div className="board">
      {gameStarted === false && (
        <StartScreen
          onClick={() => setGameStarted(true)}
          onChange={handleChange}
          boardSize={boardSize}
        />
      )}
      {pairsFound < parseInt(boardSize) / 2 && gameStarted === true && (
        <Container
          grid={
            boardSize === "12"
              ? { grid: "repeat(4, 1fr) / repeat(3, 1fr)" }
              : {
                  grid: "repeat(4, 1fr) / repeat(4, 1fr)",
                  columnGap: "calc(0.5rem + 0.5vw)"
                }
          }
          animalArray={animalArray}
          isHidden={isHidden}
          isClickable={isClickable}
          onClick={handleClick}
        />
      )}
      {pairsFound === parseInt(boardSize) / 2 && (
        <ResetScreen onClick={newGame} moveCount={moveCount} />
      )}
    </div>
  );
};

export default Board;
