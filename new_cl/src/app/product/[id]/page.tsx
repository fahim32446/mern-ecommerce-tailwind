import { ProductListType } from '@/app/(home)/_components/HomePageDataType';
import Wrapper from '@/components/Wrapper';
import { fetchData } from '@/lib/serverApisCall';
import ProductImageSelect from '../_components/ProductImageSelect';
import ProductOption from '../_components/ProductOption';

type Props = {
  params: { id: string };
};

const StoreWithID = async ({ params }: Props) => {
  const data: ProductListType = await fetchData(`product/find/${params.id}`);

  return (
    <Wrapper>
      <div className='container mx-auto max-w-7xl p-2 md:p-0 '>
        <div className='flex flex-col xl:flex-row gap-3'>
          <ProductImageSelect images={data.image} />

          {/* Product Description */}
          <div className='flex-1 space-y-7'>
            <h1 className='font-bold text-xl'>{data.title}</h1>
            <h1 className='font-bold text-xl text-blue-400'>
              ${data.price}.00
            </h1>
            <p className='text-gray-400 line-clamp-5'>${data.description}</p>

            <ProductOption item={data} />

            <div className='flex flex-col text-gray-400'>
              <span>Brand: {data.brands || 'Unknown'}</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StoreWithID;
