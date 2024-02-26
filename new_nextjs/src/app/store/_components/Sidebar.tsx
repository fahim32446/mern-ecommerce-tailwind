'use client';
import LoadingSpin from '@/components/LoadingSpin';
import useFetch from '@/lib/UseFetch';
import { BASE_URL } from '@/lib/request';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useCallback, useState } from 'react';

export interface categoryType {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

type Props = {};

const Sidebar = ({}: Props) => {
  const { data, loading, error, reFetch } = useFetch(`${BASE_URL}/category`);
  const [search, setSearch] = useState('');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryName = searchParams.get('category');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handelSearch = () => {
    router.push(`${pathname}?${createQueryString('search', search)}`);
  };

  return (
    <div className='bg-white p-2 rounded-md shadow'>
      <div className='space-y-5 sticky h-full top-14'>
        <div className='space-y-2  border rounded shadow overflow-hidden p-1 py-2'>
          <input
            type='text'
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Here...'
            className='bg-gray-200 rounded p-2 w-full hover:outline-blue-500 focus:outline-blue-500'
          />
          <button
            onClick={handelSearch}
            className='bg-blue-500 text-white p-1 rounded w-full'
          >
            Search
          </button>
        </div>

        <div className='flex flex-col gap-1 border rounded shadow overflow-hidden'>
          <h1 className='font-semibold text-xl p-1 shadow'>Categories</h1>

          {loading ? (
            <LoadingSpin />
          ) : (
            Array.isArray(data) &&
            data.map((item: categoryType, index) => {
              return (
                <Link
                  key={index}
                  href={`../store?category=${item.title.toLowerCase()}`}
                  className={cn(
                    'rounded p-1 hover:bg-blue-200 duration-150',
                    item.title.toLowerCase().trim() === categoryName
                      ? 'bg-blue-200'
                      : ''
                  )}
                >
                  {item.title}
                </Link>
              );
            })
          )}
        </div>

        <div className='flex flex-col gap-1 border rounded shadow overflow-hidden p-1'>
          <h3 className='font-semibold text-lg mb-2 border-b'>Sort by</h3>
          <div className='flex gap-2 items-center'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              onChange={(e) =>
                router.push(`${pathname}?${createQueryString('sortby', 'asc')}`)
              }
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input
              type='radio'
              id='desc'
              value='desc'
              name='price'
              onChange={(e) =>
                router.push(
                  `${pathname}?${createQueryString('sortby', 'desc')}`
                )
              }
            />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
