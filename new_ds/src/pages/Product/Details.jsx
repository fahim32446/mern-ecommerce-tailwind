import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../../data";

const Details = () => {
  const { id } = useParams();
  const item = product.find((item) => item.id == id);
  console.log(item);

  return (
    <div className="mt-8 p-5">
      <h3 className="text-2xl font-semibold mb-4">Product Details Page </h3>

      <h3 className="text-2xl font-semibold mb-4">Product Image:</h3>
      <div className="flex gap-4">
        <img className="w-64 rounded" src={item?.img} />
        <img className="w-64 rounded" src={item?.img2} />
      </div>
      <h3 className="text-xl font-semibold mb-4">
        Product Name: {item?.title}{" "}
      </h3>
      <h3 className="text-xl font-semibold mb-4">
        Product Price: ${item?.price}{" "}
      </h3>
      <h3 className="text-xl font-semibold mb-4">Product ID: {item?.id} </h3>
    </div>
  );
};

export default Details;
