import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const ClickEve = () => setNav(!nav)
  return (
    <div className='w-full fixed flex h-[50px] justify-between items-center px-6 bg-gray-500 text-gray-200'>
        <div>
            <h1  className='text-2xl text-gray-200'>Tick-Me</h1>
        </div>
        {/* destop menu */}
        <ul className='hidden md:flex space-x-2 text-xl'>
            <li>Home</li>
            <li>Events</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        {/* to hide menu */}
        <div onClick={ClickEve} className='text-gray-200 md:hidden z-10'>
            {!nav ? <FaBars size={20}/> : <FaTimes size={20}/>}
        </div>

        {/* for mobile view */}
        <ul className={!nav? 'hidden' : 'absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-gray-500 to-gray-300' } >
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>Events</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar