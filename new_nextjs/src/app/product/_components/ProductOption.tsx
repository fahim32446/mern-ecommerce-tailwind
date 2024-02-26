'use client';
import { ProductListType } from '@/app/(home)/_components/HomePageDataType';
import { addToCart } from '@/redux/slice/cartSlice';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
  item: ProductListType;
};

const ProductOption = ({ item }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [co, setColor] = useState('');
  const [si, setSize] = useState('');
  const dispatch = useDispatch();

  const setToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <div className='flex datas-center gap-3 items-center'>
        <button
          className='w-10 h-10 bg-gray-300'
          onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
        >
          -
        </button>
        {quantity}
        <button
          className='w-10 h-10 bg-gray-300'
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-5'>
          {item.size.length && (
            <select
              onChange={(e) => {
                setSize(e.target.value);
              }}
              className='cursor-pointer rounded border p-1 my-3'
              defaultValue={'Choose Size'}
            >
              {item.size?.map((s, i) => (
                <option key={i}>{s.toUpperCase()}</option>
              ))}
            </select>
          )}

          <select
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className='cursor-pointer rounded border p-1 my-3'
            defaultValue={'Choose color'}
          >
            {item.color?.map((s, i) => (
              <option key={i}>{s.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <button
          onClick={setToCart}
          className='w-[250px] bg-blue-500 text-white font-semibold p-2 hover:bg-blue-700 transition'
        >
          <div className='flex justify-center items-center gap-5'>
            <ShoppingCart />

            <span>ADD TO CART</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductOption;
