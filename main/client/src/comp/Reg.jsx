import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { regUser } from '../redux/userSlice';


const Reg = () => {

    const { user } = useSelector((state) => state.userReducer)
    console.log(user);

    const [reg, setReg] = useState({});

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(regUser(reg))
    }

    return (
        <section className="h-screen">

            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
                    </div>

                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <h1 className='text-center p-2 text-red-600 font-semibold'>{user == '"User already exist"' && user.replaceAll('"', '')}</h1>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-6">
                                <input onChange={(e) => setReg({ ...reg, name: e.target.value })} type="name" required className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name" />
                            </div>

                            {/* Email input */}
                            <div className="mb-6">
                                <input onChange={(e) => setReg({ ...reg, email: e.target.value })} type="email" required className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                            </div>

                            {/* Password input */}
                            <div className="mb-6">
                                <input onChange={(e) => setReg({ ...reg, password: e.target.value })} type="password" required className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                            </div>


                            {/* Submit button */}
                            <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">

                                {
                                    user.user == '"user Already exists"' ? (
                                        <span className="font-medium">User Already exists! Change your email address!</span>
                                    ) : ' Sign Up'
                                }

                            </button>

                            {/* <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div> */}

                            {/* <a className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3" style={{ backgroundColor: '#4c8bf5' }} href="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <svg style={{ color: 'white', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" fill="white" /> </svg>
                                Continue with Google
                            </a> */}

                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Reg