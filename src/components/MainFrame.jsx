import React from "react";
import Board from "./Board";
import StartScreen from "./StartScreen";

const MainFrame = () => {
  return (
    <div className="main-frame">
      <h1 className="game-title">Memory Game</h1>
      <StartScreen />
      <Board />
    </div>
  );
};

export default MainFrame;
