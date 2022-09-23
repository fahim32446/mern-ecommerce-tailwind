import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../redux/orderSlice'
import Loading from '../component/AllProduct/Loading'

const OrderPage = () => {
    const { isLoading, orders, error } = useSelector((state) => state.orderReducer);
    const dispatch = useDispatch();
    console.log(orders);

    useEffect(() => {
        dispatch(getOrders());
    }, [])

    return (


        <div className="overflow-x-auto relative shadow-2xl sm:rounded-lg">
            {isLoading ? (<Loading />) : (
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50" >
                        <tr className='bg-green-200 shadow-lg'>
                            <th scope="col" className="py-3 px-6">
                                Order Id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Product
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Address
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Total
                            </th>

                        </tr>
                    </thead>




                    <tbody className='shadow-md '>

                        {orders?.map((item, index) => (

                            <tr key={index} className="bg-white border-b hover:bg-gray-200 ">
                                <td className="py-4 px-6"> {item._id} </td>
                                <td className="py-4 px-6">
                                    {item.products.map((item, index) => (
                                        <div key={index}>
                                            <div className='flex flex-row gap-2 justify-between'>
                                                <div>
                                                    <h2>{item.title}</h2>
                                                    <h2>{item.color}</h2>
                                                    <h2>{item.size}</h2>
                                                    <h2>{item.quantity}</h2>
                                                </div>
                                                <img style={{ width: '100px', height: '100px', objectFit: 'cover' }} src={item?.image} />
                                            </div>
                                            <hr />
                                        </div>
                                    ))}
                                </td>
                                <td className="py-4 px-6">
                                    <h1>{item.address?.name}</h1>
                                    <h1>{item.address?.destination}</h1>
                                    <h1>{item.address?.phone}</h1>
                                    <h1>{item?.email}</h1>

                                </td>
                                <td className="py-4 px-6">
                                    ${item.amount}
                                </td>

                            </tr>

                        ))}


                    </tbody>

                </table>
            )}
        </div>





    )
}

export default OrderPage