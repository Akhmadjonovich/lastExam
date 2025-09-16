import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let [openNav , setOpenNav] = useState(false)
  return (
    <div className='mx-auto relative container'>
      <div className='flex items-center justify-between px-20 max-md:px-10 max-sm:px-5 py-5 mx-auto '>
        <img src="/images/logo.svg" alt="" />
        <ul className="flex text-3xl max-2xl:text-2xl gap-10 max-[768px]:hidden">
          <Link to="/"><li className="relative cursor-pointer border-b-3 border-transparent hover:border-orange-500 transition-all duration-300">
            Home
          </li>
          </Link>
          <Link to="/about"><li className="relative cursor-pointer border-b-3 border-transparent hover:border-orange-500 transition-all duration-300">
            About
          </li></Link>
          <li className="relative cursor-pointer border-b-3 border-transparent hover:border-orange-500 transition-all duration-300">
            Recipes
          </li>
        </ul>
        <button className='text-nunito border-transparent max-[768px]:hidden bg-[#163A34] px-8 py-5 rounded-2xl text-3xl max-2xl:text-2xl max-2xl:px-7 max-2xl:py-3 text-white font-nunito  hover:bg-white hover:text-[#163A34] hover:border-[#163A34] hover:scale-105 border-3 transition-all font-bold'>Browse recipes</button>
        <button className='max-[768px]:flex hidden' onClick={()=> setOpenNav(!openNav)}><img src="/images/icon-hamburger-menu.svg" alt="" /></button>
      </div>
      {
        openNav && <div className='bg-white  w-[80%] h-screen absolute top-0 left-0'>
          <ul className='text-3xl space-y-7 p-10 '>
            <Link to="/"><li className='bg-[#F6F5F1] p-2 rounded-xl'>Home</li></Link>
            <Link to="about"><li className='bg-[#F6F5F1] p-2 rounded-xl'>About</li></Link>
            <li className='bg-[#F6F5F1] p-2 rounded-xl'>Recipes</li>
            <li className='bg-[#F6F5F1] p-2 rounded-xl'>Browse recipes</li>
          </ul>
          
          <button className='absolute top-2 right-2 text-3xl' onClick={() => setOpenNav(!openNav)}>✖</button>
        </div>
      }
    </div>
  )
}

export default Navbar