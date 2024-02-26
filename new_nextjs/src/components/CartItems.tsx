import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAppDispatch, useAppSelector } from '@/redux/customeReduxHook';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ScrollArea } from './ui/scroll-area';
import { blurDataUrl } from '@/lib/utils';
import { removeFromCart } from '@/redux/slice/cartSlice';

type Props = {
  child: JSX.Element;
};

const CartItems = ({ child }: Props) => {
  const cartItems = useAppSelector((state) => state.cartSlice.items);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.count || 1),
    0
  );

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{child}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart Item List</SheetTitle>
          <SheetDescription className=' mb-20'>
            <ScrollArea>
              <div className='flex flex-col space-y-2 mt-10 h-[75vh]'>
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className='flex items-center justify-between border p-1 rounded'
                  >
                    <div className='flex-[2]'>
                      <Image
                        src={item.image[0]}
                        className='rounded'
                        alt='Product Image'
                        width={80}
                        height={80}
                        objectFit='cover'
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL={blurDataUrl}
                      />
                      <p className='text-sm font-semibold line-clamp-1'>
                        {item.title}
                      </p>
                      <p className='text-xs '>
                        {item.price} USD x {item.count || 1}
                      </p>
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-sm font-semibold flex-1 text-right'>
                        {item.price * (item.count || 1)} USD
                      </p>
                      <p
                        onClick={() => removeItem(item._id)}
                        className='text-xs mt-1 cursor-pointer hover:text-red-400'
                      >
                        Remove Cart
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <hr className='my-4' />
            <div className='flex justify-between'>
              <p className='text-lg font-semibold'>Total:</p>
              <p className='text-lg font-semibold'>{totalPrice} USD</p>
            </div>
            <div className='flex justify-center items-center mt-2'>
              <button
                onClick={() => router.push('../checkout')}
                className='bg-primary px-6 py-2 text-white font-semibold cursor-pointer w-full'
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartItems;
