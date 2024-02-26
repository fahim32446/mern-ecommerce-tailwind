// import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Categories from '@/components/Catagories';
import Wrapper from '@/components/Wrapper';
import { Suspense } from 'react';
import CardLoading from './_components/CardLoading';
import FeaturedProducts from './_components/FeaturedProducts';
import ProductCarousel from './_components/ProductCarousel';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Wrapper>
      <ProductCarousel />

      <div className='my-14'>
        <Suspense fallback={<CardLoading />}>
          <FeaturedProducts type='featured' />
        </Suspense>
      </div>

      <Categories />

      <div className='my-14'>
        <Suspense fallback={<CardLoading />}>
          <FeaturedProducts type='Latest' />
        </Suspense>
      </div>
    </Wrapper>
  );
};

export default HomePage;
