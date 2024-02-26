import { categoryType } from '@/app/(home)/_components/HomePageDataType';
import useFetch from '@/lib/UseFetch';
import { BASE_URL } from '@/lib/request';
import { useAppSelector } from '@/redux/customeReduxHook';
import { LayoutDashboard, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  showSidebar: any;
  setShowSidebar: any;
  categories: never[];
};

const MobileNav = ({ showSidebar, setShowSidebar, categories }: Props) => {
  const { data, loading, error, reFetch } = useFetch(`${BASE_URL}/category`);

  const route = useRouter();

  const cartItemLength = useAppSelector(
    (state) => state.cartSlice.items.length
  );
  return (
    <div className='md:hidden flex justify-between items-center'>
      <Link href={'../'} className='font-semibold'>
        AZ-STORE
      </Link>

      {showSidebar ? (
        <div className='z-30' onClick={(e) => setShowSidebar(!showSidebar)}>
          <X />
        </div>
      ) : (
        <div className='z-30' onClick={(e) => setShowSidebar(!showSidebar)}>
          <LayoutDashboard />
        </div>
      )}

      <div
        className={`top-0  right-0 w-1/2 bg-black/40 backdrop-blur-lg p-10 pl-20 text-white fixed h-full z-10  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col gap-3 absolute right-5 top-20 w-[80%] text-right'>
          <Link href={`../`} className='font-semibold'>
            Home
          </Link>
          {['Store'].map((item, index) => (
            <Link
              key={index}
              href={item.toLowerCase()}
              className='font-semibold hover:bg-blue-400 duration-200'
            >
              {item}
              <hr className='w-full' />
            </Link>
          ))}
          {/* {user.name ? (
            <Link
              to={`../logout`}
              className='font-semibold hover:bg-blue-400 duration-200'
            >
              Logout
              <hr className='w-full' />
            </Link>
          ) : (
            <Link
              href={`../login`}
              className='font-semibold hover:bg-blue-400 duration-200'
            >
              Login
              <hr className='w-full' />
            </Link>
          )} */}

          <Link
            href={`../my-order`}
            className='font-semibold hover:bg-blue-400 duration-200'
          >
            My Order
            <hr className='w-full' />
          </Link>
          {Array.isArray(data) &&
            data.map((item: categoryType, index) => (
              <Link
                key={index}
                href={`../store?category=${item.title.toLowerCase()}`}
                className='font-semibold hover:bg-blue-400 duration-200'
              >
                {item.title}
                <hr className='w-full' />
              </Link>
            ))}
        </div>

        <div className='flex flex-col gap-3'>
          <div
            className='relative cursor-pointer'
            onClick={(e) => route.push('../checkout')}
          >
            <ShoppingCart />
            <span className='font-semibold absolute left-6 bottom-3 bg-blue-500 text-white rounded-full w-6 h-6 text-center'>
              {cartItemLength}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
