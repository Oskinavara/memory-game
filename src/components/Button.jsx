import React from "react";

const Button = ({ isHidden, icon, onClick, style}) => {
  return (
    <>
      {isHidden ? (
        <button className="tile" onClick={onClick} />
      ) : (
        <button className="tile" onClick={onClick}>
          <i className={icon} />
        </button>
      )}
    </>
  );
};

export default Button;
