import React from "react";
import Board from "./Board";

const MainFrame = () => {
  return (
    <div className="main-frame">
      <h1 className="game-title">Memory Game</h1>
        <Board />
    </div>
  );
};

export default MainFrame;
