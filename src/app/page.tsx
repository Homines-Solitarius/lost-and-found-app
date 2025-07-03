'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '/public/hand.jpg'
import Button from './components/Button'

const Home = () => {

  return (
    <>
     <div className='pt-15'>
        <h2 className='text-3xl font-bold text-center mb-6'>Report <span className='text-red-500'>Lost</span> and <span className='text-green-500'>Found</span> Items.</h2>
      <p className='w-75 m-auto px-5 text-center text-gray-800 text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam aperiam illo error, tenetur esse unde animi iusto quaerat dolores asperiores totam, commodi earum. Mollitia doloremque minima maxime tempore neque.</p>
        <div className='flex items-center gap-4 m-auto my-3 justify-center'>
          <Link href='/login' className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
            <Button text="Login"/>
          </Link>
          <Link href='/register' className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'>
            <Button text="Register"/>
          </Link>
        </div>
      </div>
      <Image alt='hero-image' src={HeroImage} className='w-70 m-auto'></Image>
    </>
  )
}

export default Home