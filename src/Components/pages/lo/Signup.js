import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountService } from "../../../service/accountService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Signup() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handelSignup = async (e) => {
    e.preventDefault();
    try {
      const newuser = await AccountService.signup(email, password).catch(
        (error) => window.alert(error)
      );
      AccountService.updateName(name);
      toast.success("Success your account is created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user]);
  return (
    <div>
      <>
        <div className="Login">
          <div className="login_box">
            <h2 className="label">
              Welcome Let's begin by introduing yourself
            </h2>
            <br />
            <br />
            <form onSubmit={handelSignup}>
              <h2 className="label">Full Name</h2>
              <input
                required
                className="login_deatils"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter your Email"
                type="text"
                name="user_Email"
              />
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
              />
              <h2 className="label">Password</h2>
              <input
                required
                type="password"
                className="login_deatils"
                placeholder="Set your password "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="user_password"
              />
              <br />
              <button type="submit" className="Login_buttn">
                Create my Account
              </button>
            </form>
          </div>

          <div className="loginfooter">
            <a href="#">Tesla 2022</a>
            <a href="#">Privacy & legal</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </>
    </div>
  );
}

export default Signup;
