import { useState, useEffect } from 'react';
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';


const FeaturedItem = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, products, error } = useSelector((state) => state.products)
    console.log(products);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const viewDetails = (id) => {

        navigate(`../product/${id}`, { replace: true });
      }

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        height: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className='container mx-auto h-72 mb-10'>
            <h2 className='text-center font-semibold m-3 text-xl'> Featured Product </h2>

            <Slider {...settings}>
                {products.map((item, i) => (
                    <div onClick={() => viewDetails(item._id)}>
                        <div className='flex flex-col justify-center align-middle w-48 border rounded-lg hover:shadow-xl cursor-pointer hover:border-purple-400'>
                            <img className='rounded-t-lg w-48' src={item.image} alt="" />
                            <p className='text-center font-semibold m-1 truncate'>{item.title}</p>
                            <p className='text-center font-semibold m-1'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    )
}

export default FeaturedItem