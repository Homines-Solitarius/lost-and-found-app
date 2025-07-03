'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '/public/hand.jpg'
import Button from './components/Button'

const Home = () => {

  return (
    <>
     <div className='pt-10 lg:mx-10'>
        <h2 style={{ lineHeight: 1.7 }} className='text-3xl w-full m-auto lg:w-full font-bold text-center px-3 mb-6 lg:text-6xl lg:mt-10'>Recover <span className='text-red-500 px-3'>Lost</span>Items With <span className='text-blue-500 p-2 px-4 rounded-full border-5 border-dashed'>Ease</span>.</h2>
        <p className='text-center px-2 lg:w-230 lg:m-auto lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam aperiam illo error, tenetur esse unde animi iusto quaerat dolores asperiores totam, commodi earum. Mollitia doloremque minima maxime tempore neque.</p>
        <div className='flex gap-4 m-auto my-5 justify-center lg:gap-6 lg:mt-10'>
          <Link href='/login' className='bg-blue-700 hover:bg-blue-500 text-center text-white font-bold py-2 px-4 rounded-lg sm:w-50 lg:text-xl lg:w-40'>
            <Button text="Login"/>
          </Link>
          <Link href='/register' className='bg-black hover:bg-gray-800 text-center text-white font-bold py-2 px-4 rounded-lg lg:text-xl lg:w-40'>
            <Button text="Register"/>
          </Link>
        </div>
      </div>
      <Image alt='hero-image' src={HeroImage} className='w-70 m-auto rounded lg:w-140 lg:w-130 '></Image>
    </>
  )
}

export default Home