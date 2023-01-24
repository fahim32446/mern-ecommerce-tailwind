import React, { useState } from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { URL } from "../../const/url";
import Loading from "../../pages/Loading/Loading";
import Paginate from "../Paginate/Paginate";

const List = ({ search, priceFilter, sort }) => {
  const [page, setPage] = useState(1);

  const { data, loading, error, reFetch } = useFetch(
    `${URL}/product/?page=${page}&search=${search}&price=${sort}`
  );

  const { data: totalProducts } = useFetch(`${URL}/product/totalProducts`);

  const totalPages = totalProducts / 6;

  const handlePrevious = () => {
    setPage(Math.max(page - 1, 1));
  };

  const handleNext = () => {
    setPage(Math.min(page + 1, totalPages));
  };


  return (
    <div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 gap-y-[20px]">
        {loading ? (
          <div className="">
            <Loading />
          </div>
        ) : (
          !loading && data?.map((item) => <Card item={item} key={item._id} />)
        )}
      </div>

      <Paginate handlePrevious={handlePrevious} handleNext={handleNext} totalPages={totalPages} page={page}/>
    </div>
  );
};

export default List;
