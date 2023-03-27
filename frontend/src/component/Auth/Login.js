import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigatePage = () => {
    navigate("/register");
  };

  const signIn = () => {
    dispatch({
      type: "LOGIN",
      payload: { email, password ,navigate},
    });
  };
  return (
    <div>
      <div>
        <label>Email</label>
        <input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={() => signIn()}>Login</button>
      <h6>Doesn't Have An Account?</h6>
      <h5 onClick={navigatePage} style={{ cursor: "pointer" }}>
        Register Now
      </h5>
    </div>
  );
};

export default Login;
