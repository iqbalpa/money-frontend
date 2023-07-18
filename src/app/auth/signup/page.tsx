'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from '@/services/users';
import { User } from '../interface';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setAge(0);
      return;
    }
    const newAge = parseInt(e.target.value);
    setAge(newAge);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: User = {
      username,
      password,
      name,
      age,
    };
    try {
      await signup(user);
      toast.success('Sign up successfully');
      setTimeout(() => {
        router.push('/auth/signin');
      }, 3000);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <main className='flex h-screen w-screen items-center justify-center bg-pink-300'>
      <div className='m-5 flex h-96 w-[28rem] flex-col items-center justify-center rounded-lg p-5'>
        <h1 className='mb-5'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='form-control w-full max-w-xs'>
          <div className='-mx-3 mb-3 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-name'
              >
                name
              </label>
              <input
                required
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none'
                id='grid-name'
                type='text'
                placeholder='Name'
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div className='-mx-3 mb-3 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-age'
              >
                age
              </label>
              <input
                required
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none'
                id='grid-age'
                type='number'
                value={age}
                onChange={handleAgeChange}
              />
            </div>
          </div>

          <div className='-mx-3 mb-3 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-username'
              >
                Username
              </label>
              <input
                required
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none'
                id='grid-username'
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          <div className='-mx-3 mb-3 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-password'
              >
                Password
              </label>
              <input
                required
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
                Sign Up
              </button>
            </div>
          </div>
          <div className='max-mx-3 mb-2 flex flex-wrap justify-center'>
            <p>
              Already have an account?{' '}
              <a
                href='/auth/signin'
                className='text-blue-500 hover:cursor-pointer hover:text-blue-700 focus:text-purple-500'
              >
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
}
