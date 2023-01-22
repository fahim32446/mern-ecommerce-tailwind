import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import Sidebar from "../../components/Sidebar/Sidebar";


const Products = () => {
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [search, setSearch] = useState("");



  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0">
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between gap-5">
       <Sidebar setSearch= {setSearch} search={search}/>
        <div className="w-full space-y-10">
          <List search={search}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
