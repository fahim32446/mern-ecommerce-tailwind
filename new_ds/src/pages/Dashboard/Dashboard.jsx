import React from "react";
import dollarIcon from "../../assets/dollar-icon.png";
import order from "../../assets/order.png";
import product from "../../assets/product.png";
import Chart from "react-apexcharts";
import Order from "../../components/Order/Order";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="my-14">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-2 justify-between mt-6">
        <div className="flex gap-5 items-center pl-5 lg:w-[30%] py-4 bg-white rounded">
          <img
            className="w-10 h-10 outline outline-offset-1 outline-green-500 rounded"
            src={dollarIcon}
            alt="dollarIcon"
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-400">Total Sales</h1>
            <h6 className="text-xl font-semibold">$566416.56</h6>
          </div>
        </div>

        <div className="flex gap-5 items-center pl-5 lg:w-[30%] py-4 bg-white rounded">
          <img
            className="w-10 h-10 outline outline-offset-1 outline-blue-500 rounded"
            src={order}
            alt="order"
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              Total Orders
            </h1>
            <h6 className="text-xl font-semibold">3547</h6>
          </div>
        </div>

        <div className="flex gap-5 items-center pl-5 lg:w-[30%] py-4 bg-white rounded">
          <img
            className="w-10 h-10 outline outline-offset-1 outline-yellow-500 rounded"
            src={product}
            alt="product"
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              Total Product
            </h1>
            <h6 className="text-xl font-semibold">340</h6>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className=" hidden lg:flex justify-center gap-4 mt-8">
        <div className="bg-white py-2 rounded">
          <Chart
            type="bar"
            style={{ width: "100%" }}
            width={550}
            height={305}
            series={[
              {
                name: "Revenue",
                data: [
                  1004, 700, 900, 400, 1400, 1124, 1074, 1351, 1000, 811, 655,
                  1000,
                ],
              },
            ]}
            options={{
              title: {
                text: "Revenue statistics",
                style: { fontSize: 14, marginBottom: "20px" },
              },

              colors: ["#60a5fa"],
              stroke: { width: 2, curve: "smooth" },

              xaxis: {
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },

              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `$${val}`;
                  },
                },
              },

              dataLabels: {
                formatter: (val) => {
                  return `$${val}`;
                },
                enabled: false,
              },
            }}
          />
        </div>

        <div className="bg-white py-2 rounded">
          <Chart
            type="bar"
            style={{ width: "100%" }}
            width={550}
            height={305}
            series={[
              {
                name: "Visitor",
                data: [
                  20000, 14000, 16000, 18000, 17070, 20500, 21000, 25000, 21000,
                  21240, 21400, 20140,
                ],
              },
            ]}
            options={{
              title: {
                text: "Visitor statistics",
                style: { fontSize: 14, marginBottom: "20px" },
              },

              colors: ["#65a454"],
              stroke: { width: 2, curve: "smooth" },

              xaxis: {
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },

              dataLabels: {
                enabled: false,
              },
            }}
          />
        </div>
      </div>

      {/* Latest Order */}
      <div className="hidden lg:block mt-5 bg-white p-2 rounded">
        <div className="flex justify-between my-3 px-2">
          <h1 className="text-md font-semibold">Latest Order</h1>
          <h1
            onClick={(e) => navigate("../order")}
            className="text-md font-semibold cursor-pointer text-blue-600"
          >
            View All Orders
          </h1>
        </div>

        <Order />
      </div>
    </div>
  );
};

export default Dashboard;
