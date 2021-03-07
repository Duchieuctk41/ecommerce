import React, { Component } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.ultis";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
          <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
