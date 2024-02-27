import { blurDataUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ProductListType } from './HomePageDataType';

type Props = {
  item: ProductListType;
};

const ProductCard = ({ item }: Props) => {
  return (
    <div className='bg-white shadow border rounded-md overflow-hidden'>
      <div className=''>
        <Link href={`/product/${item._id}`}>
          <div className='card w-full h-[280px] relative border-b'>
            {item.isNew && (
              <span className='absolute bg-white z-30 m-1 px-1 text-blue-500'>
                New Arrived
              </span>
            )}
            <Image
              className='w-full h-full object-cover overflow-hidden absolute secondImg'
              src={item?.image[0]}
              alt='product Image'
              fill
              loading='lazy'
              placeholder='blur'
              blurDataURL={blurDataUrl}
            />
            <Image
              className={
                item?.image[1]
                  ? `w-full h-full object-cover overflow-hidden absolute firstImg`
                  : 'hidden'
              }
              src={item?.image[1]}
              alt='product Image'
              fill
              loading='lazy'
              placeholder='blur'
              blurDataURL={blurDataUrl}
            />
          </div>
          <h2 className='text-md font-semibold p-1 overflow-hidden'>
            {item.title.substring(0, 60) + '...'}
          </h2>
          <div className='text-right'>
            <h3 className='font-semibold px-3 mr-2 bg-blue-500 inline-block rounded-xl text-white overflow-hidden '>
              ${item.price}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
