import Wrapper from '@/components/Wrapper';
import { fetchData } from '@/lib/serverApisCall';
import ProductCard from '../(home)/_components/ProductCard';
import Sidebar from './_components/Sidebar';
import { ProductListType } from '../(home)/_components/HomePageDataType';
import Paginate from '@/components/Paginate';

type Props = {
  params: string;
  searchParams: {
    category: string;
    sortby: string;
    search: string;
    page: number;
  };
};

const Store = async ({ params, searchParams }: Props) => {
  const data = await fetchData(
    `product/?page=${searchParams.page || 1}&search=${
      searchParams.search || ''
    }&price=${searchParams.sortby || ''}&category=${
      searchParams.category || ''
    }`
  );

  const totalItems: number = await fetchData('product/totalProducts');

  return (
    <Wrapper>
      <div className='flex gap-5 mt-10'>
        <div className='flex-1'>
          <Sidebar />
        </div>

        <div className='flex-[3.5]'>
          <div className='grid grid-cols-2 xl:grid-cols-4 gap-4 gap-y-[20px]'>
            {data?.map((item: ProductListType) => (
              <ProductCard item={item} key={item._id} />
            ))}
          </div>

          <Paginate totalItems={totalItems} page={searchParams.page} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Store;
