import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { URL } from "../../const/url";
import shuffle from "lodash/shuffle";
import Loading from "../../pages/Loading/Loading";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error, reFetch } = useFetch(`${URL}/product`);

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 space-y-8 space-x-2">
      <div className="flex flex-col xl:flex-row justify-between">
        <h1 className="font-bold text-2xl capitalize flex-1">
          {type} products
        </h1>
        <p className="text-gray-400 flex-[2]">
          Introducing our featured products, crafted with the highest quality
          materials to ensure durability and longevity. With ergonomic design,
          these products are designed for maximum comfort, making them perfect
          for everyday use.
        </p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 gap-y-[20px]">
        {loading? <Loading/> : type === "Latest"
          ? data
              .slice(0, 4)
              .map((item) => <Card item={item} key={item.id} />)
          : shuffle(data)
              .slice(0, 4)
              .map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
