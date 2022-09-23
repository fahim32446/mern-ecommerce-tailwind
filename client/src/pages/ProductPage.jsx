import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/cartSlice'
import { useParams } from 'react-router-dom';
import { getProduct } from '../redux/singleProductSlice';
import ProductPageLoading from '../assets/loading/ProductPageLoading';



const ProductPage = () => {
    const { id } = useParams();
    const { isLoading, SingleProduct } = useSelector((state) => state.singleProductReducer)
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [Item, setItem] = useState({});
    const [cartItem, setCartItem] = useState({});
    const [isActive, setIsActive] = useState({});
    const [activeColor, setActiveColor] = useState({});

    useEffect(() => {
        dispatch(getProduct(id))
    }, [id]);


    const handleColor = (c, i) => {
        setActiveColor({ ...isActive, id: i })
        setItem({ ...Item, color: c })
    }


    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addCart({ ...Item, image:SingleProduct.image, title: SingleProduct.title, quantity: quantity, _id: SingleProduct._id, price: SingleProduct.price }));
    }


    return (

        isLoading ? <ProductPageLoading/> : (

            <div>
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="mx-auto flex flex-wrap justify-items-center ">
                            <img src={SingleProduct.image} className="lg:w-1/3 p-5 w-full object-cover object-center rounded-lg border border-gray-200" />
                            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-10">

                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{SingleProduct.category}</h2>

                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">{SingleProduct.title}</h1>


                                {/* <p className="leading-relaxed">{SingleProduct.description}</p> */}


                                <div className="flex flex-col mt-6 gap-6 pb-5 border-b-2 border-gray-200 mb-5">
                                    <div className="flex">
                                        <span className="mr-3">Color</span>

                                        {SingleProduct.color?.map((c, i) => (
                                            <div key={i} onClick={() => handleColor(c, i)}
                                                className={`${activeColor.id == i ? 'scale-[1.3]' : ''} ${c} cursor-pointer border-2 mr-2 rounded-full w-6 h-6 focus:outline-none hover:scale-[1.1]`}>
                                            </div>
                                        ))}
                                    </div>


                                    <div className="flex items-center">
                                        <span className="mr-3">Size</span>
                                        <div className="relative">
                                            <select onChange={(e) => { setItem({ ...Item, size: e.target.value }) }} className="cursor-pointer rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                                <option disabled selected>Choose Size</option>
                                                {SingleProduct.size?.map((s, i) => (
                                                    <option key={i}>{s.toUpperCase()}</option>
                                                ))}
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex flex-row items-center gap-2 select-none'>
                                        <span className='select-none'>Quantity</span>
                                        <svg onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div className='border rounded-lg p-2 select-none'>{quantity}</div>
                                        <svg onClick={() => setQuantity((prev) => prev + 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>


                                    </div>

                                </div>

                                <div className="flex select-none" >
                                    <span className="title-font font-medium text-2xl text-gray-900 select-none">${SingleProduct.price}</span>
                                    <button onClick={handleClick} className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">Add to cart</button>
                                </div>
                            </div>

                        </div>

                        <hr />
                        <h1 className='text-2xl mt-2 font-semibold'>Product Description</h1>
                        <p className="leading-relaxed">{SingleProduct.description}</p>
                    </div>


                </section>

            </div>

        )
    )
}

export default ProductPage