import React, { useEffect } from "react";
import { removeUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeUser());
    localStorage.clear("user");
  }, [dispatch]);
  
  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 mb-5">
      <div className="flex justify-center items-center h-[40vh]">
        <p className="text-2xl font-semibold"> You are now logged out</p>
      </div>
    </div>
  );
};

export default Logout;
