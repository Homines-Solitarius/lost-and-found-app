'use client'

import Button from '@/app/components/Button'
import React, { useState } from 'react'
import Home from './Home'
import Reports from './Reports'
import Settings from './Settings'
import { FaDoorOpen } from 'react-icons/fa6'

const AdminDashboard = () => {

    const [isActive, setIsActive] = useState(false);
    const [isIndex, setIsIndex] = useState(1);



    const pages = [
        { id: 1, name: 'Overview', content: <Home/> },
        { id: 2, name: 'Reports', content: <Reports /> },
        { id: 3, name: 'Settings', content: <Settings /> },
    ]

    const handleDisplay = (id: number) => {
        setIsIndex(id);
    }

    return (
        <div className="flex flex-row w-full h-full transition-all duration-300ms ease-in-out">
            {<div className="hidden sm:block gap-6 transition-all duration-300 bg-blue-600 text-white w-60 h-140 overflow-y-hidden py-3 px-2 shadow-md">
                <h2 className='font-bold p-2 my-3 text-md bg-white text-black rounded-md'>My DashBoard</h2>
                {pages.map((item) => (
                    <li onClick={() => {
                        setIsActive(!isActive);
                        handleDisplay(item.id);
                    }} key={item.id} className='block px-2 py-2 mb-1 list-none transition-all duration-300 ease-in hover:bg-white hover:text-black rounded-md cursor-pointer'>
                        <p className='font-bold'>{item.name}</p>
                    </li>
                ))}
                <span className='cursor-pointer flex items-center mt-10 p-2 bg-red-300 hover:bg-red-500 text-white w-full rounded-md'>
                    <FaDoorOpen size={20} />
                    <Button text='Logout' />
                </span>
            </div>}
            {/* Display */}
            <div className="bg-gray-200 w-full h-140 px-2 overflow-y-scroll">
                <div className='m-3 ml-6 transition-all duration-300ms ease-in-out'>
                    {isIndex && pages[isIndex-1]['content']}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard