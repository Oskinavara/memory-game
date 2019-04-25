import React, { useState } from "react";
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
  "fas fa-otter",
  "fas fa-spider",
  "fas fa-kiwi-bird"
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(animalArray);
animalArray.splice(0, animalArray.length - 6);
animalArray = animalArray.concat(animalArray);
shuffle(animalArray);

const Board = () => {
  const [isHidden, setIsHidden] =useState(Array(12).fill(true));
  const [icon] = useState(animalArray);
  // const [pickCount, setPickCount] = useState(0);

  // const handleClick = index => {
  //   const isShown = isHidden.slice().map(d => !d);
  //   setIsHidden(isShown[index]);
  //   console.log("dupa")
  // };

  const renderButton = index => {
    const isNotHidden = () => !isHidden[index];
    return (
      <Button
        icon={icon[index]}
        isHidden={isHidden[index]}
        onClick={() =>setIsHidden(isNotHidden)}
      />
    );
  };
  return (
    <div className="board">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-3">{renderButton(0)}</div>
          <div className="col-3">{renderButton(1)}</div>
          <div className="col-3">{renderButton(2)}</div>
          <div className="col-3">{renderButton(3)}</div>
        </div>
        <div className="row align-items-center">
          <div className="col-3">{renderButton(4)}</div>
          <div className="col-3">{renderButton(5)}</div>
          <div className="col-3">{renderButton(6)}</div>
          <div className="col-3">{renderButton(7)}</div>
        </div>
        <div className="row align-items-end">
          <div className="col-3">{renderButton(8)}</div>
          <div className="col-3">{renderButton(9)}</div>
          <div className="col-3">{renderButton(10)}</div>
          <div className="col-3">{renderButton(11)}</div>
        </div>
      </div>
    </div>
  );
};

export default Board;
