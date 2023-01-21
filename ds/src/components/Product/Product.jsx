import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from '../../redux/ProductSlice';
import {useDispatch } from 'react-redux'


const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    navigate(`details/${id}`)
  }

  const Delete = (id) => {
    dispatch(deleteProduct(id));;
  }

  const Edit = (id) => {
    navigate(`../products/add-new-product/${id}`)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 place-items-center">
      {product.map((item, i) => (
        <div key={i} className="border rounded w-[200px] py-2 space-y-1 my-2 cursor-pointer">
          <img onClick={()=>handleClick(item.id)} className="w-full h-[220px] px-2 object-cover duration-500 ease-in-out hover:scale-105" src={item.image[0]} />
          <h2 className="px-2 font-semibold text-gray-600 truncate">
            {item.title}
          </h2>
          <h2 className="px-2 font-bold">{`$${item.price}.00`}</h2>
          <div className="px-2 flex gap-2">
            <button onClick={()=>Edit(item._id)} className="flex-1 text-gray-500 border rounded  duration-200 ease-in-out hover:bg-gray-600 hover:text-white font-semibold">
              Edit
            </button>
            <button onClick={()=>Delete(item._id)} className="flex-1 text-red-600 border rounded  duration-200 ease-in-out hover:bg-red-600 hover:text-white font-semibold">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
