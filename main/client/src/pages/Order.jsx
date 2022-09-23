import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loading from './Loading'

const Order = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { _id, user, email } = useSelector((state) => state.userReducer.user)

  useEffect(() => {

    const getOrder = async () => {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:5000/api/v1/order/find/${_id}`);
      setProduct(data);
      setLoading(false);
    }
    getOrder();

  }, [])

  console.log(product);

  return (
    <div className='container mx-auto mt-5'>
      {loading ? <Loading /> : (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase ">
              <tr>
                <th scope="col" className="py-3 px-6 bg-slate-300">
                  Order ID
                </th>
                <th scope="col" className="py-3 px-6 bg-slate-300">
                  Product
                </th>
                <th scope="col" className="py-3 px-6 bg-slate-300 ">
                  Total Pay
                </th>
                <th scope="col" className="py-3 px-6 bg-slate-300">
                  Delivery Address
                </th>
              </tr>
            </thead>




            {product.map((item, index) => (

              <tbody key={index}>
                <tr className="border-b border-gray-200">
                  <th scope="row" className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 ">
                    {item._id}
                  </th>
                  <td className="py-4 px-6">


                    {item.products.map((p, i) => (

                      <div key={i}>
                        <div className='flex flex-row justify-between'>


                          <div className='mb-2'>
                            <h1><span className='font-semibold'>Name:</span>  {p.title}</h1>
                            <p><span className='font-semibold'>Size:</span>  {p.size}</p>
                            <div className="flex gap-1">
                              <p className='font-semibold'>Color: </p>
                              <div className={`w-5 h-5 ${p.color} rounded-full`}></div>
                            </div>
                            <p><span className='font-semibold'>Quantity: </span>{p.quantity}</p>
                          </div>
                          <div className='w-20 h-20'>
                            <img className='rounded' src={p.image} />
                          </div>
                        </div>

                        <hr className='w-full' />
                      </div>

                    ))}
                  </td>
                  <td className="py-4 px-6 bg-gray-50 ">
                    ${item.amount}
                  </td>
                  <td className="py-4 px-6">
                    <p><span className='font-semibold'>Name: </span>{item.address?.name}</p>
                    <p><span className='font-semibold'>Address: </span>{item.address?.destination}</p>
                    <p><span className='font-semibold'>Phone No: </span>{item.address?.phone}</p>
                    <p><span className='font-semibold'>Email: </span>{item.email}</p>

                  </td>
                </tr>
              </tbody>
            ))}


          </table>
        </div>



      )}

    </div>
  )
}

export default Order