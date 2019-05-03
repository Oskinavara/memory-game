import React, { Component } from "react";

class OptionBar extends Component {
  state = {};
  render() {
    return (
      <div className="option-bar">
        <button className="btn btn-light new-game-button" style={{visibility: "hidden"}}>{"New Game"}</button>
      </div>
    );
  }
}

export default OptionBar;
