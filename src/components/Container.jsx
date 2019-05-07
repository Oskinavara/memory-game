import React from "react";
import Button from "./Button";
const Container = ({ animalArray, isHidden, isClickable, onClick, grid, shake }) => {
  const renderButton = index => {
    return (
      <Button
        icon={animalArray[index]}
        isHidden={isHidden[index]}
        onClick={onClick}
        isClickable={isClickable}
        index={index}
        shake={shake}
      />
    );
  };
  
  return (
    <div className="container" style={grid}>
      {animalArray.map((i, index) => (
        <div className="tile" key={index}>
          {renderButton(index)}
        </div>
      ))}
    </div>
  );
};

export default Container;
