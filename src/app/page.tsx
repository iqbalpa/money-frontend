'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <h1 className='mb-5'>This is a blank page</h1>
      <button
        onClick={() => {
          router.push('/auth/signup');
        }}
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      >
        Sign Up
      </button>
    </div>
  );
}
