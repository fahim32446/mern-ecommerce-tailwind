import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import LoginLoading from "./LoginLoading";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user, message, error } = useSelector(
    (state) => state.userSlice
  );

  const [login, setLogin] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({login, navigate}));
  };

  const SignUp = () => {
    navigate("../sign-up");
  };

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 mb-5">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white border shadow xl:w-[35%] rounded p-5 py-10"
        >
          <h1 className="text-center font-bold text-xl mb-5">LOG IN</h1>

          <div className="space-y-1">
            <p className="font-semibold">Your Email</p>
            <input
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              className="border w-full rounded-md h-8 px-2 outline-blue-400"
              type="Email"
              required
            />
          </div>

          <div className="space-y-1 mt-3">
            <p className="font-semibold">Your Password</p>
            <input
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              className="border w-full rounded-md h-8 px-2 outline-blue-400"
              type="password"
              required
            />
          </div>
          
          {isLoading ? (
            <LoginLoading />
          ) : (
            <button
              className="text-center w-52 bg-blue-400 px-4 py-1 rounded-sm mt-3 text-white font-semibold mx-auto block"
              type="submit"
            >
              Login
            </button>
          )}
          <p className="text-red-500 text-center">{message || ""}</p>
          <p className="mt-5 font-semibold">
            Do not have account registration{" "}
            <span className="cursor-pointer underline" onClick={SignUp}>
              here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
