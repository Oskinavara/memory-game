import React, { useState, useEffect } from "react";
import Button from "./Button";



const Board = ({isHidden, isClickable, onClick, animalArray}) => {
  

 

  return (
    <div className="board">
      <div className="container">
        <div className="row align-items-start">
          {animalArray
            .map((item, index) => (
              <div className="col-3" key={index}>
                {renderButton(index)}
              </div>
            ))
            .slice(0, 4)}
        </div>
        <div className="row align-items-center">
          {animalArray
            .map((item, index) => (
              <div className="col-3" key={index}>
                {renderButton(index)}
              </div>
            ))
            .slice(4, 8)}
        </div>
        <div className="row align-items-end">
          {animalArray
            .map((item, index) => (
              <div className="col-3" key={index}>
                {renderButton(index)}
              </div>
            ))
            .slice(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;
