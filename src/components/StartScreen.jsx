import React, { useState } from "react";

const StartScreen = () => {
  const [startDisplay, setStartDisplay] = useState("");
  const toggleVisibility = () => {
    setStartDisplay("none");
    console.log("shjfiasif");
  };

  return (
    <div style={{ display: startDisplay }} className="start">
      <button
        className="start-button btn btn-light"
        onClick={toggleVisibility}
      >
        {"Start Game"}
      </button>
    </div>
  );
};

export default StartScreen;
