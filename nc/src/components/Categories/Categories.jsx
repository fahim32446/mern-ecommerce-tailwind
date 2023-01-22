import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 space-y-8 space-x-2">
      <div className="grid grid-cols-auto lg:grid-cols-4 gap-2">
        <div className="relative">
          <img
            className="max-h-[250px] w-full object-cover"
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute left-0 bottom-0 right-0 top-0 z-30  ">
            <Link
              className="bg-white px-4 py-2 font-semibold hover:bg-sky-700 hover:text-white"
              to="/products/1"
            >
              Sale
            </Link>
          </button>
        </div>
        <div className="row-span-2 border">
          <div className="relative">
            <img
              className="min-h-[510px] w-full object-cover"
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button className="absolute left-0 bottom-0 right-0 top-0 z-30 ">
              <Link
                className="bg-white px-4 py-2 font-semibold hover:bg-sky-700 hover:text-white "
                to="/products/1"
              >
                Men
              </Link>
            </button>
          </div>
        </div>
        <div className="bg-red-100">
          <div className="relative">
            <img
              className="max-h-[250px] w-full object-cover"
              src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button className="absolute left-0 bottom-0 right-0 top-0 z-30  ">
              <Link
                className="bg-white px-4 py-2 font-semibold hover:bg-sky-700 hover:text-white "
                to="/products/1"
              >
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className="bg-red-100">
          <div className="relative">
            <img
              className="max-h-[250px] w-full object-cover"
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button className="absolute left-0 bottom-0 right-0 top-0 z-30 ">
              <Link
                className="bg-white px-4 py-2 font-semibold hover:bg-sky-700 hover:text-white "
                to="/products/1"
              >
                ACCESSORIES
              </Link>
            </button>
          </div>
        </div>
        <div className="bg-red-100">
          <div className="relative">
            <img
              className="max-h-[250px] w-full object-cover"
              src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button className="absolute left-0 bottom-0 right-0 top-0 z-30 ">
              <Link
                className="bg-white px-4 py-2 font-semibold hover:bg-sky-700 hover:text-white "
                to="/products/1"
              >
                Sale
              </Link>
            </button>
          </div>
        </div>
        <div className="max-h-[250px] w-full bg-red-100 col-span-2 overflow-hidden">
          <div className="relative">
            <img
              className="h-[250px] w-full object-cover"
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button className="absolute left-0 bottom-0 right-0 top-0 z-30  ">
              <Link
                className="bg-white px-4 py-2 font-semibold hover:bg-sky-700 hover:text-white "
                to="/products/1"
              >
                New Arrived
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
