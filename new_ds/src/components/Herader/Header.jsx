import React from "react";
import { TbLogin } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

const handleClick = () => {
  localStorage.clear("user")
  navigate("./login")
}

  return (
    <div className="absolute w-full border h-[50px] flex justify-end items-center px-5 bg-[#fff] z-10">
      <div onClick={handleClick} className="flex justify-between items-center gap-2 p-1 rounded bg-red-500 text-white cursor-pointer">
        Log Out
        <TbLogin />
      </div>
    </div>
  );
};

export default Header;
