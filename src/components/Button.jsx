import React, { Component } from "react";
// var array=["up", "down", "right", "left"];
class Button extends Component {
  state = { isHidden: false };
  toggleHidden = () => {
    return (
      this.setState({isHidden: !this.state.isHidden})
    );
  };

  render() {
    return (
      <div>
        <button className="tile" onClick={this.toggleHidden}>
        <i className="fas fa-arrow-alt-circle-right" style={this.state.isHidden ? {display:"none"} : {display: "block"}} />
          
        </button>
      </div>
    );
  }
}

export default Button;
