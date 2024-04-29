import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-end text-pink-500 py-5 font-bold font-serif underline italic '>
      <ul className='flex'>
        <li className='mr-5'>
          <Link href="/">Home</Link>
        </li>
        <li className='mr-5'>
          <Link href="/"> About</Link>
        </li>
        <li className='mr-5'>
          <Link href="/">Contect</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar