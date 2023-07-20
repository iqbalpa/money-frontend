'use client';

import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Statistics() {
  const MAX_PER_DAY = 1_000_000;
  const todayExpense = 570_000;
  const percentage = Math.round((todayExpense / MAX_PER_DAY) * 100);

  return (
    <>
      <div className='m-5 flex flex-col items-center justify-center'>
        <div className='h-[25vh] w-[25vh]'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className='text-md m-2'>
          <p>
            Today expenses:{' '}
            <span className='text-red-600'>Rp{todayExpense}</span>
          </p>
          <p>
            Amount left to spend:{' '}
            <span className='text-blue-600'>
              Rp{MAX_PER_DAY - todayExpense}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
