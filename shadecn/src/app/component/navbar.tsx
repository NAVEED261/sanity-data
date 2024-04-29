import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex flex-justify-between gap-4'>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/about">Contect</Link>
            </li>
        </ul>


    </div>
  )
}
