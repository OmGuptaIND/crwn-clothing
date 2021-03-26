import React, { Component } from "react";
import "./SignInCard.scss";

//Components;
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { auth, signInWithGoogle } from "../../Firebase/firebase.js";

export default class SignInCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    await auth.signInWithEmailAndPassword(email, password)
    .then(user => {
        this.setState({
            email: "",
            password: "",
          });
    })
    .catch(err => console.log(err));
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
            autoComplete="off"
          />
          <FormInput
            label="Password"
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
            autoComplete="off"
          />
          <div className="buttons">
            <Button type="submit" onClick = {this.handleSubmit} >Sign In</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle} type="submit">
              Sign In Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
