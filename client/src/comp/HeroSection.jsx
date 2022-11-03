import React from 'react'
import { Link } from 'react-router-dom'
// import Carousel from 'react-elastic-carousel'
import CarouselItem from './CarouselItem'
import { Carousel } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../product-list')
    }
    return (

        <div className="h-64 md:h-[500px] py-2">
            <Carousel slide={false}>
                <div className='cursor-pointer' onClick={handleClick}>
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPlFNo9kRsqSoHraLZP32r0IozYEP4alY8VZwTtuiG3eQgt9EtNehhM9RUF78JFAA9gvQa2scrd93D5LybkcQahPVMl6Y_NM-7RMdBbYzzCSMsXIuyaaLQ8md9T6wRYyFbVfKY_bcGCNf75plFWvh3SpMZEeCCxVoYYwvay51wQM5WpKvfQ3Yw9Nwl/s1976/e2d303b8-35eb-445c-a1dc-6bcf113dfd41.jpg"
                    />
                </div>

                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKF3EHtLjPdoJjsAIw3YOLI1Ii8B7cZ3pjsHzJx7uJxhvb77wagU7ewRq-uYFmTyEne48kxKHGEAJPHYWcWKukfnEYcl06n8DxkhAgQa4HkLcyeoz_1AmYV7LlEGG11pgvAMur6aj0_aIc6l_kLw7F3xbG4sKJMbqXRz8CuZ8IvnC6L_2FsCNfpOlk/s1976/c6cc47c5-616a-49a5-9fb4-938b29292015.jpg"
                    />
               
            </Carousel>
        </div>

    )
}

export default HeroSection         