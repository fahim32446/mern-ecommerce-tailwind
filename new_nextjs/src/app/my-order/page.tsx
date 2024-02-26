import Wrapper from '@/components/Wrapper';
import { fetchData } from '@/lib/serverApisCall';
import React from 'react';

export interface OrderList {
  _id: string;
  name: string;
  email: string;
  userId: string;
  products: orderProducts[];
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

interface orderProducts {
  image: string;
  title: string;
  productId: string;
  color: string;
  size: string;
  quantity: number;
  _id: string;
}

type Props = {};

const MyOrder = async (props: Props) => {
  let user = { _id: '6326d78501f591aa7bf8033b' };
  const orders: OrderList[] = await fetchData(`order/find/${user?._id}`);

  return (
    <Wrapper>
      <div className='container mx-auto p-8'>
        <h1 className='text-3xl font-semibold mb-8'>Order List</h1>
        {orders.map((order) => (
          <div key={order._id} className='border p-4 mb-4'>
            <div className='flex items-center justify-between mb-4'>
              <p className='text-lg font-semibold'>{order.name}</p>
              <p className='text-sm text-gray-500'>
                Order Placed Date:{' '}
                {new Date(order.createdAt).toLocaleDateString('en-GB')}
              </p>
            </div>
            <ul className='divide-y divide-gray-300'>
              {order.products.map((product) => (
                <li key={product._id} className='py-2'>
                  <div className='flex items-center space-x-4'>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='w-16 h-16 object-cover'
                    />
                    <div>
                      <p className='text-lg font-semibold'>{product.title}</p>
                      <p className='text-xs text-gray-500'>
                        {product.color}, Size: {product.size}
                      </p>
                      <p className='text-xs text-gray-500'>
                        Quantity: {product.quantity}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='mt-4 flex justify-between'>
              <p className='text-lg font-semibold'>
                Total Amount: {order.amount} USD
              </p>
              <p
                className={`text-lg font-semibold ${
                  order.status === 'completed'
                    ? 'text-green-500'
                    : 'text-yellow-500'
                }`}
              >
                Status: {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default MyOrder;
