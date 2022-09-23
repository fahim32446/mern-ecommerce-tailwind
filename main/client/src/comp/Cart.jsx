import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { removeItem } from '../redux/cartSlice';
import { BaseUrl } from '../assets/Const';

const Cart = () => {
  const KEY = "pk_test_51LI2vjKpuXwUOF7kxKbz1FBezVd18SkvYqrC2bsssxgtQ0Y6V1m84warl12Xat8iwBodotO7Th1R60wtaNNrUDv800oj2OtjgO";
  const dispatch = useDispatch();
  const { cart, cart_quantity, total } = useSelector((state) => state.cartReducer)
  const { user, email } = useSelector((state) => state.userReducer.user)
  const [stripeToken, setStripeToken] = useState(null);
  const [address, setAddress] = useState({});
  const history = useNavigate();


  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(`${BaseUrl}/api/checkout/payment`, {
          tokenId: stripeToken.id,
          amount: (total * 100),
        });
        history("../success", {
          state: {
            stripeData: res.data,
            cart: cart,
            sendTo: address,
            total: total
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
    cart.length ? '' : history("../")
  }, [stripeToken, total, history]);


  const handleRemove = (item) => {
    dispatch(removeItem(item))
  }

  const notify = () => toast.error('Please Login Before Checkout!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });



  return (
    // isLoading ? 'Loading' : (


    <div className='container mx-auto flex m-10'>
      <div className='w-[75%] mt-9'>

        {cart.map((item, index) => (
          <div key={index} className='mt-1 grid grid-cols-2 gap-2'>
            <div className="grid grid-cols-6 gap-1 col-span-2 bg-slate-100 m-2 rounded-lg border drop-shadow-lg">

              <div className='w-[120px] h-[120px] mr-1'>
                <img className="w-full h-full object-cover rounded-md" src={item?.image} />
              </div>

              <div className='w-full flex items-center col-span-2' >
                <div className='ml-0'>
                  <h2 className='font-bold text-purple-500'>{item?.title}</h2>
                  <div className='mt-3'>
                    <h2 className='font-semibold'>{item?.color}</h2>
                    <h2>{item?.size}</h2>
                    <h2>${item.price.toLocaleString('en-US')}</h2>
                  </div>
                </div>

              </div>


              <div className='w-full flex items-center'>
                <div className='ml-2 flex flex-row items-center gap-2 '>
                  <div className='border rounded-lg p-2 select-none'>{item.quantity}</div>
                </div>
              </div>



              <div className='flex items-center w-full'>
                <h1 className='text-2xl font-bold italic'>{(item.price * item.quantity).toLocaleString('en-US')}</h1>
              </div>

              <div className='flex items-center justify-center w-full '>
                <div onClick={() => handleRemove(item)} className='bg-orange-400 p-2 rounded-full cursor-pointer text-xs text-gray-100 font-sans hover:bg-red-400'>Remove</div>
              </div>

            </div>

          </div>
        ))}

      </div>


      <div className='w-[25%] mt-10'>

        <div className=' grid grid-cols-1'>
          <div className='grid grid-rows-2 '>


            <div className='bg-slate-100 m-2 p-2 flex flex-col gap-2 rounded-lg border drop-shadow-lg'>
              <h1 className='text-xs text-center font-bold'>Delivery Address</h1>

              <input onChange={(e) => setAddress({ ...address, name: e.target.value })} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name..." required />
              <input onChange={(e) => setAddress({ ...address, phone: e.target.value })} type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Phone Number..." required />
              <textarea onChange={(e) => setAddress({ ...address, destination: e.target.value })} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your Address..."></textarea>

            </div>

            <div className='bg-slate-100 m-2 rounded-lg border drop-shadow-lg'>
              <h1 className='font-semibold text-center'>Summery</h1>

              <div className='flex justify-between ml-5 mt-5 mr-5'>
                <span className='font-semibold text-sm'>Subtotal</span>
                <span className='font-semibold text-sm'>${total.toLocaleString('en-US')}</span>
              </div>
              <hr />

              <div className='flex justify-between ml-5 mt-5 mr-5'>
                <span className='font-semibold text-sm'>Discount</span>
                <span className='font-semibold text-sm'>$0</span>
              </div>
              <hr />

              <div className='flex justify-between ml-5 mt-5 mr-5'>
                <span className='font-semibold text-sm'>Shipping</span>
                <span className='font-semibold text-sm'>$0</span>
              </div>
              <hr />


              <div className='flex justify-between ml-5 mt-5 mr-5'>
                <span className='font-semibold text-xl text-purple-500'>Total</span>
                <span className='font-semibold text-xl text-purple-500'>${(total).toLocaleString('en-US')}</span>
              </div>
              <hr />

              {email ?
                <div className='mt-5 bg-purple-600 text-center text-white p-2 w-[150px] mx-auto rounded-full drop-shadow-md cursor-pointer mb-2 font-semibold  hover:bg-green-600 hover:marker:delay-100'>

                  <StripeCheckout
                    name="Lama Shop"
                    image="https://avatars.githubusercontent.com/u/1486366?v=4"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${total}`}
                    amount={total * 100}
                    token={onToken}
                    stripeKey={KEY}
                  >
                    <div>Checkout Now</div>
                  </StripeCheckout>

                </div> : (<div className='mt-5 bg-purple-600 text-center text-white p-2 w-[150px] mx-auto rounded-full drop-shadow-md cursor-pointer mb-2 font-semibold  hover:bg-green-600 hover:marker:delay-100' onClick={notify}>
                  Checkout Now </div>

                )}



            </div>


          </div>
        </div>
      </div>
    </div>

    // )


  )
}

export default Cart