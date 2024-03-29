import React, { useState, useEffect } from "react";
import { loginUser } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const SignIn = () => {
  const { isLoading, user, error } = useSelector((state) => state.userReducer);

  const [login, setLogin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({login, navigate}));
  };

//   useEffect(() => {
//     if (user.isAdmin == true) {
//     }
//   }, [dispatch, handleSubmit]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex items-center justify-center bg-[#60a5fa] h-screen">
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h5 className="text-xl font-medium ">Login (Admin Only)</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
              Your email
            </label>
            <input
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none  focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium "
            >
              Your password
            </label>
            <input
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border-gray-300 text-gray-900 text-sm outline-none rounded-lg  focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
        </form>
      </div>
 
    </div>
  );
};

export default SignIn;
