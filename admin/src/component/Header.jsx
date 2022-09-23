import React from 'react'
import {
    BellIcon,
    ChipIcon,
    InboxIcon,
} from "@heroicons/react/outline";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../redux/userSlice';
import { removeOrder } from '../redux/orderSlice';
import { removeProduct } from '../redux/ProductSlice';
const Header = () => {

    const { user } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();

    const LogOut = () => {
        dispatch(removeUser())
        dispatch(removeOrder())
        dispatch(removeProduct())
        localStorage.removeItem('user');
        localStorage.removeItem('persist:root');

    }


    return (
        <div className=" w-full py-6 bg-[#dfe1e2]  justify-between flex px-12">

            {/* logo */}
            <div className="items-center  justify-center flex space-x-4">
                <ChipIcon className="w-6 h-6" />
                <h1 className="text-xl text-gray-900 font-medium "> Admin Dashboard </h1>
            </div>

            {/* icons */}
            <div className="hidden items-center justify-end space-x-6 lg:flex">
                <BellIcon className="cursor-pointer w-8" />
                <InboxIcon className="cursor-pointer w-8" />

                {user.isAdmin == true ? (
                    <div onClick={LogOut}>
                        <h1 className='bg-red-400 p-2 font-semibold rounded-full text-white px-3 cursor-pointer'>Log Out</h1>
                    </div>
                ) : (
                    <Link to='../login'>
                        <h1 className='bg-green-400 p-2 font-semibold rounded-full text-white px-3'>Login</h1>
                    </Link>
                )}


            </div>

        </div>
    )
}

export default Header