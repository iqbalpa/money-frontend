'use client';

import React, { use, useState, useEffect } from 'react';
import { ExpenseResponse, Expense } from '@/constant/type';
import { AiOutlinePlus } from 'react-icons/ai';
import { useAuth } from '@/context/AuthContext';
import expenseService from '@/services/expenses';

export default function Expenses() {
  const auth = useAuth();
  const [amount, setAmount] = useState<number>(0);
  const [expenses, setExpenses] = useState<ExpenseResponse[]>([]);

  useEffect(() => {
    if (!auth.isAuthenticated) return;
    const fetchExpenses = async () => {
      const res = await expenseService.getAll(auth.user?.token as string);
      setExpenses(res);
    };
    fetchExpenses();
  }, [auth.isAuthenticated]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };
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

  const handleCreateExpense = async () => {
    if (!auth.isAuthenticated) return;

    const category = (document.getElementById('category') as HTMLInputElement)
      .value;
    const isExpense =
      (document.getElementById('isExpense') as HTMLInputElement).value ===
      'true'
        ? true
        : false;

    const newExpense: Expense = {
      amount,
      category,
      isExpense,
      user: auth.user?.token as string,
      date: new Date().toISOString(),
    };
    await expenseService.create(newExpense, auth.user?.token as string);

    setTimeout(() => {
      const modal = document.getElementById('my_modal_6') as HTMLInputElement;
      modal.checked = false;
    }, 3000);
  };

  return (
    <>
      <div className='flex max-w-3xl flex-col'>
        <div className='overflow-x-auto'>
          <div className='inline-block w-full p-1.5 align-middle'>
            {/* The button to open modal */}
            <label htmlFor='my_modal_6' className='btn mb-2'>
              New Expense &nbsp;
              <AiOutlinePlus />
            </label>
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
                      {expense.isExpense ? (
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-red-600'>
                          -{expense.amount}
                        </td>
                      ) : (
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-green-600'>
                          +{expense.amount}
                        </td>
                      )}
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

      {/* MODAL */}
      <input type='checkbox' id='my_modal_6' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='mb-3 text-lg font-bold'>Create New Record</h3>
          <input
            type='number'
            placeholder='Amount'
            className='input input-bordered mb-2 w-full max-w-lg'
            onChange={handleAmountChange}
          />
          <select
            id='category'
            className='mb-2 w-full max-w-lg rounded-lg border border-slate-300 py-3'
          >
            <option defaultChecked>Choose category</option>
            <option value='salary'>Salary</option>
            <option value='food'>Food</option>
            <option value='transportation'>Transportation</option>
            <option value='education'>Education</option>
            <option value='entertainment'>Entertrainment</option>
            <option value='others'>Others</option>
          </select>
          <select
            id='isExpense'
            className='w-full max-w-lg rounded-lg border border-slate-300 py-3'
          >
            <option defaultChecked>Choose type</option>
            <option value='true'>Expense</option>
            <option value='false'>Income</option>
          </select>
          <div className='modal-action flex flex-row justify-between'>
            <label htmlFor='my_modal_6' className='btn'>
              Close!
            </label>
            <button onClick={handleCreateExpense} className='btn btn-primary'>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
