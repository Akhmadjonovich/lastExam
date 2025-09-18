import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Recipes = ({data, loading}) => {
  
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [openPrep, setOpenPrep] = useState(false);
  const [openCook, setOpenCook] = useState(false);
  const [search, setSearch] = useState("");

  
  // search
    
  const filtered = data.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.overview.toLowerCase().includes(search.toLowerCase())
  );

  
  const filteredData = data.filter((r) => {
    let prepOk = prepTime ? r.prepMinutes <= Number(prepTime) : true;
    let cookOk = cookTime ? r.cookMinutes <= Number(cookTime) : true;
    return prepOk && cookOk;
  });

  
  const Searched = search.trim() !== "";
  const finalList = Searched ? filtered : filteredData;
  
  const times = [0, 5, 10, 15, 20];

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="h-16 w-16 border-4 border-[#FE9F6B] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-7xl max-2xl:text-6xl max-xl:text-5xl max-lg:text-4xl text-center my-10 font-bold">
        Explore our simple, healthy recipes
      </h2>
      <p className="text-3xl max-xl:text-2xl text-center text-[#395852] px-130 max-lg:px-90 max-md:px-50 max-sm:px-10 max-sm:text-xl">
      Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.
      </p>

      
      <section className="flex max-sm:flex-col gap-5 justify-between mx-10 max-sm:mx-5 mt-20 my-10 relative">
        <div className='flex max-sm:flex-col gap-10 max-md:gap-5 max-sm:w-full'>
        
          <div 
            className="relative inline-block max-sm:w-full"
            onMouseEnter={() => setOpenPrep(true)}
            onMouseLeave={() => setOpenPrep(false)} 
          >
            <button className="px-5 w-full justify-center  flex items-center py-1 h-18 max-lg:h-15 text-2xl max-md:text-xl  border border-transparent hover:border-black rounded-md bg-white shadow">
              Max Prep Time <img src="/images/Down.svg"  alt="" />
            </button>
            
            {openPrep && (
              <div className="absolute left-0 mt-0.5 text-2xl max-md:text-xl w-70 bg-white rounded-xl  shadow-xl z-10">
                {times.map((time) => (
                  <label
                    key={time}
                    className="flex items-center px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="radio"
                      value={time}
                      checked={prepTime === String(time)}
                      onChange={(e) => setPrepTime(e.target.value)}
                    />
                    {time} minutes
                  </label>
                ))}
                <button
                  onClick={() => setPrepTime("")}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Clear
                </button>
              </div>
            )}
          </div>


        
          <div 
            className="relative inline-block "
            onMouseEnter={() => setOpenCook(true)}
            onMouseLeave={() => setOpenCook(false)}
              
          >
            <button className="px-5 py-1 flex justify-center w-full items-center h-18 max-lg:h-15 border  border-transparent hover:border-black text-2xl max-md:text-xl rounded-md bg-white shadow">
              Max Cook Time <img src="/images/Down.svg"  alt="" />
            </button>

            {openCook && (
              <div className="absolute left-0 mt-1 w-70 text-2xl max-md:text-xl bg-white rounded-xl shadow-xl z-10">
                {times.map((time) => (
                  <label
                    key={time}
                    className="flex items-center px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="radio"
                      value={time}
                      checked={cookTime === String(time)}
                      onChange={(e) => setCookTime(e.target.value)}
                    />
                    {time} minutes
                  </label>
                ))}
                <button
                  onClick={() => setCookTime("")}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

        
        </div>

        <div>
            <form className='bg-white flex max-sm:w-full p-5 max-lg:p-3 border border-transparent hover:border-black focus:border-black gap-2 w-md max-md:w-sm rounded-2xl '>
                <img src="/images/Search.svg" alt="" />
                <input 
                 type="text"
                 value={search}
                 onChange={e => setSearch(e.target.value)} 
                 className ='text-2xl w-full outline-none' placeholder='Search by name or ingredient…'/>

            </form>
        </div>
      </section>

      
      <section className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mx-10 max-sm:mx-5 gap-20 max-xl:gap-10 max-md:gap-20">
        {finalList.map((r) => (
          <div
            key={r.id}
            className="relative bg-white max-md:w-full rounded-2xl h-[103%] pb-10 max-sm:pb-15 mt-0  max-lg:mt-5 max-md:mt-0"
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
      </section>
    </div>
  );
};

export default Recipes;
