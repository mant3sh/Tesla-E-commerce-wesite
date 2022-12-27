import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="Login">
        <form>
          <div className="login_box">
            <h1>Sign In</h1>

            <h2 className="label">Email</h2>
            <input
              required
              className="login_deatils"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your Email"
              type="email"
              name="user_Email"
              id="user"
            />
            <h2 className="label">Password</h2>
            <input
              required
              type="password"
              className="login_deatils"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="user_password"
              id="user_password"
            />
            <button type="submit" className="Login_buttn">
              Login
            </button>
            <br />
            <br />
            <Link className="Signup_buttn" to="/signin">
              Create Account
            </Link>
          </div>
        </form>
        <div className="loginfooter">
          <a href="#">Tesla 2022</a>
          <a href="#">Privacy & legal</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Login;
