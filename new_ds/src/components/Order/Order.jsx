import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../redux/orderSlice";
import { useDispatch, useSelector } from "react-redux";


const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, orders, error } = useSelector(
    (state) => state.orderReducer
  );

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const OrderDetails = (id)=>{
    navigate(`../orders/order-details/${id}`)
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Total Amount</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(orders) &&  orders?.slice(0, 5).map((item, index) => (
            <tr onClick={()=>OrderDetails(item.userId)} key={index} className="hover:bg-blue-200 rounded-sm duration-150 transition-colors">
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>${item.amount}</td>
              <td>
                <span className="bg-green-700 px-3 py-1 rounded-xl text-white font-semibold ">
                  Delivered
                </span>
              </td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td className="">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
