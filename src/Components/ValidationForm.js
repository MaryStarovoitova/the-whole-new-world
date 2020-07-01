import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

class ValidationForm extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (this.state.email && !this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.emailError}
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.passwordError}
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default ValidationForm;
