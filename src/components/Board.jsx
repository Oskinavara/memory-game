import React, { Component } from "react";


class Board extends Component {
  state = {};
  render() {
    return (
      <div className="board">
        <div className="container">
          <div className="row">
            <div className="col">.</div>
            <div className="col">.</div>
            <div className="col">.</div>
          </div>
          <div className="row">
            <div className="col">.</div>
            <div className="col">.</div>
            <div className="col">.</div>
          </div>
          <div className="row">
            <div className="col">.</div>
            <div className="col">.</div>
            <div className="col">.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
