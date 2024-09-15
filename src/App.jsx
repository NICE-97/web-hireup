import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'

import Home from './page/Home';
import Company from './page/Company';
import Browse from './page/Browse';
import Navigation from './component/Navigation';
import Banner from './component/Banner';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import ScrollToTopBtn from './component/ScrollToTopBtn';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
      <Banner/>
      <div className='sticky top-0 left-0 right-0 z-20'>
        <Navigation/>
      </div>
      <ScrollToTop/>
      <ScrollToTopBtn/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/browse' element={<Browse/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
