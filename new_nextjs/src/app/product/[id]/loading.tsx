import React from 'react';

type Props = {};

const loading = (props: Props) => {
  return (
    <div className='container mx-auto max-w-7xl p-2 md:p-0 animate-pulse'>
      <div className='flex flex-col xl:flex-row gap-3'>
        <div className='flex flex-col-reverse xl:flex-row gap-3 flex-1'>
          <div className='flex gap-2 justify-center xl:flex-col xl:justify-start'>
            <div className='w-[100px] h-[100px] bg-gray-200 rounded-md'></div>
            <div className='w-[100px] h-[100px] bg-gray-200 rounded-md'></div>
            <div className='w-[100px] h-[100px] bg-gray-200 rounded-md'></div>
          </div>
          <div>
            <div className='h-[450px] w-[450px] bg-gray-200 rounded-md'></div>
          </div>
        </div>
        <div className='flex-1 space-y-7'>
          <div className='h-6 bg-gray-200 rounded-md w-1/2'></div>
          <div className='h-6 bg-gray-200 rounded-md w-1/4'></div>
          <div className='h-4 bg-gray-200 rounded-md w-full'></div>

          <div className='h-10 bg-gray-200 rounded-md w-1/6'></div>

          <div className='h-4 bg-gray-200 rounded-md w-2/3'></div>
          <div className='h-4 bg-gray-200 rounded-md w-2/3'></div>

          <div className='flex gap-5'></div>

          <div className='h-10 bg-gray-200 rounded-md w-2/3'></div>

          <div className='flex flex-col text-gray-400'></div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default loading;
