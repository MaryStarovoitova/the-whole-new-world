import React, { Component } from "react";
import Button from "./Button";

class Counter extends Component {
  state = {
    count: 0,
  };

  increaseButton = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decreaseButton = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <Button handlerClick={this.increaseButton}>increment</Button>
        <Button handlerClick={this.decreaseButton}>decrement</Button>
      </div>
    );
  }
}

export default Counter;
