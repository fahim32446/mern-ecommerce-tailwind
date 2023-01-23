import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { regUser } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import LoginLoading from "../Login/LoginLoading";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user, error } = useSelector(
    (state) => state.userSlice
  );

  console.log(user);

  const [info, setInfo] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(regUser({info, navigate}));
  };

  const Login = () => {
    navigate("../login");
  };

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 mb-5">
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white border shadow xl:w-[35%] rounded p-5 py-10"
      >
        <h1 className="text-center font-bold text-xl mb-5">Register Now</h1>

        <div className="space-y-1">
          <p className="font-semibold">Name</p>
          <input
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            className="border w-full rounded-md h-8 px-2 outline-blue-400"
            type="text"
            required
          />
        </div>

        <div className="space-y-1 mt-3">
          <p className="font-semibold">Email</p>
          <input
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            className="border w-full rounded-md h-8 px-2 outline-blue-400"
            type="Email"
            required
          />
        </div>

        <div className="space-y-1 mt-3">
          <p className="font-semibold">Password</p>
          <input
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
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
            Sign Up
          </button>
        )}
       
        <p className="mt-5 font-semibold">
          Already have an account Login{" "}
          <span className="cursor-pointer underline" onClick={Login}>
            here
          </span>
        </p>
      </form>
    </div>
  </div>
  );
};

export default Signup;
