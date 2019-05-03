import React from "react";

const OptionBar = ({isGameWon, handler}) => {
  
  return (
    <div className="option-bar">
      <button
        className="btn btn-light new-game-button"
        style={{ visibility: isGameWon }}
        onClick={handler}
      >
        {"New Game"}
      </button>
    </div>
  );
};

export default OptionBar;
