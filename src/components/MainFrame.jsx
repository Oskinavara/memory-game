import React, { useState } from "react";
import Board from "./Board";
import OptionBar from "./OptionBar";
import StartScreen from "./StartScreen";

const MainFrame = () => {
  const resetHandler = () => {
    
  };
  const [isGameWon, setIsGameWon] = useState("hidden");
  return (
    <div className="main-frame">
      <h1 className="game-title">Memory Game</h1>
      <StartScreen />
      <Board winTrigger={() => setIsGameWon("")} />
      <OptionBar isGameWon={isGameWon} reset={resetHandler} />
    </div>
  );
};

export default MainFrame;
