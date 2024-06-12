import React from 'react'

const Body = () => {
  return (
    <div className='lg:flex'>
      <div className='flex items-center justify-center lg:flex-1 lg:overflow-hidden order-2 lg:justify-end'>
        <img src="src\assets\assets\Blue-Shape.svg" alt="" className=" -rotate-45 h-64 md:h-72 lg:h-[450px] " />
        <img src="src\assets\assets\Purple-Shape.svg" alt="" className=" absolute -rotate-[30deg] h-64 md:h-72 lg:h-[450px] "/>
        <img src="src\assets\assets\Pink-Shape.svg" alt="img2" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[450px] "/>
        <img src="src\assets\assets\Hero-Model.png" alt="mg3" className="absolute h-64 md:h-72 lg:h-[450px] " />

      </div>
    <div className='space-y-4 lg:flex-1 order-1'>
      <h1 className="text-5xl font-bold leading- leading-tight font-playfair">Host your website in less than 5 minutes</h1>
      <p className='font-lato text-gray-400'>With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
      <form action="" className='flex flex-col gap-4 md:flex-row'>
        <input className=' rounded-md px-4 py-3 placeholder:text gray-400 ' type="email"  placeholder='Enter your Email'/>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-400  text to-white"> join Waitlist</button >
      </form>
      <div className='flex gap-2'>
      <img src="./assets/Checkmark.svg" alt="lg" />
      <p className='font-lato text-gray-400'>No spam ,ever . Unsubscribe anytime</p>
      </div>
    </div>
    </div>
  )
}

export default Body