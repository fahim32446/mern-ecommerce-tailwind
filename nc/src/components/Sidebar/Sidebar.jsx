import React from "react";
import useFetch from "../../hooks/useFetch";
import { URL } from "../../const/url";
import { Link } from "react-router-dom";

const Sidebar = ({ search, setSearch }) => {
  const { data, loading, error, reFetch } = useFetch(`${URL}/category`);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="bg-white p-2 rounded-md shadow">
      <div className="space-y-5 sticky h-full top-14">
        <form
          onSubmit={handleSubmit}
          className="space-y-2  border rounded shadow overflow-hidden p-1 py-2"
        >
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Here..."
            className="bg-gray-200 rounded p-2 w-full hover:outline-blue-500 focus:outline-blue-500"
          />
          <button className="bg-blue-500 text-white p-1 rounded w-full">
            Search
          </button>
        </form>

        <div className="flex flex-col gap-1 border rounded shadow overflow-hidden">
          <h1 className="font-semibold text-xl p-1 shadow">Categories</h1>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <Link
                key={index}
                to={`../store/${item.title.toLowerCase()}`}
                className="rounded p-1 hover:bg-blue-100 duration-150"
              >
                {item.title}
              </Link>
            ))}
        </div>

        <div className="flex flex-col gap-1 border rounded shadow overflow-hidden p-1">
          <h3 className="font-semibold text-lg mb-2 border-b">
            Filter by price
          </h3>
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

        <div className="flex flex-col gap-1 border rounded shadow overflow-hidden p-1">
          <h3 className="font-semibold text-lg mb-2 border-b">Sort by</h3>
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
    </div>
  );
};

export default Sidebar;
