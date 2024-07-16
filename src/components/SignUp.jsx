import React from "react";
import google from "../assets/img/google.svg";
import facebook from "../assets/img/facebook.svg";

function Signup() {
  function signup(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (name === "" && email === "" && password === "") {
      window.alert("You must fill the form!");
    } else {
      window.alert("Registration is successful, please log in");
    }
  }
  return (
    <div className="bg">
      <div className="container">
        <div className="content-login">
          <form onSubmit={signup}>
            <div className="title">Sign Up</div>
            <div className="email">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="input-counter"
              />
            </div>
            <div className="email">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="input-counter"
              />
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="input-counter"
              />
            </div>
            <div className="forgot">Forgot Password?</div>
            <div className="submit">
              <button type="submit" id="btn-login">
                Sign Up
              </button>
            </div>
            <div className="or">OR</div>
            <div className="sosmed">
              <div className="google">
                <img src={google} alt="" />
              </div>
              <div className="facebook">
                <img src={facebook} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
