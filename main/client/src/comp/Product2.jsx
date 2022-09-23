import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


const Product2 = ({ item, index }) => {

    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const viewDetails = (id) => {
        navigate(`/product/${id}`);
    }


    return (
        <div>
            <div key={index} className="shadow-lg rounded-lg">
                <a className="" href="#">
                    <img className="rounded-t-lg" style={{ width: '400px', height: '300px', objectFit: 'cover' }} src={item.image} alt="" />
                </a>

                <div className='p-5'>
                    <h3 className='font-semibold text-gray-500 text-xl p-1 truncate'>{item.title}</h3>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className='rounded-full bg-slate-200'>
                            <h1 className='font-semibold text-gray-500 p-1 px-2'>${item.price}</h1>
                        </div>

                        <div onClick={() => viewDetails(item._id)} className="bg-purple-600 cursor-pointer rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            View details
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product2