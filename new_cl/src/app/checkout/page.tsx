'use client';

import Wrapper from '@/components/Wrapper';
import { BASE_URL } from '@/lib/request';
import { blurDataUrl } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/redux/customeReduxHook';
import { clearCart, removeFromCart } from '@/redux/slice/cartSlice';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { ProductListType } from '../(home)/_components/HomePageDataType';

type Props = {};

const CheckOut = (props: Props) => {
  const cartItems = useAppSelector((state) => state.cartSlice.items);
  const [address, setAddress] = useState({});
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleRemove = (item: ProductListType) => {
    dispatch(removeFromCart(item._id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.count || 1),
    0
  );

  const session = useSession();
  const isAuthenticated = session.status === 'authenticated';

  const user = session.data?.user;

  const Order = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/order`, {
        name: user?.name,
        email: user?.email,
        userId: user?._id,
        products: cartItems.map((item) => ({
          image: item.image[0],
          title: item.title,
          productId: item._id,
          color: item.color,
          size: item.size,
          quantity: item.count,
        })),
        amount: totalPrice,
        address: address,
      });
      toast.success('Order created');
      dispatch(clearCart());
    } catch (error) {
      toast.error('Something is happened wrong');
    }
  };

  return (
    <Wrapper>
      <div className='container flex flex-col xl:flex-row mx-auto max-w-7xl p-2 md:p-0'>
        <div className='lg:w-[75%] mt-9'>
          <div className='text-center text-xl font-semibold'>
            Your Cart List
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className='mt-1 grid grid-cols-2 gap-2'>
              <div className='grid grid-cols-6 gap-1 col-span-2 bg-slate-100 m-2 rounded-lg border drop-shadow-lg'>
                <div className='p-1 flex items-center col-span-3 overflow-hidden'>
                  <Image
                    className='w-[120px] h-[120px] object-cover rounded-md mr-5'
                    src={item?.image[0]}
                    alt='cart-image'
                    width={120}
                    height={120}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL={blurDataUrl}
                  />

                  <div className=''>
                    <h2 className='font-semibold text-sm text-gray-700'>
                      {item?.title}
                    </h2>
                    <div className='mt-1'>
                      <h2 className='text-gray-600'>
                        {item?.color || 'No Color'}
                      </h2>
                      <h2 className='text-gray-600'>
                        {item?.size || 'No Size'}
                      </h2>
                      <h2 className='text-gray-600'>
                        ${item.price.toLocaleString('en-US')}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className='w-full flex items-center'>
                  <div className='ml-2 flex flex-row items-center gap-2 '>
                    <div className='border rounded-lg p-2 select-none'>
                      {item.count} Pics
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <h1 className='text-2xl font-bold'>
                    ${(item.price * (item?.count || 0)).toLocaleString('en-US')}
                  </h1>
                </div>

                <div className='flex items-center justify-center w-full '>
                  <div
                    onClick={() => handleRemove(item)}
                    className='bg-orange-500 p-2 rounded-full cursor-pointer text-xs text-gray-100 font-sans hover:bg-red-400'
                  >
                    Remove
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='lg:w-[25%] mt-10'>
          <div className=' grid grid-cols-1'>
            <div className='grid grid-rows-2 '>
              <div className='bg-slate-100 m-2 p-2 flex flex-col gap-2 rounded-lg border drop-shadow-lg'>
                <h1 className='text-xs text-center font-bold'>
                  Delivery Address
                </h1>

                <input
                  onChange={(e) =>
                    setAddress({ ...address, name: e.target.value })
                  }
                  type='text'
                  id='first_name'
                  className='bg-gray-50 border text-gray-900 text-sm rounded-lg outline-blue-500 block w-full p-2.5'
                  placeholder='Your Name...'
                  required
                />
                <input
                  onChange={(e) =>
                    setAddress({ ...address, phone: e.target.value })
                  }
                  type='number'
                  id='first_name'
                  className='bg-gray-50 border text-gray-900 text-sm rounded-lg outline-blue-500 block w-full p-2.5'
                  placeholder='Your Phone Number...'
                  required
                />
                <textarea
                  onChange={(e) =>
                    setAddress({ ...address, destination: e.target.value })
                  }
                  id='message'
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-blue-500 '
                  placeholder='Your Address...'
                ></textarea>
              </div>

              <div className='bg-slate-100 m-2 rounded-lg border drop-shadow-lg'>
                <h1 className='font-semibold text-center'>Summery</h1>

                <div className='flex justify-between ml-5 mt-5 mr-5'>
                  <span className='font-semibold text-sm'>Subtotal</span>
                  <span className='font-semibold text-sm'>${totalPrice}</span>
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
                  <span className='font-semibold text-xl text-blue-500'>
                    Total
                  </span>
                  <span className='font-semibold text-xl text-blue-500'>
                    ${totalPrice}
                  </span>
                </div>
                <hr />

                {isAuthenticated ? (
                  <div
                    onClick={Order}
                    className='mt-5 bg-blue-600 text-center text-white p-2  mx-auto rounded-full drop-shadow-md cursor-pointer mb-2 font-semibold  hover:bg-green-600 hover:marker:delay-100'
                  >
                    Place Order
                  </div>
                ) : (
                  <div
                    onClick={() => router.push(`../login`)}
                    className='mt-5 bg-blue-600 text-center text-white p-2  mx-auto rounded-full drop-shadow-md cursor-pointer mb-2 font-semibold  hover:bg-green-600 hover:marker:delay-100'
                  >
                    Login to payment
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CheckOut;
