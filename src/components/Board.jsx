import React, { Component } from "react";
import Button from "./Button";
var animalArray = [
  "fas fa-cat",
  "fas fa-dog",
  "fas fa-frog",
  "fas fa-crow",
  "fas fa-hippo",
  "fas fa-horse",
  "fas fa-dove",
  "fas fa-fish",
  "fas fa-otter",
  "fas fa-spider",
  "fas fa-kiwi-bird"
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(animalArray);
animalArray.splice(0, animalArray.length - 6);
animalArray = animalArray.concat(animalArray);
shuffle(animalArray);

class Board extends Component {
  state = { firstPick: "", secondPick: "", pickCount: 0 };
  constructor(props) {
    super(props);
    this.buttonElement = React.createRef();
  }

  handleClick = () => {
    this.buttonElement.current.toggleHidden();
    this.setState({
      firstPick: this.icon,
      pickCount: this.state.pickCount + 1
    });
    alert(this.state.firstPick);
  };
  render() {
    return (
      <div className="board">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[0]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[1]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[2]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[3]}
                onClick={this.handleClick}
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[4]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[5]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[6]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[7]}
                onClick={this.handleClick}
              />
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[8]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[9]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[10]}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-3">
              <Button
                ref={this.buttonElement}
                icon={animalArray[11]}
                onClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
