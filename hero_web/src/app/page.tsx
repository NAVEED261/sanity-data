import React from 'react'
import Navbar from './component/navbar'
import Hero from './component/hero'

const Home = () => {
  return (
    <div className='bg-gray-300 py-5 m-5 '>
      <h1 className='font-bold font-serif  text-[36px] font-gray-700 underline italic '>
      Home
      </h1>
      <Navbar/>
      <Hero/>

    </div>
  )
}

export default Home