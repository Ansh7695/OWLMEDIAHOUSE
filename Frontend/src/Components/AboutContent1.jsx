import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const AboutContent1 = () => {
  return (
    <div className="w-full bg-black min-h-[400px] flex flex-col md:flex-row justify-center items-center px-6 md:px-16 py-10">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-2/5 flex justify-center md:pr-5 mb-8 md:mb-0">
        <motion.img 
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: "0" }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          src={assets.about} 
          alt="Image" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto"
        />
      </div>

      {/* Right Side - Text Content */}
      <motion.div 
        initial={{ opacity: 0, translateX: "100%" }}
        whileInView={{ opacity: 1, translateX: "0" }}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.35]">
          YOUR ONE STOP <br /> SHOP FOR <span className="text-yellow-400">360</span> DEGREE <br /> DIGITAL SOLUTIONS
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 text-white w-full sm:w-[90%] leading-[1.6]">
          We stand for Creativity, Passion, Innovation, Reliability, and Trust. Satisfying our customers while accepting ownership is of prime importance to us. We always ensure our customers are content with our services and results.
        </p>
      </motion.div>

    </div>
  );
};

export default AboutContent1;
