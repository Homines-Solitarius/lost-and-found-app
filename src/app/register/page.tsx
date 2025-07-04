"use client"

import { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import AdminRegister from '../components/AdminRegister';

const Register = () => {
  
    const [isAdmin, setIsAdmin] = useState(false);
  
    const SwitchForm = () => {
      setIsAdmin(!isAdmin)
    }
  return (
    <>
      <h3 className='text-2xl font-bold text-center m-4 mt-5 lg:text-3xl lg:my-10'> {isAdmin ? "Create Admin" : "Create Account"}</h3>
      <div className="flex justify-center w-full m-auto overflow-x-hidden transition-all duration-300 ease-in-out">
        {isAdmin ? <AdminRegister /> : <RegisterForm />}
      </div>
      <button className="block ml-auto mr-5 mb-3 bg-gray-900 text-white font-bold p-2 rounded-md transition-all duration-300 ease-in-out" onClick={SwitchForm}>{isAdmin ? "Register as Student" : "Regsiter as admin"}</button>
    </>
  )
}

export default Register