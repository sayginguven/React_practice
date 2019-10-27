import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.check = this.check.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  check(e) {
    e.preventDefault();
    this.props.users
      .filter(user => user.email === this.state.username)
      .map(user => {
        console.log(user.password === this.state.password);
        return user.password === this.state.password;
      });
  }
  handleChange(e) {
    if (e.target.id === "username") {
      this.setState({ username: e.target.value });
    }
    if (e.target.id === "password") {
      this.setState({ password: e.target.value });
    }
    // return val;
  }
  render() {
    return (
      <div>
        <form onSubmit={this.check}>
          <label htmlFor="username"> username </label>
          <input
            id="username"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.state.username}
          />
          <label htmlFor="password"> password </label>
          <input
            id="password"
            type="password"
            onChange={this.handleChange}
            defaultValue={this.state.password}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
