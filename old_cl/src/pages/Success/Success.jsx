import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { removeItems } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { URL } from "../../const/url";
import Axios from "axios";

const Success = () => {
  const location = useLocation();
  // const data = location.state?.stripeData;
  const cart = location.state?.cart;
  const address = location.state?.sendTo;
  const total = location.state?.total;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    const createOrder = async () => {
      try {
        console.log(cart);
        const res = await Axios.post(`${URL}/order`, {
          name: user.name,
          email: user.email,
          userId: user._id,
          products: cart.map((item) => ({
            image: item.image[0],
            title: item.title,
            productId: item._id,
            color: item.color,
            size: item.size,
            quantity: item._quantity,
          })),
          amount: total,
          address: address,
        });
      } catch (error) {
        console.log(error);
      }
    };
    cart && createOrder();
    dispatch(removeItems());
  }, []);

  return (
    <div className="container mx-auto mt-16 ">
      <div className="flex flex-col justify-center items-center mt-[10%]">
        <h1 className="text-xl bg-slate-200 p-3 rounded shadow-md">
          Thank you {address?.name} for your purchase
        </h1>

        <p className="text-xs bg-orange-200 p-3 rounded mt-5">
          We will deliver your product to {address?.destination}
        </p>

        <p className="mt-3"> Your ID: {user._id}</p>
        <p className="mt-3"> Your Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Success;
