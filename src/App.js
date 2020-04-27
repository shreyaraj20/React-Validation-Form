import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                name="firstname"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lastname"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className=""
                placeholder="Email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="firstname">First Name</label>
              <input
                type="password"
                className=""
                placeholder="PassWord"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
