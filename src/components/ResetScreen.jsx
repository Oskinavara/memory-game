import React from 'react';

const ResetScreen = ({visibility, moveCount, onClick}) => {
    return ( <div className="reset-screen" style={{ visibility: "visible" }}>
    <div className="reset-screen-text">{`You win!
You have beaten the game in ${moveCount} moves.`}</div>
    <button className="btn btn-primary play-again-button" onClick={onClick}>
      {"Play again"}
    </button>
  </div> );
}
 
export default ResetScreen;