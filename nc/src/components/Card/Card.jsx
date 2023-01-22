import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="">
      <div className="">
        <Link to={`/product/${item.id}`}>
          <div className="card w-full h-[300px] relative">
            {item.isNew && (
              <span className="absolute bg-white z-30 m-1 px-1 text-blue-500">
                New Arrived
              </span>
            )}
            <img
              className="w-full h-full object-cover overflow-hidden absolute secondImg"
              src={item.img2}
              alt="product Image"
            />
            <img
              className="w-full h-full object-cover overflow-hidden absolute firstImg"
              src={item.img}
              alt="product Image"
            />
          </div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <div className="flex gap-8">
            <h3 className="text-gray-400 line-through font-semibold">
              ${item.oldPrice}
            </h3>
            <h3 className="font-semibold">${item.price}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
