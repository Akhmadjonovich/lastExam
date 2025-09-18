import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Recipes from './pages/Recipes'
import RecipesDetailed from './pages/RecipesDetailed'
import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  let urlPoint = "https://recipes-api-3o3s.onrender.com/recipes";

  useEffect(() => {
    axios
      .get(urlPoint)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setLoading(false);
      });
  }, [urlPoint]);


  return (
    <div className='mx-auto'>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes data={data} loading={loading} />} />
        <Route path="/recipes/:id" element={<RecipesDetailed data={data} loading={loading} />} />
      </Routes>

      
    </div>
  )
}

export default App