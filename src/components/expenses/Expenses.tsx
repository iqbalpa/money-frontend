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
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='inline-block w-full p-1.5 align-middle'>
            <div className='overflow-hidden rounded-lg border'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 '
                    >
                      Date
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 '
                    >
                      Amount
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 '
                    >
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-right text-xs font-bold uppercase text-gray-500 '
                    >
                      Edit
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-right text-xs font-bold uppercase text-gray-500 '
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {dummyExpenses.map((expense) => (
                    <tr key={expense.id}>
                      <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800'>
                        {expense.date.split('T')[0]}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800'>
                        {expense.amount}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800'>
                        {expense.category}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                        <a
                          className='text-green-500 hover:text-green-700'
                          href='#'
                        >
                          Edit
                        </a>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                        <a className='text-red-500 hover:text-red-700' href='#'>
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
