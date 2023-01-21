import React, { useEffect } from "react";
import Product from "../../components/Product/Product";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";
import Loading from "../../components/Loading/Loading"

const Products = () => {
  const { isLoading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const navigate = useNavigate();

  const handelClick = () => {
    navigate("./add-new-product");
  };

  return (
    <div className="my-10 px-5 w-[85%]">
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-xl font-semibold">Product List</h1>
        <button
          onClick={handelClick}
          className="bg-blue-400 px-2 py-1 rounded-xl font-semibold text-white hover:bg-blue-500 duration-200"
        >
          + Add Product
        </button>
      </div>

      <div className="bg-white mt-5 rounded py-10 px-2">
        {isLoading ? <Loading /> : <Product product={products} />}
      </div>
    </div>
  );
};

export default Products;
