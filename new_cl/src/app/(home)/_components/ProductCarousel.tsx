import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { blurDataUrl } from '@/lib/utils';
import Image from 'next/image';

type Props = {};

const data = [
  'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

const ProductCarousel = (props: Props) => {
  return (
    <Carousel className='w-full max-h-[50vh]'>
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6 max-h-[50vh]'>
                  <Image
                    src={item}
                    alt='IMG'
                    fill
                    objectFit='cover'
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL={blurDataUrl}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
