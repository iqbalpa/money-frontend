'use client';

import React, { useState, useEffect } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import expenseService from '@/services/expenses';
import { ExpenseResponse } from '@/constant/type';
import { useAuth } from '@/context/AuthContext';

export default function Statistics() {
  const auth = useAuth();
  const [expenses, setExpenses] = useState<ExpenseResponse[]>([]);

  const MAX_PER_DAY = 1_000_000;
  const todayExpense = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date);
    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      if (expense.isExpense) return acc + expense.amount;
      else return acc - expense.amount;
    }
    return acc;
  }, 0);
  const percentage = Math.round((todayExpense / MAX_PER_DAY) * 100);

  useEffect(() => {
    if (!auth.isAuthenticated) return;
    const fetchExpenses = async () => {
      const response = await expenseService.getAll(auth.user?.token as string);
      setExpenses(response);
    };
    fetchExpenses();
  }, [auth.isAuthenticated]);

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
