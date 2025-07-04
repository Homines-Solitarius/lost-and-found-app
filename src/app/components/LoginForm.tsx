'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';

const LoginForm = () => {
    const [matricNumber, setMatricNumber] = useState('');
    const [password, setPassword] = useState('')


    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents

        const storedMatric = 'CS20230200712';
        const storedPassword = '123456'

        //
        if (matricNumber == storedMatric && password == storedPassword) {
          alert("Login Successful");
        } else {
            alert('Invalid Credentials...')
            return;
        }
  }
  
  return (
    <div className="p-5 m-auto flex-1">
      <div className="m-auto">
        <form onSubmit={handleForm} className='relative block bg-gray-100 p-4 rounded lg:w-100 lg:m-auto'>
          <FaUserCircle size={60} className='mx-auto my-4' />
          <label htmlFor="Title">Matric Number</label>
          <input type="text" className='border-2 border-gray-200 my-1 p-1 w-full rounded-md' name="userMatric" id="userMatric" value={matricNumber} onChange={(e) => setMatricNumber(e.target.value)} />
          <label htmlFor="Title">Password</label>
          <input type="password" className='border-2 border-gray-200 my-1 p-1 w-full rounded-md' name="userPassword" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className='bg-blue-700 p-2 my-3 text-white font-bold w-full rounded-md'>Login</button>
          <div className='flex items-center gap-1'>
            <p className='text-sm mr-1'>Don&apos;t have an account?</p>
            <Link href='/register' className='text-blue-700 mr-auto'>Register now</Link>
          </div>
        </form>
        { /* Administrator login */}
         </div>
   </div>
  )
}

export default LoginForm