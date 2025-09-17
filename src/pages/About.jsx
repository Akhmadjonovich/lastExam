import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='container mx-auto px-20 max-md:px-10 max-sm:px-5'>
    <section className='flex max-md:flex-col items-center justify-between container  gap-50 max-lg:gap-20 max-md:gap-10 max-sm:px-5 mt-20 max-md:mt-10'>
        <div>
          <h4 className='bg-[#FE9F6B] inline-block text-3xl max-2xl:text-2xl max-lg:text-xl font-bold p-2 rounded-xl'>Our mission</h4>
          <h2 className='text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl font-bold my-10'>Help more people cook nourishing meals, 
          more often.</h2>
          <p className='text-3xl text-[#395852] max-2xl:text-2xl max-xl:text-xl '>Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>
          <p className='text-3xl mt-10 max-lg:mt-5 text-[#395852] max-2xl:text-2xl max-xl:text-xl '>We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
        </div>
        <img src="/images/image-about-our-mission-large.webp" className='w-[615px] max-2xl:w-[550px] max-xl:w-[500px] max-lg:w-[400px] max-md:w-full rounded-4xl' alt="" />
    </section>


    <section className='flex max-md:flex-col items-start justify-between my-30 max-sm:my-20'>
      <h2 className='w-[50%] max-md:my-10 text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl  font-bold'>Why we exist</h2>
      <div className='space-y-20 max-md:space-y-10'>
        <div className='flex gap-10 items-start'>
          <img src="/images/arrow-right.svg" alt="" />
          <div className='max-w-[770px]'>
            <h3 className='font-bold text-4xl max-xl:text-3xl mt-2'>Cut through the noise.</h3>
            <p className='text-3xl max-xl:text-2xl my-5 text-[#395852]'>The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
          </div>
        </div>
        <div className='flex gap-10 items-start'>
          <img src="/images/arrow-right.svg" alt="" />
          <div className='max-w-[770px]'>
            <h3 className='font-bold text-4xl max-xl:text-3xl mt-2'>  Empower home kitchens.</h3>
            <p className='text-3xl max-xl:text-2xl my-5 text-[#395852]'>The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
          </div>
        </div>
        <div className='flex gap-10 items-start'>
          <img src="/images/arrow-right.svg" alt="" />
          <div className='max-w-[770px]'>
            <h3 className='font-bold text-4xl max-xl:text-3xl mt-2'>Make healthy look good.</h3>
            <p className='text-3xl max-xl:text-2xl my-5 text-[#395852]'>The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
          </div>
        </div>
      </div>
    </section>



    <section className='flex items-start max-md:flex-col justify-between my-50 max-lg:my-30 max-sm:my-20'>
        <h2 className='hidden max-md:flex text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl my-10 font-bold'>Our food philosophy</h2>
      <div className='w-[50%] max-md:hidden'>
        <h2 className=' text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl  font-bold'>Our food</h2>
        <h2 className=' text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl  font-bold'> philosophy</h2>
      </div>
      <div className='space-y-20 max-xl:space-y-15 '>
        <div className='flex gap-10 items-start'>
          <img src="/images/arrow-right.svg" alt="" />
          <div className='max-w-[770px]'>
            <h3 className='font-bold text-4xl max-xl:text-3xl mt-2'>Whole ingredients first.</h3>
            <p className='text-3xl max-xl:text-2xl  my-5 text-[#395852]'>Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p>
          </div>
        </div>
        <div className='flex gap-10 items-start'>
          <img src="/images/arrow-right.svg" alt="" />
          <div className='max-w-[770px]'>
            <h3 className='font-bold text-4xl max-xl:text-3xl mt-2'>Flavor without compromise.</h3>
            <p className='text-3xl max-xl:text-2xl  my-5 text-[#395852]'>Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p>
          </div>
        </div>
        <div className='flex gap-10 items-start'>
          <img src="/images/arrow-right.svg" alt="" />
          <div className='max-w-[770px]'>
            <h3 className='font-bold text-4xl max-xl:text-3xl mt-2'>Respect for time.</h3>
            <p className='text-3xl max-xl:text-2xl  my-5 text-[#395852]'>Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.</p>
          </div>
        </div>
        <div className='flex gap-10 items-start'>
          <img src="/images/arrow-right.svg" alt="" />
          <div className='max-w-[770px]'>
            <h3 className='font-bold text-4xl max-xl:text-3xl mt-2'>Sustainable choices.</h3>
            <p className='text-3xl max-xl:text-2xl  my-5 text-[#395852]'>Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p>
          </div>
        </div>
      </div>
    </section>

    <section className='flex max-md:flex-col items-center justify-between gap-70 max-2xl:gap-50 max-xl:gap-25 max-md:gap-20 max-sm:gap-10'>
      <div>
        <h3 className='my-10 text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl  font-bold'>Beyond the plate</h3>
        <p className='text-3xl max-xl:text-2xl  text-[#395852]'>We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
        <ol className='list-disc list-inside my-5 *:text-3xl *:max-xl:text-2xl  text-[#395852]'>
          <li>Encourage family dinners and social cooking.</li>
          <li>Reduce reliance on single-use packaging and delivery waste.</li>
          <li>Spark curiosity about seasonal produce and local agriculture.</li>
        </ol>
      </div>
      <img src="images/image-about-beyond-the-plate-large.webp" className='w-[744px] max-2xl:w-[680px] max-xl:w-[600px] max-lg:w-[450px] max-md:w-full rounded-3xl' alt="" />
    </section>
    
    <Footer/>
    </div>
  )
}

export default About