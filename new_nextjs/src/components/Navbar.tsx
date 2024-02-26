'use client';
import { categoryType } from '@/app/(home)/_components/HomePageDataType';
import useFetch from '@/lib/UseFetch';
import { BASE_URL } from '@/lib/request';
import { useAppSelector } from '@/redux/customeReduxHook';
import { ShoppingCart } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import CartItems from './CartItems';
import LoadingSpin from './LoadingSpin';
import MobileNav from './MobileNav';

type Props = {};

const Navbar = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const { data, loading, error, reFetch } = useFetch(`${BASE_URL}/category`);

  const cartItemLength = useAppSelector(
    (state) => state.cartSlice.items.length
  );

  const session = useSession();
  const isAuthenticated = session.status === 'authenticated';

  return (
    <div className='bg-blue-100'>
      <div className='container mx-auto max-w-7xl p-2 md:p-0 mb-5'>
        <div className='justify-between py-4 hidden md:flex'>
          <div className='flex gap-3'>
            {Array.isArray(data) &&
              data.map((item: categoryType, index) => (
                <Link
                  key={index}
                  href={`../store/?category=${item.title.toLowerCase()}`}
                  className='font-semibold'
                >
                  {item.title}
                </Link>
              ))}
            {!data.length && (
              <div className='flex items-center justify-center'>
                <div>
                  <span className='text-red-500'>Trying to connect API</span>
                  <p className='text-[10px] absolute text-gray-400'>
                    Used free hosting for API, <br /> Sometimes need time to
                    connect
                  </p>
                </div>
                <LoadingSpin />
              </div>
            )}
          </div>
          <Link href={`../`} className='font-semibold text-lg'>
            AZ-STORE
          </Link>
          <div className='flex gap-3'>
            <Link href={`../`} className='font-semibold'>
              Home
            </Link>
            {['Store'].map((item, index) => (
              <Link
                key={index}
                href={`../${item.toLowerCase()}`}
                className='font-semibold'
              >
                {item}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link href={`../my-order`} className='font-semibold'>
                  My Order
                </Link>
                <p
                  onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
                  className='font-semibold cursor-pointer'
                >
                  Logout
                </p>
              </>
            ) : (
              <Link href={`../login`} className='font-semibold'>
                Login
              </Link>
            )}

            {cartItemLength ? (
              <CartItems
                child={
                  <div
                    className='relative cursor-pointer'
                    onClick={() => setOpen(!open)}
                  >
                    <ShoppingCart />
                    <span className='font-semibold absolute left-6 bottom-3 bg-blue-500 text-white rounded-full w-6 h-6 text-center'>
                      {cartItemLength}
                    </span>
                  </div>
                }
              />
            ) : null}
          </div>
        </div>

        <MobileNav
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          categories={data}
        />
      </div>
    </div>
  );
};

export default Navbar;
