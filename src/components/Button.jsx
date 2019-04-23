import React, { Component } from "react";

class Button extends Component {
  state = { isHidden: true };

  toggleHidden = () => {
    this.props.onClick();
  };
  onClick = () => {
    this.toggleHidden();
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
  render() {
    return (
      <div>
        <button className="tile" onClick={this.onClick}>
          <i
            className={this.props.icon}
            style={
              this.props.visibility ? { display: "none" } : { display: "none" }
            }
          />
        </button>
      </div>
    );
  }
}

export default Button;
