import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../Firebase/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignUpCard.scss";

export default class SignUpCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, displayName, email } = this.state;
    if(password !== confirmPassword){
        (alert("Passwords Dont Match !.."));
        return;
    }
    try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, {displayName});
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          })
    }catch(err){
        console.log(err);
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          })

    }

    
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
    const { password, confirmPassword, displayName, email } = this.state;
    return (
      <div className="register">
        <h1 className="title">I do not have an Account.</h1>
        <span>Sign up with Email and Password</span>
        <form className="reg-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            handleChange={this.handleChange}
            value={displayName}
            required
            autoComplete="off"
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={email}
            required
            autoComplete="off"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={password}
            required
            autoComplete="off"
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            handleChange={this.handleChange}
            value={confirmPassword}
            required
            autoComplete="off"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}
