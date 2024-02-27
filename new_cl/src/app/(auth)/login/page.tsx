'use client';
import Wrapper from '@/components/Wrapper';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

type Props = {};

const Login = (props: Props) => {
  const search = useSearchParams();
  const CredentialsSignin = search.get('error') === 'CredentialsSignin';

  const router = useRouter();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn('credentials', {
      email: login.email,
      password: login.password,
      redirect: true,
      callbackUrl: '/',
    });

    // console.log(login);

    // dispatch(loginUser({ login, navigate }));
  };

  const SignUp = () => {
    router.push('../sign-up');
  };
  return (
    <Wrapper>
      <div className='container mx-auto max-w-7xl p-2 md:p-0 mb-5'>
        <div className='flex justify-center'>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className='bg-white border shadow xl:w-[35%] rounded p-5 py-10'
          >
            <h1 className='text-center font-bold text-xl mb-5'>LOG IN</h1>

            <div className='space-y-1'>
              <p className='font-semibold'>Your Email</p>
              <input
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                className='border w-full rounded-md h-8 px-2 outline-blue-400'
                type='Email'
                required
              />
            </div>

            <div className='space-y-1 mt-3'>
              <p className='font-semibold'>Your Password</p>
              <input
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
                className='border w-full rounded-md h-8 px-2 outline-blue-400'
                type='password'
                required
              />
            </div>

            <Button
              className='text-center w-52 bg-blue-400 px-4 py-1 rounded-sm mt-3 text-white font-semibold mx-auto block'
              type='submit'
            >
              Login
            </Button>

            <p className='text-red-500 text-center'>
              {CredentialsSignin ? 'Wrong credentials ' : ''}
            </p>
            <p className='mt-5 font-semibold'>
              Do not have account registration{' '}
              <span className='cursor-pointer underline' onClick={SignUp}>
                here
              </span>
            </p>
          </form>
        </div>
      </div>{' '}
    </Wrapper>
  );
};

export default Login;
