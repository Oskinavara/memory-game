import React from 'react';
import { Animated } from 'react-animated-css';
const ResetScreen = ({ moveCount, onClick }) => {
  return (
    <Animated animationIn="fadeIn" animationInDuration={1500}>
      <div className="reset-screen">
        <div className="reset-screen-text">{`You win!
You have beaten the game in ${moveCount} moves.`}</div>
        <button className="btn btn-primary play-again-button" onClick={onClick}>
          {'Play again'}
        </button>
      </div>
    </Animated>
  );
};

export default ResetScreen;
