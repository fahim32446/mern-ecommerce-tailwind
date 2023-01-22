import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { addCart } from "../../redux/cartSlice";
import { product } from "../../data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const { id } = useParams();
  const item = product.find((item) => item.id == id);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addCart({ ...item, quantity }));
  };

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 ">
      <div className="flex flex-col xl:flex-row gap-3">
        <div className="flex flex-col-reverse xl:flex-row gap-3 flex-1">
          {/* Side Image */}
          <div className="flex gap-2 justify-center xl:flex-col xl:justify-start">
            <img
              className="w-[100px] h-[100px] object-cover"
              src={item.img[0]}
              alt="Product Image"
              onClick={(e) => setSelectedImg(0)}
            />
            <img
              className="w-[100px] h-[100px] object-cover"
              src={item.img[1]}
              alt="Product Image"
              onClick={(e) => setSelectedImg(1)}
            />
          </div>
          {/* Large Main Image */}
          <div>
            <img
              className="h-[550px] w-[500px] object-cover"
              src={item.img[selectedImg]}
              alt="Product Image"
            />
          </div>
        </div>
        {/* Product Description */}
        <div className="flex-1 space-y-7">
          <h1 className="font-bold text-xl">{item.title}</h1>
          <h1 className="font-bold text-xl text-blue-400">${item.price}.00</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit
            ducimus quos eius, quasi, sequi nesciunt fugit, consectetur quod nam
            iusto soluta dolorum ipsa nobis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Iste exercitationem praesentium, rem
            tempora ab hic.
          </p>
          <div className="flex items-center gap-3">
            <button
              className="w-10 h-10 bg-gray-300"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
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

          <button
            onClick={handleClick}
            className="w-[250px] bg-blue-500 text-white font-semibold p-2 hover:bg-blue-700 transition"
          >
            <AddShoppingCartIcon /> ADD TO CART
          </button>

          <div className="flex gap-5">
            <div className="text-blue-400 cursor-pointer">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="text-blue-400 cursor-pointer">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>

          <div className="flex flex-col text-gray-400">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
