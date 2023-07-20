import Expenses from '@/components/expenses/Expenses';
import Statistics from '@/components/statistics/Statistics';
import React from 'react';

export default function DahsboardPage() {
  return (
    <main className='flex h-screen w-screen justify-center'>
      <div className='m-5 flex w-screen flex-col items-center rounded-lg p-5'>
        <h1 className='mb-5'>Dashboard</h1>
        <div className='flex w-screen flex-row justify-around'>
          <Statistics />
          <Expenses />
        </div>
      </div>
    </main>
  );
}
