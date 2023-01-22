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

  useEffect(() => {
    dispatch(findOrder(id));
  }, []);

  return (
    <div className="mt-8 p-5 w-full">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="border w-fit bg-white rounded-md px-2">
            <span className="text-gray-400"> User Name: </span> {orders?.name}
          </div>
          <div className="border w-fit bg-white rounded-md px-2 my-1">
            <span className="text-gray-400"> User Email: </span> {orders?.email}
          </div>

          <div className="border w-fit bg-white rounded-md px-2 my-1">
            <span className="text-gray-400">User ID: </span>
            {orders?.userId}
          </div>

          <div className="border w-fit bg-white rounded-md px-2 my-1">
            Users Product:
            {orders?.products?.map((item, index) => (
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
              {orders?.amount}
            </p>
            <p>
              <span className="text-gray-400">Order status: </span>
              {orders?.status}
            </p>
           
              <div className="border rounded shadow my-2">
                <p className="text-xl text-center">Delivery Address</p>
                <div>
                <p>
                  <span className="text-gray-400">Name: </span>
                  {orders.address?.name}
                </p>
                <p>
                  <span className="text-gray-400">Phone: </span>
                  {orders.address?.phone}
                </p>
                <p>
                  <span className="text-gray-400">Destination: </span>
                  {orders.address?.destination}
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
