import React, { useEffect } from "react";
import { getOrders } from "../../redux/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";


const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, orders, error } = useSelector(
    (state) => state.orderReducer
  );


  const OrderDetails = (id) => {
    navigate(`../orders/order-details/${id}`)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getOrders());

  }, [dispatch]);

  return (
    <div className="mt-8 p-5 w-full">
      {isLoading ? (
        <Loading />
      ) : (
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
              {Array.isArray(orders) && orders?.map((item, index) => (
                <tr
                  onClick={() => OrderDetails(item.userId)}
                  key={index}
                  className="hover:bg-blue-200 rounded-sm duration-150 transition-colors cursor-pointer"
                >
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
      )}
    </div>
  );
};

export default Orders;
