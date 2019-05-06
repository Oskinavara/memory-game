import React from "react";

const StartScreen = ({visibility, onClick}) => {
  return (
    <div className="start-screen" style={{ visibility: visibility }}>
      <button
        className="start-button btn btn-primary"
        onClick={onClick}
      >
        {"Start Game"}
      </button>
    </div>
  );
};

export default StartScreen;
