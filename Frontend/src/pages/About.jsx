import React from 'react'
import AboutContent1 from '../Components/AboutContent1'
import AboutContent2 from '../Components/AboutContent2'
import AboutContent3 from '../Components/AboutContent3'
import AboutContent4 from '../Components/AboutContent4'
import AboutContent5 from '../Components/AboutContent5'
import AboutContent6 from '../Components/AboutContent6'
import AboutContent7 from '../Components/AboutContent7'
import Testimonials from './Tesiminials'
import AboutHome from './Home/AboutHome'
import AboutBanner from '../Components/AboutBanner'

import Scroller from './Image2/Scroller'

const About = () => {
  return (
    <>
    <AboutBanner/>
    <AboutContent1/>
    <AboutContent2/>
    <AboutContent3/>
    <AboutContent4/>
    <AboutContent5/>
    <AboutContent6/>
    <AboutContent7/>
    <AboutHome/>
    <Scroller/>
    <Testimonials/>
    </>
  )
}

export default About