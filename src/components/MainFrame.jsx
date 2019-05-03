import React,{useState, useEffect} from "react";
import Board from "./Board";
import OptionBar from "./OptionBar";
import StartScreen from "./StartScreen";
import Button from "./Button"
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

var choiceArray = [];
const MainFrame = () => {
  const [isHidden, setIsHidden] = useState(Array(12).fill(true));
  const [pairsFound, setPairsFound] = useState(0);
  const [isClickable, setIsClickable] = useState("");
  const [moveCount, setMoveCount] = useState(0);

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
      alert(`You win!
You have beaten the game in ${moveCount} moves.`);
    }
  });

   const renderButton = index => {
    return (
      <Button
        icon={animalArray[index]}
        isHidden={isHidden[index]}
        onClick={()=>handleClick(index)}
        isClickable={isClickable}
      />
    );
  };
  return (
    <div className="main-frame">
      <h1 className="game-title">Memory Game</h1>
      <StartScreen />
      <Board
        onClick={() => handleClick(index)}
        isHidden={isHidden}
        isClickable={isClickable}
        renderButton={() => renderButton(index)}
        animalArray={animalArray}
        
      />
      <OptionBar />
    </div>
  );
};

export default MainFrame;
