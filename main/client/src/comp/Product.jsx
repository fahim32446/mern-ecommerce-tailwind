import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/productSlice';
import { addCart } from '../redux/cartSlice';
import ProductLoading from '../assets/loading/ProductLoading';
import Login from './Login';


const Product = () => {

  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState({});
  const [activeColor, setActiveColor] = useState({});
  const navigate = useNavigate();
  const { isLoading, products, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleSize = (size, i, index) => {
    setIsActive({ ...isActive, id: i, index: index })
    setProduct({ ...product, size })
  }

  const handleColor = (color, i, index) => {
    setActiveColor({ ...isActive, id: i, index: index })
    setProduct({ ...product, color })
  }

  const addToCart = (item) => {
    
    const { _id, title, image, price } = item;
    dispatch(addCart({ ...product, _id, title, image, price, quantity: 1 }));
  }

  const viewDetails = (id) => {

    navigate(`../product/${id}`, { replace: true });
  }

  return (

    isLoading ? <ProductLoading/> : (

      <div className='container mx-auto my-20'>
       
        <div className='flex justify-between p-2'>
          <h2 className='text-xl font-semibold'>Product's Collection</h2>
          <a href="#">View All</a>
        </div>

        <div className='grid grid-flow-row grid-cols-2 gap-3 md:grid-cols-4 p-2'>

          {products?.slice(0, 4).map((item, index) => (
            <div key={index} className="shadow-lg rounded-lg">

              <a className="" href="#">
                <img className="rounded-t-lg" style={{ width: '400px', height: '300px', objectFit: 'cover' }} src={item.image} alt="" />
              </a>

              <div className='p-5'>

                <h3 className='truncate'>{item.title}</h3>

                <div className='flex flex-row my-3 cursor-pointer'>
                  {item.color?.map((color, i) => (
                    <div onClick={() => handleColor(color, i, index)} key={i} className={`${activeColor.id == i && activeColor.index == index ? 'border-inherit border-2' : ''} ${color} h-5 w-5 rounded-full shadow-md mr-2 hover:border`}>
                    </div>
                  ))}
                </div>

                <div className='flex flex-row my-3 cursor-pointer'>
                  {item.size?.map((size, i) => (

                    <div onClick={() => handleSize(size, i, index)} id='size' key={i} className={`${isActive.id == i && isActive.index == index ? 'bg-green-100' : ''} border-2 border-gray-300 rounded-md text-gray-400 text-xs px-2 py-1 mr-2 hover:border-gray-700 font-medium`} >{size.toUpperCase()}
                    </div>
                  ))}

                </div>
                <div className="flex flex-col md:flex-row justify-between">
                  <a onClick={() => addToCart(item)} className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center mr-2" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add cart
                  </a>


                  <div onClick={() => viewDetails(item._id)} className="bg-purple-600 cursor-pointer rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    View details
                  </div>



                </div>

              </div>

            </div>
          ))}

        </div>

      </div>


    )
  )
}

export default Product