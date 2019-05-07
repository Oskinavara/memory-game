import React from "react";
import { Animated } from "react-animated-css";
const StartScreen = ({ visibility, onClick }) => {
  return (
    <div className="start-screen" style={{ visibility: visibility }}>
      <Animated
        animationIn="zoomIn"
        animationOut=""
        animationInDuration="1000"
        isVisible={true}
      >
        <button className="start-button btn btn-primary" onClick={onClick}>
          {"Start Game"}
        </button>
      </Animated>
    </div>
  );
};

export default StartScreen;
