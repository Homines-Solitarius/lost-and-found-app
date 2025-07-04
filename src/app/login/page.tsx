'use client'

import { useState } from "react"
import AdminLogin from "../components/AdminLogin"
import LoginForm from "../components/LoginForm"

const Login = () => {

  const [isAdmin, setIsAdmin] = useState(false);

  const SwitchForm = () => {
    setIsAdmin(!isAdmin)
  }

  return (
    <>
      <h3 className='text-xl font-bold text-center m-4 lg:text-3xl lg:my-10'> {isAdmin ? "Administrator Login" : "Student Login"}</h3>
      <div className="flex justify-center w-full m-auto overflow-x-hidden transition-all duration-300 ease-in-out">
        {isAdmin ? <AdminLogin /> : <LoginForm/> }
      </div>
      <button className="block ml-auto mr-5 mb-3 bg-gray-900 text-white font-bold p-2 rounded-md" onClick={SwitchForm}>{isAdmin ? "Login as Student" : "Login as admin"}</button>
      </>
  )
}

export default Login