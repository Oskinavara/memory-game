import React from "react";
import { Animated } from "react-animated-css";
const StartScreen = ({ visibility, onClick, onChange, boardSize }) => {
 
  return (
    <div className="start-screen" style={{ visibility: visibility }}>
      <Animated
        animationIn="zoomIn"
        animationInDuration={1000}
        isVisible={true}
      >
        <button className="start-button btn btn-primary" onClick={onClick}>
          {"Start Game"}
        </button>
      </Animated>
      <form className="board-size-form">
        <div>{"Board size"}</div>
        <div className="pretty p-default p-curve">
          <input
            type="radio"
            name="board-size"
            checked={boardSize === "12"}
            value={"12"}
            onChange={onChange}
          />
          <div className="state p-primary-o">
            <i className="icon mdi mdi-check" />
            <label>3x4</label>
          </div>
        </div>

        <div className="pretty p-default p-curve">
          <input
            type="radio"
            name="board-size"
            checked={boardSize === "16"}
            value={"16"}
            onChange={onChange}
          />
          <div className="state p-primary-o">
            <i className="icon mdi mdi-check" />
            <label>4x4</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StartScreen;
