import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const RecipesDetailed = ({data, loading}) => {
    const { id } = useParams();
    const recipe = data.find((item) => String(item.id) === id);


    if (loading)
        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="h-16 w-16 border-4 border-[#FE9F6B] border-t-transparent rounded-full animate-spin"></div>
          </div>
        );
        
    if (!recipe) return <p className="text-center mt-20 text-3xl">Recipe not found</p>;

    console.log(recipe.image.large);
  return (
    <div className='container mx-auto'>
        <div key={recipe.id} className='flex justify-between mx-40 gap-20 mt-20'>
            <div>
              <h2 className='text-2xl py-5'>Recipes / {recipe.title}</h2>
              <img src={recipe.image.large } className='w-[580px]' alt="" />
            </div>

            {/* info */}

            <div className='mt-16'>
                <h3 className='text-7xl font-bold '>{recipe.title}</h3>
                <p className='text-3xl text-[#395852] py-10'>{recipe.overview}</p>

                <div className='flex items-center gap-10 text-2xl text-[#163A34]'>
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
            </div>
        </div>
    </div>
  )
}

export default RecipesDetailed