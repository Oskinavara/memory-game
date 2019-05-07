import React from "react";

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
          <i className={icon} />
        </button>
      )}
    </>
  );
};

export default Button;
