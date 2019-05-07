import React, { useState } from "react";

const StartScreen = ({ visibility, onClick }) => {
  const [pick, setPick] = useState("3x4");

  const handleChange = e => {
    setPick(e.target.value);
  };

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
      <div className="pretty p-switch toggle-size">
        <input type="radio" name="switch1" />
        
        <div className="state p-success">
          <label>Summer</label>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
