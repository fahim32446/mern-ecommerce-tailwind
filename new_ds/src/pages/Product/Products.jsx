import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";
import { getTotalProducts } from "../../redux/totalProducts";
import Loading from "../../components/Loading/Loading";
import Paginate from "../../components/Paginate/Paginate";

const Products = () => {
  const [page, setPage] = useState(1);
  const { isLoading, products, error } = useSelector((state) => state.products);
  const { totalProduct } = useSelector((state) => state.totalProducts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotalProducts());
    dispatch(getProducts({ page }));
  }, [page]);

  const totalPages = totalProduct / 6;

  const handlePrevious = () => {
    setPage(Math.max(page - 1, 1));
  };

  const handleNext = () => {
    setPage(Math.min(page + 1, totalPages));
  };

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

      <div className="bg-white mt-5 rounded py-2 px-2 relative">
        {isLoading ? <Loading /> : <Product product={products} />}
        <Paginate
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          totalPages={totalPages}
          page={page}
        />
      </div>
    </div>
  );
};

export default Products;
