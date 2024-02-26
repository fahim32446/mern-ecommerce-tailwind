'use client';
import { blurDataUrl } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  images: string[];
};

const ProductImageSelect = ({ images }: Props) => {
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <div className='flex flex-col-reverse xl:flex-row gap-3 flex-1'>
      {/* Side Image */}
      {Array.isArray(images) ? (
        <div className='flex gap-2 justify-center xl:flex-col xl:justify-start'>
          {images.map((item, index) => (
            <Image
              key={index}
              className='w-[100px] h-[100px] object-cover'
              src={item}
              alt='Product Image'
              width={100}
              height={100}
              loading='lazy'
              placeholder='blur'
              blurDataURL={blurDataUrl}
              onClick={(e) => setSelectedImg(index)}
            />
          ))}
        </div>
      ) : (
        'None'
      )}

      {/* Large Main Image */}
      <div>
        <Image
          className='h-[450px] w-[450px] object-cover'
          src={Array.isArray(images) ? images[selectedImg] : images}
          alt='Product Image'
          loading='lazy'
          placeholder='blur'
          blurDataURL={blurDataUrl}
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

export default ProductImageSelect;
