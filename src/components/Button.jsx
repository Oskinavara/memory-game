import React, { Component } from "react";
var array=["up", "down", "right", "left"];
class Button extends Component {
  state = {};
  
  
  render() {
    return (
      <div>
        <button className="tile">
          {/* <i className="fas fa-arrow-alt-circle-right" /> */}
          <i className={"fas fa-arrow-alt-circle-".concat(array[Math.floor(Math.random()*4)])} />
          
        </button>
      </div>
    );
  }
}

export default Button;
