import React from "react";
import google from "../assets/img/google.svg";
import facebook from "../assets/img/facebook.svg";

function Login() {
  //Component
  return (
    <div className="bg">
      <div className="container">
        <div className="content-login">
          <form>
            <div className="title">LOGIN</div>
            <div className="email">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Email or username"
                className="input-counter"
              />
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="input-counter"
              />
            </div>
            <div className="forgot">Forgot Password?</div>
            <div className="submit">
              <button type="submit" id="btn-login">
                Login
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
export default Login;
