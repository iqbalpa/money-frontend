'use client';

import Statistics from '@/components/statistics/Statistics';
import Expenses from '@/components/expenses/Expenses';
import { useAuth } from '@/context/AuthContext';
import React from 'react';

export default function DahsboardPage() {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <h1 className='text-center'>Not authenticated</h1>;
  }

  return (
    <main className='flex h-screen w-screen justify-center'>
      <div className='m-5 flex w-screen flex-col items-center rounded-lg p-5'>
        <h1 className='mb-5'>Hi! Welcome, {auth.user?.name}</h1>
        <div className='flex flex-row items-center justify-center'>
          <Statistics />
          <Expenses />
        </div>
      </div>
    </main>
  );
}
