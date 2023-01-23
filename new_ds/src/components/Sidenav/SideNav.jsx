import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../../assets/dashboard.svg";
import Product from "../../assets/product-svg.svg";
import Control from "../../assets/control.png";
import { TbUsers } from "react-icons/tb";
import { TbLayoutDashboard } from "react-icons/tb";
import { TbPaperBag } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { TbPackage } from "react-icons/tb";
import { TbMenu2 } from "react-icons/tb";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { id: 0, title: "Dashboard", src: TbLayoutDashboard },
    { id: 1, title: "Products", src: TbPaperBag },
    { id: 2, title: "Category", src: TbListDetails },
    { id: 3, title: "Order", src: TbPackage },
    { id: 4, title: "User", src: TbUsers },
  ];

  return (
    <div
      className={` ${
        open ? "min-w-[180px]" : "w-14"
      } bg-white h-[900px] p-2 pt-8 relative`}
    >
      <TbMenu2
        className={`absolute scale-125 cursor-pointer top-4 z-50 left-4 hover:scale-150 duration-200`}
        onClick={() => setOpen(!open)}
      />
   

      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <NavLink
            to={`/${Menu.title.toLowerCase()}`}
            key={index}
            activeclassname="active"
            className="flex duration-200 transition rounded-md p-2 cursor-pointer hover:bg-blue-400 hover:text-white text-dark font-semibold text-sm items-center gap-x-4 mt-2"
          >
            <Menu.src />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 transition`}
            >
              {Menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
