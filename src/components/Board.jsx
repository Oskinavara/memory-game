import React, { useState } from "react";
import ResetScreen from "./ResetScreen";
import StartScreen from "./StartScreen";
import Container from "./Container";

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
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffle(animalArray);
animalArray.splice(0, animalArray.length - 6);
animalArray = animalArray.concat(animalArray);
shuffle(animalArray);

var choiceArray = [];
const Board = () => {
  const [isHidden, setIsHidden] = useState(Array(12).fill(true));
  const [pairsFound, setPairsFound] = useState(0);
  const [isClickable, setIsClickable] = useState("visible");
  const [moveCount, setMoveCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
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
    setIsHidden(Array(12).fill(true));
    setPairsFound(0);
    setMoveCount(0);
  };

  return (
    <div className="board">
      {gameStarted === false && (
        <StartScreen onClick={() => setGameStarted(true)} />
      )}
      {pairsFound < 6 && gameStarted === true && (
        <Container
          // grid={{ grid: "repeat(2, 1fr) / repeat(5, 1fr)" }}
          animalArray={animalArray}
          isHidden={isHidden}
          isClickable={isClickable}
          onClick={handleClick}
        />
      )}
      {pairsFound === 6 && (
        <ResetScreen onClick={newGame} moveCount={moveCount} />
      )}
    </div>
  );
};

export default Board;
