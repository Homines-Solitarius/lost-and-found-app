'use client'
import React from 'react'
import { FaUserCheck } from 'react-icons/fa'



const Home = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>Welcome, Admin</h3>
                <FaUserCheck size={40} />
            </div>
        </>
    )
}

export default Home