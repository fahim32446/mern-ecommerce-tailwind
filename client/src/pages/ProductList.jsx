import React, { useState, useEffect } from 'react';
import SearchBar from '../comp/SearchBar'
import { categories, sizes, colors } from '../assets/Doc'
import Product2 from '../comp/Product2'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, getProductsByCat, sizeFilter, searchProduct, priceFilter } from '../redux/productSlice';
import ProductListLoading from '../assets/loading/ProductListLoading';


const ProductList = () => {
    const dispatch = useDispatch();
    var { isLoading, products, error } = useSelector((state) => state.products);
    const [cat, setCat] = useState('')
    const [size, setSize] = useState([])
    const [search, setSearch] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {
        if (cat == 'All Product') dispatch(getProducts())
        else if (cat) dispatch(getProductsByCat(cat))
        else dispatch(getProducts())
    }, [cat]);

    useEffect(() => {
        if (size[0] === 'All Size') dispatch(getProducts())
        else if (size.length) dispatch(sizeFilter(size));
        else dispatch(getProducts())
    }, [size])

    useEffect(() => {
        if (search) dispatch(searchProduct(search));
        else dispatch(getProducts())
    }, [search])



    useEffect(() => {
        if (price === 'Newest') dispatch(getProducts())
        else dispatch(priceFilter(price));
    }, [price])


    const handleCategories = (e) => {
        const { value, checked } = e.target;
        setCat(value)
    }

    const handlePrice = (e) => {
        const { value, checked } = e.target;
        setPrice(value);
    }

    const handleSize = (e) => {
        const { value, checked } = e.target;
        setSize([value])

    }


    return (
        <div>
            <div className="container mx-auto">
                <div className='flex flex-row mt-10'>


                    {/* Filter Item */}
                    <div className=' w-[35%] lg:w-[20%] p-1'>
                        <div className="flex flex-col mr-2">
                            {/* search */}
                            <div className="flex items-center">
                                <div className="w-full">
                                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full pl-5 p-2.5" placeholder="Search Products..." required />
                                    <button className="flex absolute inset-y-0 right-0 items-center pr-3">
                                    </button>
                                </div>
                                <button onClick={() => handleSubmit} className="py-2.5 px-2 ml-1 text-sm font-medium text-white bg-red-300 rounded-lg border hover:bg-red-500 focus:ring-blue-300">
                                    <svg aria-hidden="true" className="mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>


                            <h1 className='mt-5 font-semibold text-gray-500 '>Filter Product</h1>
                            <div>
                                <select onChange={handlePrice} className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500  block w-full p-2">
                                    <option selected value="Newest">Newest</option>
                                    <option value="asc">Price (Low to High)</option>
                                    <option value="desc">Price (High to Low)</option>
                                </select>
                            </div>

                            <div className='mt-2'>
                                <select onChange={handleSize} className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500  block w-full p-2">
                                    <option value="All Size" selected>All Size</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                                    <option value="2xl">XXL</option>
                                </select>
                            </div>


                            <div className='mt-2'>
                                <select className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500  block w-full p-2">
                                    <option selected>Select Color</option>
                                    <option>White</option>
                                    <option>Black</option>
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>Yellow</option>
                                </select>
                            </div>


                            <h1 className='mt-5 font-semibold text-gray-500 '>Browse By Categories</h1>
                            <div className="mb-6 mt-2">
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
                                    {categories.map((cat, index) => (
                                        <li key={index} className="w-full rounded-t-lg border-b border-gray-200 ">
                                            <div className="flex items-center pl-3">
                                                <input id={cat.name} value={cat.name} name='categories' onClick={handleCategories} type="radio" className=" w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                                <label htmlFor={cat.name} className="py-3 ml-2 w-full text-sm font-medium text-gray-900">{cat.name}</label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>

                    </div>


                    {/* product */}
                    <div className='w-[65%] lg:w-[80%]'>
                        {isLoading ? <ProductListLoading /> : (
                            <div className="grid grid-cols-1 lg:grid-cols-3 ml-5 mr-5 gap-5">

                                {products?.map((item, index) => (
                                    <Product2 item={item} index={index} />
                                ))}

                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductList