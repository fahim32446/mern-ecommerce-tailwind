import React, { useEffect } from "react";
import { findOrder } from "../../redux/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const OrderDetails = () => {
  const { isLoading, orders, error } = useSelector(
    (state) => state.orderReducer
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(orders);

  useEffect(() => {
    dispatch(findOrder({id}));
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="mt-8 p-5 w-full">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="border w-fit bg-white rounded-md px-2">
            <span className="text-gray-400"> User Name: </span> {orders[0]?.name}
          </div>
          <div className="border w-fit bg-white rounded-md px-2 my-1">
            <span className="text-gray-400"> User Email: </span> {orders[0]?.email}
          </div>

          <div className="border w-fit bg-white rounded-md px-2 my-1">
            <span className="text-gray-400">User ID: </span>
            {orders[0]?.userId}
          </div>

          <div className="border w-fit bg-white rounded-md px-2 my-1">
            Users Product:
            {orders[0]?.products?.map((item, index) => (
              <div className="border p-2 rounded shadow my-3">
                <p>
                  <span className="text-gray-400">Product title: </span>
                  {item?.title}
                </p>
                <p>
                  <span className="text-gray-400">Product size: </span>
                  {item?.size}
                </p>
                <p>
                  <span className="text-gray-400">Product color: </span>
                  {item?.color}
                </p>
                <p>
                  <span className="text-gray-400">Product quantity: </span>
                  {item?.quantity}
                </p>

                <img className="w-[100px]" src={item?.image} />
              </div>
            ))}
            <p>
              <span className="text-gray-400">Total price: </span>$
              {orders[0]?.amount}
            </p>
            <p>
              <span className="text-gray-400">Order status: </span>
              {orders[0]?.status}
            </p>
            <div className="border rounded shadow my-2">
              <p className="text-xl text-center">Delivery Address</p>
              <div>
                <p>
                  <span className="text-gray-400">Name: </span>
                  {orders[0]?.address?.name}
                </p>
                <p>
                  <span className="text-gray-400">Phone: </span>
                  {orders[0]?.address?.phone}
                </p>
                <p>
                  <span className="text-gray-400">Destination: </span>
                  {orders[0]?.address?.destination}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
