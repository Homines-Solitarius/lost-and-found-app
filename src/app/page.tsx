import Image from 'next/image'
import React from 'react'
import HeroImage from '/public/hand.jpg'

const Home = () => {
  return (
    <>
     <div className='home'>
      <h2 className='heading'>Report Lost and Found Items .</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam aperiam illo error, tenetur esse unde animi iusto quaerat dolores asperiores totam, commodi earum. Mollitia doloremque minima maxime tempore neque.</p>
        <div className='hero-btns'>
          <button>Get Started</button>
          <button className='login-btn'>Login</button>
      </div>
      </div>
      <Image alt='hero-image' src={HeroImage} className='hero-image'></Image>
    </>
  )
}

export default Home