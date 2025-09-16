import React from 'react'

const Footer = () => {
  return (
    <div className='footer pt-20  '>
        <div className='container mx-auto py-30 max-sm:py-20 footer-1 bg-[#E9EDE8]'>
        <h3 className='text-center text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl font-bold'>Ready to cook smarter?</h3>
        <p className='text-3xl max-xl:text-2xl max-lg:text-xl text-center my-10'>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
        <button className='flex mx-auto text-nunito bg-[#163A34] px-8 py-5 rounded-2xl text-3xl max-2xl:text-2xl max-2xl:px-7 max-2xl:py-3 max-lg:text-xl max-sm:text-lg max-sm:px-5 text-white font-nunito  hover:bg-white hover:text-[#163A34] hover:border-[#163A34] hover:scale-105 border-3 transition-all font-bold'>Browse recipes</button>
        </div>
        <div className='flex items-center justify-between container mx-auto  py-10 px-20 max-md:px-10 max-sm:px-5 '>
            <h3 className='text-4xl max-xl:text-3xl max-md:text-2xl max-sm:text-xl'>Made with ❤️ and 🥑</h3>
            <div className='flex items-center gap-10 max-sm:gap-5 *:w-15 *:max-xl:w-10 *:max-md:w-7 *:max-sm:w-5'>
                <img src="/images/icon-instagram.svg" alt="" />
                <img src="/images/icon-bluesky.svg" alt="" />
                <img src="/images/icon-tiktok.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer