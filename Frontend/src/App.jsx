import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Career from './pages/Career'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Blogs from './pages/Blogs'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        {/* Add your routes here */}
        <Route path='/' element={<HomePage/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path='/career' element={<Career/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/policy' element={<PrivacyPolicy/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App