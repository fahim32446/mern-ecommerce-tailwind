import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { addCart } from "../../redux/cartSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { URL } from "../../const/url";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [co, setColor] = useState("");
  const [si, setSize] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data, loading, error, reFetch } = useFetch(
    `${URL}/product/find/${id}`
  );

  const handleClick = (e) => {
    e.preventDefault();
    const { size, color, ...others } = data;
    dispatch(addCart({ ...others, color: co, size: si, quantity }));
  };

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 ">
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="flex flex-col-reverse xl:flex-row gap-3 flex-1">
            {/* Side Image */}
            {Array.isArray(data.image) ? (
              <div className="flex gap-2 justify-center xl:flex-col xl:justify-start">
                {!loading &&
                  data.image.map((item, index) => (
                    <img
                      className="w-[100px] h-[100px] object-cover"
                      src={item}
                      alt="Product Image"
                      onClick={(e) => setSelectedImg(index)}
                    />
                  ))}
              </div>
            ) : (
              "None"
            )}

            {/* Large Main Image */}
            <div>
              <img
                className="h-[550px] w-[500px] object-cover"
                src={
                  Array.isArray(data.image)
                    ? data?.image[selectedImg]
                    : data.image
                }
                alt="Product Image"
              />
            </div>
          </div>
          
          {/* Product Description */}
          <div className="flex-1 space-y-7">
            <h1 className="font-bold text-xl">{data.title}</h1>
            <h1 className="font-bold text-xl text-blue-400">
              ${data.price}.00
            </h1>
            <p className="text-gray-400">${data.description}</p>
            <div className="flex datas-center gap-3 items-center">
              <button
                className="w-10 h-10 bg-gray-300"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button
                className="w-10 h-10 bg-gray-300"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-5">
                <select
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  className="cursor-pointer rounded border p-1 my-3"
                >
                  <option disabled selected>
                    Choose Size
                  </option>
                  {data.size?.map((s, i) => (
                    <option key={i}>{s.toUpperCase()}</option>
                  ))}
                </select>

                <select
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  className="cursor-pointer rounded border p-1 my-3"
                >
                  <option disabled selected>
                    Choose color
                  </option>
                  {data.color?.map((s, i) => (
                    <option key={i}>{s.toUpperCase()}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleClick}
                className="w-[250px] bg-blue-500 text-white font-semibold p-2 hover:bg-blue-700 transition"
              >
                <AddShoppingCartIcon /> ADD TO CART
              </button>
            </div>
            <div className="flex flex-col text-gray-400">
              <span>Brand: {data.brands || "Unknown"}</span>
            </div>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
