import React, { Component } from "react";
import Board from "./Board";
import OptionBar from './OptionBar';
class MainFrame extends Component {
  state = {};
  render() {
    return (
      <div className="main-frame">
        <h1 className="game-title">Memory Game</h1>
        <Board />
        <OptionBar />
      </div>
    );
  }
}

export default MainFrame;
