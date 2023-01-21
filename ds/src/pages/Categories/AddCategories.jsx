import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createCategory,
  getCategories,
  updateCategories,
} from "../../redux/categorySlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const AddCategories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = useState({ title: "" });
  const { isLoading, categories, error } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleAdd = (category) => {
    dispatch(createCategory({ title: category }));
    console.log(category);
    setCategory("");
  };

  const handleSaved = (e) => {
    navigate("../products");
  };

  return (
    <div className="mt-16 px-5 w-[85%]">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid xl:grid-cols-3 gap-4">
          <div>
            <p className="font-semibold text-gray-500">Add New Category</p>
            <div className="flex gap-2 items-center">
              <input
                className="w-[80%]"
                type="text"
                name="item"
                value={category.title}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 duration-200 text-white font-semibold rounded w-[20%] py-[5px]"
                onClick={() => handleAdd(category)}
              >
                Add
              </button>
            </div>
            {/* {category?.map((el, i) => (
            <p key={i} className="border my-2 p-2 rounded bg-white">
              {i + 1}. {el}
            </p>
          ))} */}
          </div>
          <div className="">
            <p className="text-center font-semibold text-gray-500">
              All Categories List
            </p>
            {categories?.map((el, i) => (
              <p key={i} className="border m-2 p-2 rounded bg-white">
                {i + 1}. {el.title}
              </p>
            ))}
          </div>
          <div className="relative">
            <button
              className="bg-green-500 hover:bg-green-600 duration-200 text-white font-semibold rounded px-2 py-[5px] absolute right-0 top-5"
              onClick={handleSaved}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategories;
