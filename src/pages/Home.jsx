import React from 'react'


const Home = () => {
  return (
    <div className='mx-auto mt-20 container'>
        <div className='hero'>
        <h1 className='text-center text-8xl font-[Nunito_Sans] max-2xl:text-7xl max-lg:text-6xl max-md:text-5xl m font-bold'> <span className='h_bg'>Healthy</span> meals, zero fuss</h1>
        <p className='text-center text-3xl max-2xl:text-2xl max-lg:text-xl max-md:text-sm text-[#395852] mt-12'>Discover eight quick, whole-food recipes that you can cook tonight</p>
        <p className='text-center text-3xl max-2xl:text-2xl max-lg:text-xl max-md:text-sm text-[#395852]'>—no processed junk, no guesswork.</p>
        <button className='bg-[#163A34] mb-10 px-12 flex mx-auto mt-10 py-7 text-4xl max-2xl:text-3xl max-lg:text-2xl max-md:text-xl max-md:px-7 max-md:py-3 max-2xl:px-10 max-2xl:py-5 max-sm:text-[13px] text-white font-nunito rounded-2xl hover:bg-white hover:text-[#163A34] hover:border-[#163A34] hover:scale-105 border-3 transition-all font-bold' >Start exploring</button>

        <picture >
            <source srcSet="/images/image-home-hero-large.webp" className='max-w-[1190px] w-full' media="(min-width:1024px)" type="image/webp" />
            <source srcSet="/images/hero-large.jpg" className='w-[50%] mx-20' media="(min-width:1024px)" type="image/jpeg" />
            <img src="/images/image-home-hero-small.webp" alt="Hero background"  className="w-[90%] mx-auto border-10 border-white rounded-3xl max-sm:border-5 h-auto" />
        </picture>
        </div>

        <section className='mt-30 max-lg:mt-20 max-sm:mt-15'>
            <h2 className='text-center text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl   font-bold'>What you’ll get</h2>
            <div>
                <div className='flex max-md:flex-col *:max-md:w-full max-md:space-y-10 items-center justify-between *:w-[30%] mt-20 max-sm:mt-10 mx-10 max-sm:mx-5'>
                    <div>
                        <img src="/images/Carrots.svg" className='max-sm:w-20' alt="" />
                        <h3 className='text-5xl max-2xl:text-4xl max-lg:text-3xl py-5 font-bold'>Whole-food recipes</h3>
                        <p className='text-3xl max-xl:text-2xl max-sm:text-xl'>Each dish uses everyday, unprocessed ingredients.</p>
                    </div>
                    <div>
                        <img src="/images/Feature.svg" alt="" />
                        <h3 className='text-5xl max-2xl:text-4xl max-lg:text-3xl py-5 font-bold'>Minimum fuss</h3>
                        <p className='text-3xl max-xl:text-2xl max-sm:text-xl'>All recipes are designed to make eating healthy quick and easy.</p>
                    </div>
                    <div>
                        <img src="/images/lupa.svg" alt="" />
                        <h3 className='text-5xl max-2xl:text-4xl max-lg:text-3xl py-5 font-bold'>Search in seconds</h3>
                        <p className='text-3xl max-xl:text-2xl max-sm:text-xl'>Filter by name or ingredient and jump straight to the recipe you need.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='flex max-md:flex-col items-center justify-between gap-80 max-2xl:gap-50 max-xl:gap-40 max-md:gap-20 mt-50 px-10'>
            <div>
                <h3 className='text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl font-bold'>Built for real life</h3>
                <p className='text-3xl max-xl:text-2xl max-lg:text-xl my-10'>Cooking shouldn’t be complicated. These recipes come in under  <span className='bg-30'>30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat. </p>
                <p className='text-3xl max-xl:text-2xl max-lg:text-xl'>Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
            </div>
            <img src="/images/image-home-real-life-large.webp" className='w-[700px] max-2xl:w-[600px] max-xl:w-[500px] max-lg:w-[400px] max-md:w-full mb-20 rounded-2xl' alt="" />
        </section>
    </div>
  )
}

export default Home