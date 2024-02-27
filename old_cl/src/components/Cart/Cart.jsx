import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, removeItems } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, total } = useSelector(
    (state) => state.cartSlice
  );

  const handleRemove = (item) => {
    dispatch(removeItem(item))
  };

  const handleReset = () => {
    dispatch(removeItems())
  }

  const Checkout = ()=>{
    navigate("../checkout")
  }

  return (
    <div className="absolute right-10 bg-white space-y-5  text-gray-600 z-30 p-3 shadow-2xl duration-300 ease-in-out transition-all">
      <h1 className="w-[400px] p-1 text-xl font-semibold">
        Product in your cart
      </h1>

      {cart.map((item, index) => (
        <div key={index} className=" flex gap-2 items-center shadow-sm p-2">
          <span>{index + 1}.</span>
          <div className="w-24 h-24 ">
            <img
              className="w-full h-full object-cover"
              src={item.image[0]}
              alt="Product Image"
             
            />
          </div>
          <div className="flex flex-col">
            <h1 className=" font-semibold">{item.title.substring(0, 40)+"..."}</h1>
            <p className="">{item.size}</p>
            <p className="">{item.color}</p>
            <p className="text-blue-500">
              {item.quantity} * ${item.price} = {item.quantity * item.price}
            </p>
          </div>
          <DeleteOutlinedIcon onClick={()=>handleRemove(item)} className="text-red-500 m-1 cursor-pointer" />
        </div>
      ))}
      <div className="flex justify-between mt-5">
        <h1 className="text-lg font-semibold">SUBTOTAL</h1>
        <h1 className="text-lg font-semibold">${total}</h1>
      </div>

      <button
       onClick={Checkout}
        className="bg-blue-400 px-6 py-2 text-white font-semibold cursor-pointer"
      >
        PROCEED TO CHECKOUT
      </button>

      <div onClick={handleReset} className="text-red-500 cursor-pointer">Reset Cart</div>
    </div>
  );
};

export default Cart;
