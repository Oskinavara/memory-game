import React from "react";
// import { Animated } from "react-animated-css";
const Button = ({ isHidden, icon, onClick, isClickable, index }) => {
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
          {/* <Animated
            animationIn="shake"
            animationInDuration={150}
            isVisible={""}
          > */}
            <i className={icon} />
          {/* </Animated> */}
        </button>
      )}
    </>
  );
};

export default Button;
