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
  return (
    <div>
        <div key={recipe.id}>
            <h1>{recipe.title}</h1>
        </div>
    </div>
  )
}

export default RecipesDetailed