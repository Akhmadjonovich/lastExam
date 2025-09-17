import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Recipes = () => {

    const [data, setData] = useState([]); // Ma’lumotlarni saqlash uchun state
    const [loading, setLoading] = useState(true); // Yuklanish holatini ko‘rsatish
    let urlPoint = "http://localhost:3000/recipes" 
    useEffect(() => {
      
      axios.get(urlPoint)
        .then((response) => {
          setData(response.data);   
          setLoading(false);
        })
        .catch((error) => {
          console.error("Xatolik:", error);
          setLoading(false);
        });
    }, [urlPoint]); 
  console.log(data);
    if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <div className='container mx-auto mt-20 '>
        <h2 className='text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl text-center my-10 font-bold'>Explore our simple, healthy recipes</h2>
        <p className='text-3xl max-xl:text-2xl text-center text-[#395852] px-130 max-lg:px-90 max-md:px-50 max-sm:px-10 max-sm:text-xl'>Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>

        <section>
            {/* FIlters */}
        </section>

        <section className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mx-10 max-sm:mx-5  gap-20 max-xl:gap-10 max-md:gap-20 '>
            { 
                data && data.map((r) => {
                    return (
                        <div key={r.id} className='relative bg-white  max-md:w-full rounded-2xl h-[103%] mt-20'>
                            <img src={r.image.large} className='rounded-3xl p-3 max-sm:p-2 '  alt="" />
                            <div className='p-5'>
                                <h3 className='font-bold text-3xl'>{r.title}</h3>
                                <p className='text-2xl max-lg:text-xl my-5 text-[#395852]'>{r.overview}</p>

                                <div className='grid grid-cols-2 gap-5 text-2xl max-xl:text-xl max-lg:text-lg text-[#163A34]'>
                                    <div className='flex items-center gap-5 max-lg:gap-3'>
                                    <img src="/images/icon-servings.svg" alt="" />
                                    <p>Servings: {r.servings}</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <img src="/images/icon-prep-time.svg" alt="" />
                                    <p>Prep: {r.prepMinutes} mins</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <img src="/images/icon-cook-time.svg" alt="" />
                                    <p>Cook: {r.cookMinutes} mins</p>
                                </div>
                                <button className='rounded-4xl absolute text-center bg-[#163A34]  py-5 text-white bottom-5 right-5 left-5 '>View Recipe</button>
                        </div>

                </div>

            </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Recipes