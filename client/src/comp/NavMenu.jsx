import React, { useState } from 'react'
import { navLinks } from '../constants'
import { close, logo, menu } from '../assets'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/userSlice'


const NavMenu = () => {

  const TotalCartItems = useSelector((state) => state.cartReducer.cart.length)
  const { user, email, accessToken } = useSelector((state) => state.userReducer.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const [toggle, setToggle] = useState(false);




  const logOut = () => {
    dispatch(removeUser())
  }

  return (
    <div className='bg-[#9b1eb6]'>
      <div className='container mx-auto'>
        <div className="p-2">
          <div className='flex flex-row justify-between  '>

            {/* Logo........ */}
            <div className='flex flex-row items-center'>
              <div className="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
              <h1 onClick={() => (navigate(`../`))} className="text-2xl text-gray-100 ml-2 cursor-pointer ">MyShop</h1>
            </div>


            {/* Nav......... */}
            <nav>
              <ul className='list-none sm:flex hidden flex-1'>

                <li className='p-3'>
                  <a onClick={() => (navigate(`../`))} className='cursor-pointer text-gray-100  hover:text-purple-100'>Home</a>
                </li>

                <li className='p-3'>
                  <a onClick={() => (navigate(`../product-list`))} className='cursor-pointer text-gray-100  hover:text-purple-100'>Product</a>
                </li>

                {/* <li className='p-3'>
                  <a onClick={() => (navigate(`../clients`))} className='cursor-pointer text-gray-100  hover:text-purple-100'>Clients</a>
                </li> */}

                <li className='p-3'>
                  <a onClick={() => (navigate(`../orders`))} className='cursor-pointer text-gray-100  hover:text-purple-100'>My Orders</a>
                </li>

                {accessToken ? (
                  <li className='p-3'>
                    <a onClick={() => logOut()} className='cursor-pointer text-gray-100  hover:text-purple-100'>Log Out</a>
                  </li>
                ) : (
                  <li className='p-3'>
                    <a onClick={() => (navigate(`../login`))} className='cursor-pointer text-gray-100  hover:text-purple-100'>Login</a>
                  </li>
                )}

                <Link className='text-white bg-purple-600 p-3 rounded-full hover:bg-purple-700' to={'/cart'}>Cart ({TotalCartItems})</Link>
              </ul>


              <div className="sm:hidden flex flex-end items-center bg-purple-600 p-3 rounded-lg">
                <img
                  className='w-[28px] h-[28px] object-contain'
                  src={toggle ? close : menu}
                  alt='menu'
                  onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 right-0 bg-black-gradient p-6 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`} >

                  <ul className='list-none flex flex-col flex-1'>
                    {navLinks.map((nav, index) => (
                      <li key={index} className='p-3'>
                        <a onClick={() => (navigate(`${nav.id}`))} className='text-white  hover:text-purple-600' >{nav.title}</a>
                      </li>
                    ))}
                    <a onClick={() => (navigate(`cart`))} className='text-white bg-purple-600 p-3 rounded-full hover:bg-purple-700' >Cart ({TotalCartItems})</a>

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavMenu