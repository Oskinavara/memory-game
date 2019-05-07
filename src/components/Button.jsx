import React from "react";
import { Animated } from "react-animated-css";
const Button = ({ isHidden, icon, onClick, isClickable, index, shake }) => {
  return (
    <>
      {isHidden ? (
        <button
          className="tile"
          onClick={() => onClick(index)}
          style={{ pointerEvents: isClickable }}
        />
      ) : (
        <button
          className="tile"
          onClick={onClick}
          style={{ pointerEvents: "none" }}
        >
          <Animated
            animationIn="shake"
            animationOut="bounce"
            animateOnMount={false}
            animationInDuration={150}
            isVisible={shake}
          >
            <i className={icon} />
          </Animated>
        </button>
      )}
    </>
  );
};

export default Button;
