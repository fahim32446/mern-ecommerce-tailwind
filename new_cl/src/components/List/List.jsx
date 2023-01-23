import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { URL } from "../../const/url";
import Loading from "../../pages/Loading/Loading";

const List = ({ search }) => {
  const { data, loading, error, reFetch } = useFetch(
    `${URL}/product?search=${search}`
  );

  return (
    <div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 gap-y-[20px]">
        {loading ? (
          <div className="">
            <Loading />
          </div>
        ) : (
          !loading && data.map((item) => <Card item={item} key={item._id} />)
        )}
      </div>
    </div>
  );
};

export default List;
