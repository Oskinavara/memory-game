import React, { useState, useEffect } from "react";
// import Button from "./Button";
import ResetScreen from "./ResetScreen";
import StartScreen from "./StartScreen";
import Container from "./Container";
import { Animated } from "react-animated-css";

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
  const [startVisibility, setStartVisibility] = useState("visible");
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
  // useEffect(() => {
  //   if (pairsFound === 6) {
  //     setNewGameVisibility("visible");
  //   }
  // }, [pairsFound]);

  const newGame = () => {
    shuffle(animalArray);
    setNewGameVisibility("hidden");
    setIsHidden(Array(12).fill(true));
    setPairsFound(0);
    setMoveCount(0);
  };

  return (
    <div className="board">
      <StartScreen
        visibility={startVisibility}
        onClick={() => setStartVisibility("hidden")}
      />
      <Container
        animalArray={animalArray}
        isHidden={isHidden}
        isClickable={isClickable}
        onClick={handleClick}
      />

      {pairsFound === 6 && (
        <Animated
          animationIn="lightSpeedIn"
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <ResetScreen
            onClick={newGame}
            moveCount={moveCount}
            visibility={"visible"}
          />
        </Animated>
      )}
    </div>
  );
};

export default Board;
