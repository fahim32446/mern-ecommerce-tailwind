import React from 'react'
import Slider from "react-slick";

const Categories = () => {

    const CategoriesItem = [
        {
            id: 1,
            name: 'Mens',
            image: "https://img.freepik.com/premium-vector/men-fashion-logo-design-template_448617-346.jpg?w=740"
        },

        {
            id: 2,
            name: "Women's",
            image: "https://static.vecteezy.com/system/resources/previews/006/113/507/non_2x/bridal-wear-boutique-wedding-gown-sexy-dress-fashion-logo-design-illustration-free-vector.jpg"
        },

        {
            id: 3,
            name: "Kids",
            image: "https://img.freepik.com/premium-vector/kids-shop-circle-hanging-child-clothes-logo-design_680355-29.jpg?w=740"
        },

        {
            id: 4,
            name: "Cosmetics",
            image: "https://img.freepik.com/free-vector/beauty-cosmetics-icon-set_53876-64080.jpg?w=740&t=st=1667487558~exp=1667488158~hmac=505eed12854c3add499896ae057206c6a2f45cfc64263e2672d53539a3c8f3d3"
        },

        {
            id: 5,
            name: "Gadgets",
            image: "https://img.freepik.com/premium-vector/magic-gadget-logo_8580-333.jpg?w=740"
        },

        {
            id: 6,
            name: "Grocery",
            image: "https://img.freepik.com/free-vector/organic-supermarket-business-company-logo_23-2148462396.jpg?w=2000"
        },



    ];

    return (
        <div className='container mx-auto'>

            <h1 className='text-center text-2xl font-medium m-5'>Categories</h1>

            <div className="flex flex-row gap-2 justify-center cursor-pointer flex-wrap">

                {CategoriesItem.map((item, i) => 
                    <div className='lg:w-32 w-20 flex-col justify-center border rounded-lg p-2 shadow-sm hover:hover '>
                        <img className='lg:w-32 w-14' src={item.image} alt="" srcset="" />
                        <p className='text-center font-semibold text-xs lg:text-base'>{item.name}</p>
                    </div>
                )}



            </div>

        </div>
    )
}

export default Categories