import React, { Component } from "react";

class Button extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        <button onClick={this.props.handlerClick}>{this.props.children}</button>
      </div>
    );
  }
}

export default Button;
