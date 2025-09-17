import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Recipes from './pages/Recipes'
const App = () => {
  return (
    <div className='mx-auto'>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>

      
    </div>
  )
}

export default App