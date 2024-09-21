import { Route, Routes } from "react-router-dom";

import './App.css'

import Home from './page/Home';
import Company from './page/Company';
import Browse from './page/Browse';
import Blog from './page/Blog';
import Navigation from './component/Navigation';
import Banner from './component/Banner';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import ScrollToTopBtn from './component/ScrollToTopBtn';
import Login from './page/Login';
import Register from './page/Register';
import Post from './page/Post';

function App() {

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
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/blog/post/:id' element={<Post/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
