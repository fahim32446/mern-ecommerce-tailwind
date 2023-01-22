import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../../const/url";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";

const CategoryDetails = () => {
  const { name } = useParams();

  const { data, loading, error, reFetch } = useFetch(
    `${URL}/product?category=${name}`
  );

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 mb-5">
      <div className="flex gap-3">
        <Sidebar />

        {loading ? (
          "Loading..."
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 gap-y-[20px]">
            {data.map((item) => (
              <Card item={item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;
