import React, { useState, useEffect } from 'react'
import { loginUser } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const { user } = useSelector((state) => state.userReducer)
    let Admin = user.isAdmin;
    const [login, setLogin] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(user);




    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(login))
    }


    useEffect(() => {
        if (user.isAdmin == true) {
            // location.reload();
        }
    

    }, [dispatch, handleSubmit])





    return (
        <div className='flex items-center justify-center'>
            <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign In (Admin Only)</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input onChange={(e) => setLogin({ ...login, email: e.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input onChange={(e) => setLogin({ ...login, password: e.target.value })} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>


                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">

                        Login to your account
                    </button>




                </form>
            </div>
        </div>

    )
}

export default Login