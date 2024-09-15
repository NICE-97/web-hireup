import React, { useState } from 'react'
import Banner from '../component/Banner'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'

import Header from '../section/company/Header'
import About from '../section/company/About';
import OurTeam from '../section/company/OurTeam';
import Questions from '../section/company/Questions';
import Contact from '../section/company/Contact';

function Company() {

  

  return (
    <div>
        <Header/>
        <About/>
        <OurTeam/>
        <Questions/>
        <Contact/>
    </div>
  )
}

export default Company