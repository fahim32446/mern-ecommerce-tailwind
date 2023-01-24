import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { URL } from "../../const/url";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileNav = ({ showSidebar, setShowSidebar }) => {
  const { data, loading, error, reFetch } = useFetch(`${URL}/category`);
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const { cart, cart_quantity, total } = useSelector(
    (state) => state.cartSlice
  );
  return (
    <div className="md:hidden flex justify-between items-center">
      <Link to={"../"} className="font-semibold">
        AZ-STORE
      </Link>

      {showSidebar ? (
        <div className="z-30" onClick={(e) => setShowSidebar(!showSidebar)}>
          <CancelIcon />
        </div>
      ) : (
        <div className="z-30" onClick={(e) => setShowSidebar(!showSidebar)}>
          <DashboardIcon />
        </div>
      )}

      <div
        className={`top-0  right-0 w-1/2 bg-black/40 backdrop-blur-lg p-10 pl-20 text-white fixed h-full z-10  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-3 absolute right-5 top-20 w-[80%] text-right">
          {["Home", "Store"].map((item, index) => (
            <Link key={index} to={item.toLowerCase()} className="font-semibold hover:bg-blue-400 duration-200">
              {item}
              <hr className="w-full" />
            </Link>
          ))}
          {user.name ? (
            <Link to={`../logout`} className="font-semibold hover:bg-blue-400 duration-200">
              Logout
              <hr className="w-full" />
            </Link>
          ) : (
            <Link to={`../login`} className="font-semibold hover:bg-blue-400 duration-200">
              Login
              <hr className="w-full" />
            </Link>
          )}

          <Link to={`../my-order`} className="font-semibold hover:bg-blue-400 duration-200">
            My Order
            <hr className="w-full" />
          </Link>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <Link
                key={index}
                to={`../store/${item.title.toLowerCase()}`}
                className="font-semibold hover:bg-blue-400 duration-200"
              >
                {item.title}
                <hr className="w-full" />
              </Link>
            ))}
        </div>

        <div className="flex flex-col gap-3">
          <div
            className="relative cursor-pointer"
            onClick={(e) => navigate("../checkout")}
          >
            <ShoppingCartOutlinedIcon />
            <span className="font-semibold absolute left-6 bottom-3 bg-blue-500 text-white rounded-full w-6 h-6 text-center">
              {cart_quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
