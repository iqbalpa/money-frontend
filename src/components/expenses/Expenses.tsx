import React from 'react';
import { ExpenseResponse } from '@/constant/type';

export default function Expenses() {
  const dummyExpenses: ExpenseResponse[] = [
    {
      amount: 100000,
      date: '2021-08-31T00:00:00.000Z',
      category: 'Food',
      isExpense: true,
      userId: '1',
      id: '1',
    },
    {
      amount: 200000,
      date: '2021-08-31T00:00:00.000Z',
      category: 'Transport',
      isExpense: true,
      userId: '1',
      id: '2',
    },
    {
      amount: 300000,
      date: '2021-08-31T00:00:00.000Z',
      category: 'Salary',
      isExpense: false,
      userId: '1',
      id: '3',
    },
  ];

  return (
    <>
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>Date</th>
            <th className='border px-4 py-2'>Amount</th>
            <th className='border px-4 py-2'>Category</th>
            <th className='border px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyExpenses.map((expense) => (
            <tr key={expense.id}>
              <td className='border px-4 py-2'>{expense.date.split('T')[0]}</td>
              <td className='border px-4 py-2'>{expense.amount}</td>
              <td className='border px-4 py-2'>{expense.category}</td>
              <td className='border px-4 py-2'>
                <button className='rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
