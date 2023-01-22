import React, { useEffect } from "react";
import { getCustomerList } from "../../redux/customerListSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading";

const User = () => {
  const { isLoading, customers } = useSelector((state) => state.customerList);
  const dispatch = useDispatch();
  console.log(customers);
  useEffect(() => {
    dispatch(getCustomerList());
  }, [dispatch]);

  return (
    <div className="mt-8 p-5 w-full">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="grid-cols-4 gap-4 bg-white my-2 p-3 rounded-sm shadow hidden xl:grid">
            <p>ID</p>
            <p>Name</p>
            <p>Email</p>
          </div>
          {customers?.map((item, index) => (
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 bg-white my-2 p-3 rounded-sm shadow">
              <p>{item._id}</p>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
