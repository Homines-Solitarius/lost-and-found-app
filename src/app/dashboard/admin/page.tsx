'use client'

import Button from '@/app/components/Button'
import React, { useState } from 'react'
import { FaDoorOpen } from 'react-icons/fa'
import Home from './Home'

const AdminDashboard = () => {

    const [isActive, setIsActive] = useState(false);
    const [isIndex, setIsIndex] = useState(0);

    const pages = [
        { id: 1, name: 'Home', content: <Home/> },
        { id: 2, name: 'Reports', content: <Home /> },
        { id: 3, name: 'Settings', content: <Home /> },
    ]

    const handleDisplay = (id: number) => {
        setIsIndex(id);
    }

    return (
        <div className="flex flex-row w-full h-full">
            <div className="inline-block bg-blue-600 text-white w-60 h-140 overflow-y-hidden py-3 px-2 shadow-md">
                <h2 className='font-bold pl-2 my-3 text-xl'>My DashBoard</h2>
                {pages.map((item) => (
                    <li onClick={() => {
                        setIsActive(!isActive);
                        handleDisplay(item.id);
                    }} key={item.id} className='w-full px-2 py-2 mb-1 list-none transition-all duration-300 ease-in hover:bg-white hover:text-black rounded-md cursor-pointer'>
                        <p className='font-bold'>{item.name}</p>
                    </li>
                ))}
                <span className='cursor-pointer flex items-center mt-10 pl-2 bg-red-300 hover:bg-red-500 text-white w-full rounded-md'>
                    <FaDoorOpen size={20} />
                    <Button text='Logout' />
                </span>
            </div>
            {/* Display */}
            <div className="bg-gray-200 w-full h-140 p-4 overflow-y-scroll">
                <div className='m-3 ml-6'>
                    {isIndex && pages[isIndex-1]['content']}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard