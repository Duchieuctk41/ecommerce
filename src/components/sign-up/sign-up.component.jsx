import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.ultis";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert("Không khớp mật khẩu");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword({
        email,
        password
      });

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h1>I do not have an account</h1>
        <span>Sign up your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <FormInput type="text" name="displayName" value={displayName} label="display Name" onChange={this.handleChange} required ></FormInput>
        <FormInput type="email" name="email" value={email} label="Email" onChange={this.handleChange} required ></FormInput>
        <FormInput type="password" name="password" value={password} label="Password" onChange={this.handleChange} required ></FormInput>
        <FormInput type="confirmPassword" name="confirmPassword" value={confirmPassword} label="Confirm Password" onChange={this.handleChange} required ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;
