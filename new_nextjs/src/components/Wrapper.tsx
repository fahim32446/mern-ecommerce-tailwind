import React from 'react';

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className='mx-auto container'>{children}</div>;
};

export default Wrapper;
