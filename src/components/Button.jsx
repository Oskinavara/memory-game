import React, { Component } from "react";

class Button extends Component {
  state = {isHidden: true};

  toggleHidden () {
    this.setState({isHidden: !this.state.isHidden});
  } 

  render() {
    return (
      <div>
        <button className="tile" onClick={this.props.onClick}>
          <i
            className={this.props.icon}
            style={
              this.state.isHidden ? { display: "none" } : { display: "block" }
            }
          />
        </button>
      </div>
    );
  }
}

export default Button;
