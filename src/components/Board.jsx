import React, { Component } from "react";
import Button from "./Button";
class Board extends Component {
  state = {};
  
  render() {
    return (
      <div className="board">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
            <div className="col-3">
              <Button />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
