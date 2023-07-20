import React from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const auth = useAuth();

  return (
    <header className='flex items-center justify-between bg-gray-100 p-5'>
      <div className='flex items-center'>
        <h1 className='ml-2 text-xl font-bold'>Money+</h1>
      </div>
      <nav>
        {auth.isAuthenticated && (
          <ul className='flex flex-row items-center duration-100'>
            <li className='ml-5 hover:scale-105'>
              <a href='/'>Home</a>
            </li>
            <li className='ml-5 hover:scale-105'>
              <a href='/profile'>Profile</a>
            </li>
            <li className='ml-5 rounded-md bg-red-500 px-4 py-2 font-bold text-white hover:scale-105 hover:bg-red-700'>
              <button onClick={() => {}}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
