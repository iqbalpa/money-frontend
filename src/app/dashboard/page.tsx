import Expenses from '@/components/expenses/Expenses';
import Statistics from '@/components/statistics/Statistics';
import React from 'react';

export default function DahsboardPage() {
  const name = 'John Doe';
  return (
    <main className='flex h-screen w-screen justify-center'>
      <div className='m-5 flex w-screen flex-col items-center rounded-lg p-5'>
        <h1 className='mb-5'>Hi! Welcome, {name}</h1>
        <div className='flex flex-row items-center justify-center'>
          <Statistics />
          <Expenses />
        </div>
      </div>
    </main>
  );
}
