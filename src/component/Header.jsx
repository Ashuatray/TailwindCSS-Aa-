import React from 'react'
import { FaBars } from "react-icons/fa6"

const Header = () => {
  return (
    <div className="flex justify-between">
        <div className="flex items-center gap-2">

            <img src="./src/assets/assets/Logo.svg" alt="this is icon" />
            <button className="h-8 bg-gradient-to-r from-orange-400 to-red-400 text-white px-2 py-1 rounded-2xl">Hoster is hiring...</button>
        </div>
        <ul className='hidden lg:flex justify-betweeen items-center font-lato text-gray-400 gap-6'>
          <li> <a href="#">Plans</a></li>
          <li> <a href="#">Find Domain</a></li>
      <   li> <a href="#">Why Hoster</a></li>
        </ul>
        <div className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>

        <a href="#" className='text-gray-400 font-lato'>Sign In</a>
        <button className='rounded-md px-4 py-3 bg-blue-400  hover:bg-blue-600 text-white'>Join Waitlist</button>
        

        </div>
        <div className='lg:hidden'>
            <FaBars/>

        </div>
    </div>
  )
}

export default Header