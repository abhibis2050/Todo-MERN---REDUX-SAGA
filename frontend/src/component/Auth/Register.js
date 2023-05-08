import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import homepageBackground from "../../assets/2.jpg";

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
    dispatch({
      type: "REGISTER",
      payload: { name, email, password, navigate },
    });
  };
  return (
    <div>
      <>
        <div className="w-screen h-screen">
          <div className="flex justify-center items-center h-full ">
            <div className="hidden lg:block lg:w-1/2 h-screen relative">
              {/* <div className="bg-fuchsia-900 h-screen absolute w-full opacity-40"></div> */}
              <img src={homepageBackground} />
            </div>

            <div className="lg:w-1/2 flex justify-center items-center h-screen">
              <div className=" w-full xs:w-96 bg-slate-200 ">
                <div className="my-3">
                  <h1 className="text-3xl text-black">REGISTER</h1>
                </div>
                <div className="mx-3">
                  <div className="my-2">
                    <label className="block flex  font-medium text-black items-start mb-1">
                      Name
                    </label>

                    <input
                      className="block w-full px-3 py-2 border-gray-500 rounded-md shadow-sm"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="my-2">
                    <label className="block flex  font-medium text-black items-start mb-1">
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
                    <label className="block flex font-medium text-black items-start mb-1">
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
                    className="bg-black w-full py-1 my-3 text-gray-100 font-semibold"
                    onClick={() => signUp()}
                  >
                    Register
                  </button>
                  <div className="flex mb-3">
                    <h6 className="mr-2">Already Have An Account,</h6>
                    <h5
                      className=" text-black font-semibold"
                      onClick={navigatePage}
                      style={{ cursor: "pointer" }}
                    >
                      Login Now
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
