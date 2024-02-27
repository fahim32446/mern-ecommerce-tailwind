import React from "react";
import { URL } from "../../const/url";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import Loading from "../../pages/Loading/Loading";

const Order = () => {
  const { isLoading, user } = useSelector((state) => state.userSlice);
  const { data, loading, error, reFetch } = useFetch(
    `${URL}/order/find/${user?._id}`
  );

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 mb-5">
      <div className="grid xl:grid-cols-4 gap-10">
        <div className="border p-2 bg-white shadow rounded">
          <h1 className="text-2xl font-bold text-gray-600">Hello,</h1>
          <h1 className="text-md  text-gray-600 mt-2">{user?.name}</h1>
          <h1 className="text-md  text-gray-600">{user?.email}</h1>
          <p className="text-gray-500 mt-10">
            Thank you for your recent purchase. We are honored to gain you as a
            customer and hope to serve you for a long time. Hey, Az store, just
            want to drop a quick note to express our genuine gratitude. Your
            purchase allows us at Az store to continue to do what we love and
            provide you with quality products.
          </p>
        </div>
        <div className="border col-span-3 rounded">
          {loading ? (
            <Loading />
          ) : (
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase ">
                  <tr>
                    <th scope="col" className="py-3 px-6 bg-slate-300">
                      Order ID
                    </th>
                    <th scope="col" className="py-3 px-6 bg-slate-300">
                      Product
                    </th>
                    <th scope="col" className="py-3 px-6 bg-slate-300 ">
                      Total Pay
                    </th>
                    <th scope="col" className="py-3 px-6 bg-slate-300">
                      Delivery Address
                    </th>
                  </tr>
                </thead>

                {data.map((item, index) => (
                  <tbody key={index}>
                    <tr className="border-b border-gray-200">
                      <th
                        scope="row"
                        className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                      >
                        {item._id}
                      </th>
                      <td className="py-4 px-6">
                        {item.products.map((p, i) => (
                          <div key={i}>
                            <div className="flex flex-row justify-between">
                              <div className="mb-2">
                                <h1>
                                  <span className="font-semibold">Name:</span>{" "}
                                  {p.title}
                                </h1>
                                <p>
                                  <span className="font-semibold">Size:</span>{" "}
                                  {p.size}
                                </p>
                                <div className="flex gap-1">
                                  <p className="font-semibold">Color: </p>
                                  <div
                                    className={`w-5 h-5 ${p.color} rounded`}
                                  ></div>
                                </div>
                                <p>
                                  <span className="font-semibold">
                                    Quantity:{" "}
                                  </span>
                                  {p.quantity}
                                </p>
                              </div>
                              <div className="w-20 h-20">
                                <img className="rounded" src={p.image} />
                              </div>
                            </div>

                            <hr className="w-full" />
                          </div>
                        ))}
                      </td>
                      <td className="py-4 px-6 bg-gray-50 ">${item.amount}</td>
                      <td className="py-4 px-6">
                        <p>
                          <span className="font-semibold">Name: </span>
                          {item.address?.name}
                        </p>
                        <p>
                          <span className="font-semibold">Address: </span>
                          {item.address?.destination}
                        </p>
                        <p>
                          <span className="font-semibold">Phone No: </span>
                          {item.address?.phone}
                        </p>
                        <p>
                          <span className="font-semibold">Email: </span>
                          {item.email}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
