import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

const RecipesDetailed = ({data, loading}) => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    useEffect(() => {
      const found = data.find((item) => String(item.id) === id);
      setRecipe(found);

      window.scrollTo({
        top: 0,
        behavior: "smooth"   
      });
    }, [id, data]);


    if (loading)
        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="h-16 w-16 border-4 border-[#FE9F6B] border-t-transparent rounded-full animate-spin"></div>
          </div>
        );
        
    if (!recipe) return <p className="text-center mt-20 text-3xl">Recipe not found</p>;

    console.log(recipe.image.large);
  return (
    <div className='container mx-auto mt-20 max-lg:mt-10'>
        <h2 className='text-2xl max-lg:text-xl py-5 mx-40 max-2xl:mx-30 max-xl:mx-20 max-md:mx-10'>Recipes / {recipe.title}</h2>
        <div key={recipe.id} className='flex max-md:flex-col justify-between mx-40 max-2xl:mx-30 max-xl:mx-20 max-md:mx-10 gap-20 max-lg:gap-10 '>
            <div>
              <img src={recipe.image.large } className='w-[580px]  max-md:w-full rounded-2xl' alt="" />
            </div>

            {/* info */}

            <div>
                <h3 className='text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl font-bold '>{recipe.title}</h3>
                <p className='text-3xl max-lg:text-2xl text-[#395852] py-10'>{recipe.overview}</p>

                <div className='flex max-sm:flex-wrap items-center gap-10 max-lg:gap-5 text-2xl max-lg:text-[12px] text-[#163A34]'>
                  <div className="flex items-center gap-5 max-lg:gap-3">
                    <img src="/images/icon-servings.svg" alt="" />
                    <p>Servings: {recipe.servings}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="/images/icon-prep-time.svg" alt="" />
                    <p>Prep: {recipe.prepMinutes} mins</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="/images/icon-cook-time.svg" alt="" />
                    <p>Cook: {recipe.cookMinutes} mins</p>
                  </div>
                </div>

                <section className='my-10'>
                  <h3 className='text-4xl max-lg:text-3xl font-bold'>Ingredients:</h3>
                  <ul className='mt-5 '>
                    {
                      recipe.ingredients.map((i, index) => {
                        return <li className='flex py-2 items-center gap-5 text-3xl max-lg:text-2xl text-[#395852]' key={index}> <img src="/images/arrow-right.svg" alt="" /> {i}</li>
                      })
                    }
                  </ul>
                </section>

                <section className='my-10'>
                  <h3 className='text-4xl max-lg:text-3xl font-bold'>Instructions:</h3>
                  <ul className='mt-5 '>
                    {
                      recipe.instructions.map((i, index) => {
                        return <li className='flex py-2 items-center gap-5 text-3xl max-lg:text-2xl text-[#395852]' key={index}> <img src="/images/arrow-right.svg" alt="" /> {i}</li>
                      })
                    }
                  </ul>
                </section>

                
            </div>
        </div>

      <div className='mx-40 max-2xl:mx-30 max-xl:mx-20 max-md:mx-10'>
        <h3 className='text-4xl max-lg:text-3xl font-bold max-md:my-10 text-[#163A34]'>More recipes</h3>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  gap-20 max-xl:gap-10 max-md:gap-20 ">

        {data.slice(0, 3).map((r) => (
          <div
            key={r.id}
            className="relative bg-white max-md:w-full rounded-2xl h-[103%] pb-10 max-sm:pb-15 mt-10  max-lg:mt-5 max-md:mt-0"
          >
            <img src={r.image.large} className="rounded-3xl p-3 max-sm:p-2" alt="" />
            <div className="p-5">
              <h3 className="font-bold text-3xl">{r.title}</h3>
              <p className="text-2xl max-lg:text-xl my-5 text-[#395852]">
                {r.overview}
              </p>

              <div className="grid grid-cols-2 gap-5 text-2xl max-xl:text-xl max-lg:text-lg text-[#163A34]">
                <div className="flex items-center gap-5 max-lg:gap-3">
                  <img src="/images/icon-servings.svg" alt="" />
                  <p>Servings: {r.servings}</p>
                </div>
                <div className="flex items-center gap-5">
                  <img src="/images/icon-prep-time.svg" alt="" />
                  <p>Prep: {r.prepMinutes} mins</p>
                </div>
                <div className="flex items-center gap-5">
                  <img src="/images/icon-cook-time.svg" alt="" />
                  <p>Cook: {r.cookMinutes} mins</p>
                </div>
                <Link to={`/recipes/${r.id}`} className="rounded-4xl absolute text-center bg-[#163A34] py-5 text-white bottom-5 right-5 left-5">
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default RecipesDetailed