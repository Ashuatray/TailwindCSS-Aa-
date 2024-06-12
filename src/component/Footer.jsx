import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 text-gray-400'>
      <li>
        <a href="#"> Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a
          href="www.linkedin.com/in/ashutosh-sharma-0a29b9190 tar">LinkdIn</a>
        </li>
        </ul>
        <div className='flex gap-2'>
          <img src="src\assets\assets\Help-Avatar.svg" alt="logo" />
          <div>
          <p className=' font-playfair font-thin'>Have any Questions?</p>
          <a  className='font-lato font-medium' href="3"> Talk to Specialist!</a>
          </div>
        </div>
        </div>
  )
}

export default Footer