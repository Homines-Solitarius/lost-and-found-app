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
     <div className='home'>
      <h2 className='heading'>Report Lost and Found Items .</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam aperiam illo error, tenetur esse unde animi iusto quaerat dolores asperiores totam, commodi earum. Mollitia doloremque minima maxime tempore neque.</p>
        <div className='hero-btns'>
          <Button text="Get Started" onClick={handleClick} />
          <Link href='/login'>
            <Button color='#222' text="Login"/>
          </Link>
          
      </div>
      </div>
      <Image alt='hero-image' src={HeroImage} className='hero-image'></Image>
    </>
  )
}

export default Home