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
  state = { firstPick: "aaa", secondPick: "bbb", pickCount: 0 };

  handleClick = (icon, visibility) => () => {
    var pickCount = this.state.pickCount;

    if (pickCount % 2 === 0) {
      this.setState({ pickCount: pickCount + 1, firstPick: icon });
      visibility = !visibility;
      
    } else {
      this.setState({ secondPick: icon, pickCount: pickCount + 1 });
      visibility = !visibility;
    }
    if (this.state.firstPick !== this.state.secondPick) {
      
    }
  };
  render() {
    return (
      <div className="board">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-3">
              <Button
                icon={animalArray[0]}
                onClick={this.handleClick(animalArray[0])}
                visibility={true}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[1]}
                onClick={this.handleClick(animalArray[1])}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[2]}
                onClick={this.handleClick(animalArray[2])}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[3]}
                onClick={this.handleClick(animalArray[3])}
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-3">
              <Button
                icon={animalArray[4]}
                onClick={this.handleClick(animalArray[4])}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[5]}
                onClick={this.handleClick(animalArray[5])}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[6]}
                onClick={this.handleClick(animalArray[6])}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[7]}
                onClick={this.handleClick(animalArray[7])}
              />
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-3">
              <Button
                icon={animalArray[8]}
                onClick={this.handleClick(animalArray[8])}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[9]}
                onClick={this.handleClick(animalArray[9])}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[10]}
                onClick={this.handleClick(animalArray[10])}
              />
            </div>
            <div className="col-3">
              <Button
                icon={animalArray[11]}
                onClick={this.handleClick(animalArray[11])}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
