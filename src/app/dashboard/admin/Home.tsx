'use client'
import React from 'react'
import { FaUserCheck } from 'react-icons/fa'

const nItems = 20;

const reporters = [
    { id: 1, name: 'John Oseni', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam aperiam illo error, tenetur esse unde animi iusto quaerat dolores asperiores totam, commodi earum. Mollitia doloremque minima maxime tempore neque.', matric: 'CS20230200712' },
    { id: 2, name: 'Hack Sultan', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam aperiam illo error, tenetur esse unde animi iusto quaerat dolores asperiores totam, commodi earum. Mollitia doloremque minima maxime tempore neque.', matric: 'CS20230201435' },
    { id: 3, name: 'Elon Musk', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam aperiam illo error, tenetur esse unde animi iusto quaerat dolores asperiores totam, commodi earum. Mollitia doloremque minima maxime tempore neque.', matric: 'CS20230203876' },

]

const Home = () => {
    return (
        <>
            <div className='flex justify-between items-center mb-5 ransition-all duration-300ms ease-in-out'>
                <h3 className='font-bold text-xl'>Quick Overview</h3>
                <div className=''>
                    <span>Welcome, admin</span>
                    <FaUserCheck size={30} />
                </div>
            </div>
            {/* Cards */}
            <div className='grid grid-cols-3 gap-8 mb-5'>

                <div className="bg-red-500 text-white h-30 py-3 px-4 rounded-md  transition-all duration-300 shadow-md">
                    <h3 className="font-bold">Total Lost Items</h3>
                    <span className='font-bold'>{nItems}</span>
                </div>

                <div className="bg-blue-500 text-white py-3 px-4 rounded-md transition-all duration-300 shadow-md">
                    <h3 className="font-bold">Recovered Items</h3>
                    <span className='font-bold'>{nItems - 3}</span>
                </div>

                <div className="bg-white py-3 px-4 rounded-md transition-all duration-300 shadow-md">
                    <h3 className="font-bold">Unclaimed Items</h3>
                    <span className='text-green-700 font-bold'>{nItems - 17}</span>
                </div>

            </div>
            {/* Students who reported and matric number, plus item found */}

            <h3 className='font-bold text-xl my-5'>This Week</h3>
            <div className='grid grid-cols-3 gap-8'>
                {reporters.map((report) => (
                    <div key={report.id} className="bg-white h-fit mb-3 py-3 px-4 rounded-md transition-all duration-300 hover:shadow-md cursor-pointer">
                        <span className='flex'>
                            <h3 className="text-md font-bold">{report.name}</h3>
                            <span className='text-white bg-red-500 w-5 h-6 text-center rounded-full font-bold ml-auto'>{(Math.random() * 7).toFixed(0)}</span>
                        </span>
                        <h3 className="text-sm font-semibold text-gray-600 mb-2">@ {report.matric}</h3>
                        <h3 className="text-md">{report.content}</h3>
                    </div>
                ))}
            </div>

            {/*  */}

            <h3 className='font-bold text-xl my-5'>Last Week</h3>
            <div className='grid grid-cols-3 gap-8'>
                {reporters.map((report) => (
                    <div key={report.id} className="bg-white h-fir mb-3 py-3 px-4 rounded-md transition-all duration-300 hover:shadow-md cursor-pointer">
                        <span className='flex'>
                            <h3 className="text-md font-bold">{report.name}</h3>
                            <span className='text-white bg-red-500 w-5 h-6 text-center rounded-full font-bold ml-auto'>{(Math.random() * 7).toFixed(0)}</span>
                        </span>
                        <h3 className="text-sm font-semibold text-gray-600 mb-2">@ {report.matric}</h3>
                        <h3 className="text-md">{report.content}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home