import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../assets/Const';


const Dashboard = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const totalUser = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/count/userCount`);
        const count = res.data;
        setUser(count)
      } catch (error) {
        console.log(error);
      }
    }
    totalUser()
  }, [])

  return (
    <div className='flex flex-row justify-around gap-2'>

      <div href="#" className="flex justify-center items-center w-52 h-36 bg-orange-200 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
          {user} Users
        </h5>
      </div>


      <div href="#" className="flex justify-center items-center w-52 h-36 bg-green-200 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
          100 Products
        </h5>
      </div>

      <div href="#" className="flex justify-center items-center w-52 h-36 bg-green-200 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
          300 Orders
        </h5>
      </div>


      <div href="#" className="flex justify-center items-center w-52 h-36 bg-green-200 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
          $45000 SOLD
        </h5>
      </div>


    </div>
  )
}

export default Dashboard