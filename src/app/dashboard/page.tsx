import Expenses from '@/components/expenses/Expenses';
import React from 'react';

export default function DahsboardPage() {
  return (
    <main className='flex h-screen w-screen items-center justify-center'>
      <div className='m-5 flex h-96 w-[28rem] flex-col items-center justify-center rounded-lg p-5'>
        <h1 className='mb-5'>Dashboard</h1>
        <Expenses />
      </div>
    </main>
  );
}
