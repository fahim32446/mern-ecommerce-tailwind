import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { createProduct, updateProduct } from "../../redux/ProductSlice";
import axios from "axios";
import { getCategories } from "../../redux/categorySlice";
import { useNavigate, useParams } from "react-router-dom";

const AddNew = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    sku: "",
    brands: "",
    color: "",
    size: "",
    category: [],
  });
  const dispatch = useDispatch();
  const [files, setFiles] = useState("");
  const [uploading, setUploading] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, categories, error } = useSelector(
    (state) => state.category
  );
  const SingleProduct = useSelector((state) =>
    id ? state.products.products.find((product) => product._id === id) : ""
  );

  console.log(SingleProduct?.image);

  useEffect(() => {
    dispatch(getCategories());
    if (id) {
      setProduct(SingleProduct);
    }
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    if (e.target.checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((val) => val !== value));
    }
  };

  const handleSubmit = async (e) => {
    try {
      setUploading(true);
      const Images = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dzjobnqsf/image/upload",
            data,
            {
              withCredentials: false,
            }
          );
          const { url } = uploadRes.data;
          return url;
        })
      );
      const newProduct = {
        ...product,
        image: Images,
        category: checkedValues,
      };

   

      console.log(newProduct);
      id
        ? dispatch(updateProduct(newProduct))
        : dispatch(createProduct(newProduct));
      setUploading(false);
      navigate("../products");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-10 px-5 w-[85%]">
      <h1 className="text-2xl font-semibold text-center">Add New Product</h1>

      <div className="mt-5 rounded py-10 flex gap-2">
        <div className="flex-[3] bg-white py-5 px-6 rounded space-y-5">
          <div>
            <p className="font-semibold text-gray-500">Product Title</p>
            <input
              type="text"
              value={product?.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between mt-2 gap-2">
            <div className="flex-1">
              <p className="font-semibold text-gray-500">SKU</p>
              <input
                type="text"
                value={product?.sku}
                name="sku"
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-500">Color</p>
              <input
                type="text"
                value={product?.color}
                name="color"
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-500">Size</p>
              <input
                type="text"
                value={product?.size}
                name="size"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-500 mt-2">Brand</p>
            <input
              type="text"
              value={product?.brands}
              name="brands"
              onChange={handleChange}
            />
          </div>

          <div>
            <p className="font-semibold text-gray-500 mt-2">Full Description</p>
            <textarea
              rows="4"
              cols="50"
              type="text"
              value={product?.description}
              name="description"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(e.target.files)}
              className="mb-5"
            />
          </div>
        </div>

        <div className="flex-[1] bg-white p-2">
          <div>
            <p className="font-semibold text-gray-500">Price</p>
            <input
              type="number"
              value={product?.price}
              name="price"
              onChange={handleChange}
            />
          </div>

          <div>
            <p className="font-semibold text-gray-500 mt-2 mb-1">Categories</p>
            {isLoading
              ? "Loading..."
              : categories.map((item, index) => (
                  <div>
                    <div className="flex items-center mb-1 pl-1">
                      <input
                        type="checkbox"
                        name={item.title}
                        value={item.title}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor={item.title}
                        className="ml-2 text-sm font-medium text-gray-900 "
                      >
                        {item.title}
                      </label>
                    </div>
                  </div>
                ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-3 w-full bg-blue-500 text-white font-semibold py-2 rounded-md"
          >
            Publish Now
          </button>
          {uploading ? (
            <div className="flex justify-center mt-2">
              <RotatingLines />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNew;
