import React from "react";

const Button = ({ isHidden, icon, onClick }) => {
  return (
    <div>
      {isHidden ? (
        <button className="tile" onClick={onClick} />
      ) : (
        <button className="tile" onClick={onClick}>
          <i className={icon} />
        </button>
      )}
    </div>
  );
};

export default Button;
