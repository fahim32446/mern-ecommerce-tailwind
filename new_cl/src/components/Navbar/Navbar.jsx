import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { URL } from "../../const/url";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { data, loading, error, reFetch } = useFetch(`${URL}/category`);
  const { user } = useSelector((state) => state.userSlice);
  const [showSidebar, setShowSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const { cart, cart_quantity, total } = useSelector(
    (state) => state.cartSlice
  );
  console.log(showSidebar);

  return (
    <div className="bg-blue-100">
      <div className="container mx-auto max-w-7xl p-2 md:p-0 mb-5">
        <div className="justify-between py-4 hidden md:flex">
          <div className="flex gap-3">
            {Array.isArray(data) &&
              data.map((item, index) => (
                <Link
                  key={index}
                  to={`../store/${item.title.toLowerCase()}`}
                  className="font-semibold"
                >
                  {item.title}
                </Link>
              ))}
              {!data.length && <span className="text-red-500">No Internet Available</span> }
          </div>
          <div className="font-semibold text-lg">AZ-STORE</div>
          <div className="flex gap-3">
            {["Home", "Store"].map((item, index) => (
              <Link to={item.toLowerCase()} className="font-semibold">
                {item}
              </Link>
            ))}
            {user.name ? (
              <Link to={`../logout`} className="font-semibold">
                Logout
              </Link>
            ) : (
              <Link to={`../login`} className="font-semibold">
                Login
              </Link>
            )}

            <Link to={`../my-order`} className="font-semibold">
              My Order
            </Link>

            {/* <SearchIcon /> */}
            {/* <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon /> */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <ShoppingCartOutlinedIcon />
              <span className="font-semibold absolute left-6 bottom-3 bg-blue-500 text-white rounded-full w-6 h-6 text-center">
                {cart_quantity}
              </span>
            </div>
          </div>
        </div>
        {open && <Cart />}
        <MobileNav
                  showSidebar={showSidebar}
                  setShowSidebar={setShowSidebar}
                />
      </div>
    </div>
  );
};

export default Navbar;
