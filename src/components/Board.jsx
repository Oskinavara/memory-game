import React, { useState, useEffect } from "react";
import Button from "./Button";
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
  const [newGameVisibility, setNewGameVisibility] = useState("hidden");

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
  useEffect(() => {
    if (pairsFound === 6) {
      setNewGameVisibility("visible");
    }
  }, [pairsFound]);

  const renderButton = index => {
    return (
      <Button
        icon={animalArray[index]}
        isHidden={isHidden[index]}
        onClick={() => handleClick(index)}
        isClickable={isClickable}
      />
    );
  };

  const newGame = () => {
    shuffle(animalArray);
    setNewGameVisibility("hidden");
    setIsHidden(Array(12).fill(true));
    setPairsFound(0);
    setMoveCount(0);
  };

  return (
    <div className="board">
      <div className="container">
        {animalArray.map((i, index) => (
          <div className="tile" key={index}>
            {renderButton(index)}
          </div>
        ))}
      </div>
      <div className="reset-screen" style={{ visibility: newGameVisibility }}>
        <div>{`You win!
You have beaten the game in ${moveCount} moves.`}</div>
        <button className="btn btn-primary play-again-button" onClick={newGame}>
          {"Play again"}
        </button>
      </div>
    </div>
  );
};

export default Board;
