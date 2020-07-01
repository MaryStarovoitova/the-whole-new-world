import React, { Component } from "react";
import Counter from "./Counter";
import Button from "./Button";

// const Body = props => (
//   <div>
//     <div> {props.title}</div>
//     <Counter />
//   </div>
// );

class Body extends Component {
  state = {
    visible: true,
  };

  hideButton = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const buttonText = this.state.visible ? "hide" : "show";

    return (
      <div>
        <div> {this.props.title}</div>
        <div style={this.state.visible ? {} : { display: "none" }}>
          <Counter />
        </div>
        <Button handlerClick={this.hideButton}>{buttonText}</Button>
      </div>
    );
  }
}

export default Body;
