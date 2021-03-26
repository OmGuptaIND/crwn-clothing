import React, { Component } from "react";
import "./SignInPage.scss";

//Components;
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { signInWithGoogle } from "../../Firebase/firebase.js";

export default class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="signin">
        <h1 className="title">I Already have an Account</h1>
        <span>Sign in with email and Password</span>

        <form className="wrapper-from" onClick={this.handleSubmit}>
          <FormInput
            label="Email"
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle} type="submit">
              Sign In Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
