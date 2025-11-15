import React from 'react'
import { useState,useEffect } from 'react';
import { assets } from '../assets/assets';

const Image3 = () => {

    const [scrollY, setScrollY] = useState(0);
    
      // Handle scrolling
      useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
     <div
        className="w-full h-screen bg-cover bg-fixed bg-center flex items-center"
        style={{
          backgroundImage: `url(${assets.image3})`, // Use a third image
          backgroundPosition: `center ${scrollY * 0.3}px`,
        }}
      >
        <h2 className="text-[6rem] md:text-[10rem] text-gray-300 text-left pt-24 pb-12 pl-8 md:pl-16 shadow-lg">
          Third Frame
        </h2>
      </div> 
  )
}

export default Image3