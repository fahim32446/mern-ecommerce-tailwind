
type Props = {};

const loading = (props: Props) => {
  return (
    <div className='container mx-auto p-8 animate-pulse'>
      <div className='h-10 bg-gray-200 rounded'></div>
      <div className='border p-4 mb-4'>
        <div className='flex items-center justify-between mb-4'>
          <div className='h-6 bg-gray-200 rounded w-1/4'></div>
          <div className='w-2/3 h-4 bg-gray-200 rounded ml-auto'></div>
        </div>
        <ul className='divide-y divide-gray-300'>
          <li className='py-2'>
            <div className='flex items-center space-x-4'>
              <div className='w-16 h-16 bg-gray-200 rounded'></div>
              <div>
                <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                <div className='h-3 bg-gray-200 rounded w-2/3 mt-2'></div>
                <div className='h-3 bg-gray-200 rounded w-1/3 mt-2'></div>
              </div>
            </div>
          </li>
        </ul>
        <div className='mt-4 flex justify-between'>
          <div className='h-6 bg-gray-200 rounded w-1/4'></div>
          <div className='w-1/4 h-6 bg-gray-200 rounded ml-auto'></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
