import React, { useState } from "react";

const StartScreen = () => {
  const [startVisibility, setStartVisibility] = useState("visible");

  return (
    <div className="start-screen" style={{ visibility: startVisibility }}>
      <button
        className="start-button btn btn-primary"
        onClick={() => setStartVisibility("hidden")}
      >
        {"Start Game"}
      </button>
    </div>
  );
};

export default StartScreen;
