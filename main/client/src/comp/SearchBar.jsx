import React, { useState } from 'react'
import { searchProduct } from '../redux/productSlice';
import { useSelector, useDispatch } from 'react-redux'

const SearchBar = () => {
    const [search, setSearch] = useState();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProduct(search))
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center">
                <div className="w-full">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full pl-5 p-2.5" placeholder="Search Products..." required />
                    <button type="submit" className="flex absolute inset-y-0 right-0 items-center pr-3">
                    </button>
                </div>
                <button type="submit" className="py-2.5 px-2 ml-1 text-sm font-medium text-white bg-red-300 rounded-lg border hover:bg-red-500 focus:ring-blue-300">
                    <svg aria-hidden="true" className="mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </form>
        </div>
    )
}

export default SearchBar