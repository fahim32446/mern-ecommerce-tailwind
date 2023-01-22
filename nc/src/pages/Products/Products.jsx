import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const catId = parseInt(useParams().id);

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
        <div className="space-y-5 sticky h-full top-14">
          <div>
            <h3 className="font-semibold text-lg mb-2">Product categories</h3>
            <div className="space-x-2">
              <input name="categories" type="checkbox" id="1" value={1} />
              <label htmlFor="1">Mens</label>
            </div>
            <div className="space-x-2">
              <input name="categories" type="checkbox" id="2" value={2} />
              <label htmlFor="2">Women's</label>
            </div>
            <div className="space-x-2">
              <input name="categories" type="checkbox" id="3" value={3} />
              <label htmlFor="3">Shoes</label>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Filter by price</h3>
            <div className="flex gap-2 items-center">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={100}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>10000</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Sort by</h3>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="w-full space-y-10">
          <img
            className="h-[250px] w-full object-cover"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
