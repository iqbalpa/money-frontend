'use client';

import React from 'react';
import { MdFastfood } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { AiFillBook } from 'react-icons/ai';
import ProgressBar from '@ramonak/react-progress-bar';

export default function Statistics() {
  return (
    <>
      <table className='m-5 table-auto'>
        <thead>
          <tr>
            <td className='border px-4 py-2'>icon</td>
            <td className='w-60 border px-4 py-2 text-center'>bar chart</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>
              <MdFastfood size={30} />
            </td>
            <td className='border px-4 py-2'>
              <ProgressBar customLabel='_' completed={75} />
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>
              <AiFillCar size={30} />
            </td>
            <td className='border px-4 py-2'>
              <ProgressBar customLabel='_' completed={5} />
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>
              <AiFillBook size={30} />
            </td>
            <td className='border px-4 py-2'>
              <ProgressBar customLabel='_' completed={55} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
