'use client';

import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';

const RegisterForm = () => {
    const [matricNumber, setMatricNumber] = useState('');
    const [password, setPassword] = useState('')


    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents

        //
        if (matricNumber != '' && password != '') {
            console.log("Login Successful");
        } else {
            alert('Invalid Credentials...')
            return;
        }
    }
  return (
    <div className="p-5 m-auto">
          <form onSubmit={handleForm} className='relative bg-gray-100 p-4 rounded max-w-80'>
        <FaUserCircle size={60} className='mx-auto my-4 bg-blue-700 text-white rounded-full'/>
            <label htmlFor="Title">Matric Number</label>
            <input type="text" className='border-2 border-gray-200 my-1 p-1 w-full rounded-md' name="userMatric" id="userMatric" value={matricNumber} onChange={(e) => setMatricNumber(e.target.value)}/>
            <label htmlFor="Title">Password</label>
              <input type="password" className='border-2 border-gray-200 my-1 p-1 w-full rounded-md' name="userPassword" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="Title">Confirm Password</label>
              <input type="password" className='border-2 border-gray-200 my-1 p-1 w-full rounded-md' name="userPassword" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className='bg-blue-700 p-2 my-3 text-white font-bold w-full rounded-md'>Register</button>
        </form>
   </div>
  )
}

export default RegisterForm