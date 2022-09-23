import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/ProductSlice'
import Loading from './Loading'
import { deleteProduct } from '../../redux/ProductSlice';
import { useNavigate } from 'react-router-dom';


const AllProduct = () => {

  const { isLoading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const deleteItem = (_id) => {
    dispatch(deleteProduct(_id));
  }

  const editItem = (id) => {
    navigate(`../addProduct/${id}`)
  }

  return (


    <div className='w-full'>

      <div className="grid grid-cols-6 gap-1 border p-1 rounded-sm bg-green-200">
        <div>Image</div>
        <div className='col-span-2'>Product Name</div>
        <div>Categories</div>
        <div>Price</div>
        <div>Action</div>

      </div>

      {isLoading ? (<Loading />)
        : (

          <div>

            {products.map((item, index) => (

              <div key={index} className='grid grid-cols-6 p-1 gap-1 border-b-2 '>
                <div className='col-span-1 border-r-2 '>
                  <img className=' h-20 pr-1 object-contain rounded-xl' src={item.image} alt="" />
                </div>
                <div className='col-span-2 border-r-2 flex flex-col '>
                  <p>{item.title}</p>
                  <p>ID: {item._id}</p>
                  <p>Color: {item.color[0]}</p>
                  <div className='flex flex-row'>
                    {item.size.map((size, i) => (
                      <p className='mr-1' key={i}>[{size}]</p>
                    ))}
                  </div>
                </div>
                <div className='border-r-2 '>{item.category[0]}</div>
                <div className='border-r-2'>${item.price}</div>
                <div>
                  <div className='flex gap-2 '>
                    <button onClick={() => editItem(item._id)} type="button" className="py-2 px-3 text-xs font-medium text-center rounded-full text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Update</button>

                    <button onClick={() => deleteItem(item._id)} type="button" className="py-2 px-3 text-xs font-medium text-center rounded-full text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Delete</button>

                  </div>

                </div>
              </div>

            ))}
          </div>


        )}

    </div>
  )
}

export default AllProduct