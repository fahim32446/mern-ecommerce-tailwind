import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import { getOrders } from "../../redux/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";

const Orders = () => {
  const { isLoading, orders, error } = useSelector(
    (state) => state.orderReducer
  );
  const dispatch = useDispatch();
  console.log(orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className="mt-8 p-5 w-full">{isLoading ? <Loading /> : <Order orders= {orders}/>}</div>
  );
};

export default Orders;
