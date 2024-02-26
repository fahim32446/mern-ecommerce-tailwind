import { Loader } from 'lucide-react';
import React from 'react';

type Props = {};

const LoadingSpin = (props: Props) => {
  return (
    <div className='py-2'>
      <Loader className='animate-spin text-center w-full p-1' />
    </div>
  );
};

export default LoadingSpin;
