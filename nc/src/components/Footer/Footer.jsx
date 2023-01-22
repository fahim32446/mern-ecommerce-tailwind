import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 mt-48">
      <div className="flex flex-wrap space-y-5">
        <div className="basis-1/2 xl:basis-1/4">
          <h3 className="font-semibold text-lg">Categories</h3>
          <div className="flex flex-col gap-3">
            {["Man", "Women", "Children", "Accessories"].map((item, index) => (
              <Link>{item}</Link>
            ))}
          </div>
        </div>
        <div className="basis-1/2 xl:basis-1/4">
          <h3 className="font-semibold text-lg">Link</h3>
          <div className="flex flex-col gap-3">
            {["Homepage", "About", "Contact", "Stores"].map((item, index) => (
              <Link>{item}</Link>
            ))}
          </div>
        </div>
        <div className="basis-full xl:basis-1/4">
          <h3 className="font-semibold text-lg">About</h3>
          <p className="text-justify xl:max-w-[250px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sit
            accusantium excepturi soluta! Praesentium optio, explicabo autem
            tempora ab tempore.
          </p>
        </div>
        <div className="basis-full xl:basis-1/4">
          <h3 className="font-semibold text-lg">Contact</h3>
          <p className="text-justify xl:max-w-[250px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sit
            accusantium excepturi soluta! Praesentium optio, explicabo autem
            tempora ab tempore.
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Footer;
