'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '/public/hand.jpg'
import Button from './components/Button'

const Home = () => {
  const handleClick = () => {
    alert("Get Started Clicke")
  }
  return (
    <>
     <div className='pt-15'>
        <h2 className='sm:text-2xl text-2xl font-bold text-center'>Report <span className='text-red-500'>Lost</span> and <span className='text-green-500'>Found</span> Items.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam aperiam illo error, tenetur esse unde animi iusto quaerat dolores asperiores totam, commodi earum. Mollitia doloremque minima maxime tempore neque.</p>
        <div className='hero-btns'>
          <Button text="Get Started" onClick={handleClick} />
          <Link href='/login'>
            <Button color='#222' text="Login"/>
          </Link>
          
      </div>
      </div>
      <Image alt='hero-image' src={HeroImage} className='w-40'></Image>
    </>
  )
}

export default Home