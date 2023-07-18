'use client';

import React, { useState } from 'react';
import { signin } from '@/services/users';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '@/hooks/useAuth';

export default function SigninPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signin({ username, password });
      console.log(res);
      login(res);
      toast.success('Login successfully');
    } catch (err: any) {
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <main className='flex h-screen w-screen items-center justify-center bg-pink-300'>
      <div className='m-5 flex h-96 w-[28rem] flex-col items-center justify-center rounded-lg p-5'>
        <h1 className='mb-5'>Sign In</h1>
        <form onSubmit={handleSubmit} className='form-control w-full max-w-xs'>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-username'
              >
                Username
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none'
                id='grid-username'
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-password'
              >
                Password
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none'
                id='grid-password'
                type='password'
                placeholder='******************'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className='-mx-3 mb-2 flex flex-wrap'>
            <div className='w-full px-3'>
              <button
                className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
                type='submit'
              >
                Sign In
              </button>
            </div>
          </div>
          <div className='max-mx-3 mb-2 flex flex-wrap justify-center'>
            <p>
              Don't have an account?{' '}
              <a
                href='/auth/signup'
                className='text-blue-500 hover:cursor-pointer hover:text-blue-700 focus:text-purple-500'
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
}
