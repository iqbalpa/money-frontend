import React from 'react';

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-gray-100 p-5'>
      <div className='flex items-center'>
        <h1 className='ml-2 text-xl font-bold'>Money+</h1>
      </div>
      <nav>
        <ul className='flex'>
          <li className='ml-5'>
            <a href='/'>Home</a>
          </li>
          <li className='ml-5'>
            <a href='/about'>About</a>
          </li>
          <li className='ml-5'>
            <button onClick={() => {}}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
