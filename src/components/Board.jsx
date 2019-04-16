import React, { Component } from "react";
import Button from './Button'
class Board extends Component {
  state = {};
  render() {
    return (
      <div className="board">
        <div className="container">
          <div className="row h-25 mb-4 ">
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
          </div>
          <div className="row h-25 mb-4">
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
          </div>
          <div className="row h-25 mb-4">
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
            <div className="col">
               <Button />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
