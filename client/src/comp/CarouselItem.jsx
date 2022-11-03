import React from 'react'
import { Link } from 'react-router-dom'

const CarouselItem = () => {
    return (
        <div className='container mx-auto sm:flex sm:flex-row mt-20 bg-fuchsia-200'>

            <div className='sm:w-2/5 flex flex-col justify-center items-center sm:items-start'>
                <h2 className="text-5xl mb-4 text-gray-600">Welcome to MyShop</h2>
                <p className='text-gray-600 uppercase tracking-wide text-center sm:text-left'>Lorem ipsum dolor sit, amet consectetur </p>
                <p className='text-gray-600 uppercase tracking-wide text-center sm:text-left'>Lorem ipsum dolor </p>

                <Link className='py-8' to='../product-list'>
                    <a className='bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-100 uppercase my-5 sm:self-start text-center sm:text-left'>Shop Now</a>
                </Link>
            </div>

            <div className='sm:w-3/5'>
                <img src="https://raw.githubusercontent.com/itzpradip/tailwind-eshop-static-html/bc1b37d73730b9e7804e91438246ce2f996cc435/images/hero-img.svg" className='w-full' />
            </div>
        </div>
    )
}

export default CarouselItem