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
      payload: { email, password, navigate },
    });
  };
  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex justify-center items-center h-full">
          <div className=" w-96 bg-purple-200">
            <div className="my-3">
              <h1 className="text-3xl text-fuchsia-900">LOGIN</h1>
            </div>
            <div className="mx-3">
              <div className="my-2">
                <label className="block flex  font-medium text-gray-600 items-start mb-1">
                  Email{" "}
                </label>

                <input
                  className="block w-full px-3 py-2 border-gray-500 rounded-md shadow-sm"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="my-2">
                <label className="block flex font-medium text-gray-600 items-start mb-1">
                  Password
                </label>

                <input
                  className="block w-full px-3 py-2 border-gray-500 rounded-md shadow-sm"
                  placeholder="Enter Your Password  "
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button
                className="bg-fuchsia-800 w-full py-1 my-3 text-gray-100 font-semibold"
                onClick={() => signIn()}
              >
                Login
              </button>
              <div className="flex mb-3">
                <h6 className="mr-2">Doesn't Have An Account?</h6>
                <h5 className=" text-fuchsia-800 font-semibold" onClick={navigatePage} style={{ cursor: "pointer" }}>
                  Register Now
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
