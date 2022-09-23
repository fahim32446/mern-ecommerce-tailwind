import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { removeItems } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios';

const SuccessPage = () => {
  const location = useLocation();
  const data = location.state?.stripeData;
  const cart = location.state?.cart;
  const address = location.state?.sendTo;
  const total = location.state?.total;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user)


  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await Axios.post("http://localhost:5000/api/v1/order", {
          name: user.name,
          email: user.email,
          userId: user._id,
          products: cart.map((item) => ({
            image: item.image,
            title: item.title,
            productId: item._id,
            color: item.color,
            size: item.size,
            quantity: item._quantity,
          })),
          amount: total,
          address: address,
        });

      } catch (error) {
        console.log(error);
      }
    }
    cart && createOrder()
    dispatch(removeItems())
  }, [])

  console.log(total);
  console.log(data);
  console.log(cart);
  console.log(address);

  return (

    <div className='container mx-auto mt-16 '>

      <div className='flex flex-col justify-center items-center mt-[10%]'>

        <h1 className='text-xl bg-slate-200 p-3 rounded shadow-md'>Thank you {address?.name} for your purchase</h1>

        <p className='text-xs bg-orange-200 p-3 rounded mt-5'>We will deliver your product to {address?.destination}</p>

        <p className='mt-3'> Your ID: {user._id}</p>
        <p className='mt-3'> Your Email: {user.email}</p>
      </div>

    </div>
  )
}

export default SuccessPage