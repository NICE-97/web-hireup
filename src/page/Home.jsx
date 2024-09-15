import React from 'react'
import Banner from '../component/Banner'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer';
import Testimonial from '../section/home/Testimonial';
import ExploreJob from '../section/home/ExploreJob';
import Blog from '../section/home/Blog';
import Feature from '../section/home/Feature';
import Companies from '../section/home/Companies';
import ExploreLatestJob from '../section/home/ExploreLatestJob';
import Header from '../section/home/Header'

function Home() {
  return (
    <div>
        <Header/>
        <ExploreLatestJob/>
        <Companies/>
        <Feature/>
        <Testimonial/>
        <Blog/>
        <ExploreJob/>
    </div>
  )
}

export default Home
