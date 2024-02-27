'use client';
import LoadingSpin from '@/components/LoadingSpin';
import { BASE_URL } from '@/lib/request';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Props = {};

type regRes = {
  name: string;
  email: string;
  isAdmin: Boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  accessToken: string;
};

const SignUp = (props: Props) => {
  const router = useRouter();
  const [info, setInfo] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);

      const requestBody = {
        ...info,
      };

      const response: { data: regRes } = await axios.post(
        `${BASE_URL}/auth/register`,
        requestBody
      );

      await signIn('credentials', {
        email: response.data.email,
        password: info.password,
        redirect: true,
        callbackUrl: '/',
      });
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  const Login = () => {
    router.push('../login');
  };

  return (
    <div className='container mx-auto max-w-7xl p-2 md:p-0 mb-5'>
      <div className='flex justify-center '>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='bg-white border shadow xl:w-[35%] rounded p-5 py-10'
        >
          <h1 className='text-center font-bold text-xl mb-5'>Register Now</h1>

          <div className='space-y-1'>
            <p className='font-semibold'>Name</p>
            <input
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
              className='border w-full rounded-md h-8 px-2 outline-blue-400'
              type='text'
              required
            />
          </div>

          <div className='space-y-1 mt-3'>
            <p className='font-semibold'>Email</p>
            <input
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              className='border w-full rounded-md h-8 px-2 outline-blue-400'
              type='Email'
              required
            />
          </div>

          <div className='space-y-1 mt-3'>
            <p className='font-semibold'>Password</p>
            <input
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
              className='border w-full rounded-md h-8 px-2 outline-blue-400'
              type='password'
              required
            />
          </div>

          {loading ? (
            <LoadingSpin />
          ) : (
            <button
              className='text-center w-52 bg-blue-400 px-4 py-1 rounded-sm mt-3 text-white font-semibold mx-auto block'
              type='submit'
            >
              Sign Up
            </button>
          )}

          <p className='mt-5 font-semibold'>
            Already have an account Login{' '}
            <span className='cursor-pointer underline' onClick={Login}>
              here
            </span>
          </p>
          {error && (
            <p className='text-red-500'>
              Something happened wrong or duplicate email
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
