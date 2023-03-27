import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigatePage = () => {
    navigate("/");
  };

  const signUp = () => {
    dispatch({ type: "REGISTER", payload: { name, email, password,navigate } });
  };
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

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
      <button onClick={() => signUp()}>Register</button>
      <h6>
        Already Have An Account,
      </h6>
      <h5 onClick={navigatePage} style={{cursor:"pointer"}}>Login Now</h5>
    </div>
  );
};

export default Register;
