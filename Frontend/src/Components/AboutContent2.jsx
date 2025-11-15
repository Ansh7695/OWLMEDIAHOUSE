import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const AboutContent2 = () => {
  return (
    <div className="w-full bg-black">
      {/* OUR VISIONS Heading Section */}
      <div className="w-full flex justify-center items-center h-[20vh] px-6 sm:px-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-center">
          <h1 className="text-white text-4xl sm:text-6xl font-bold uppercase leading-tight">OUR</h1>
          <p className="text-yellow-400 text-4xl sm:text-6xl font-bold uppercase relative inline-block leading-tight">
            VISION
          </p>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <div className="w-full h-auto sm:h-[70vh] flex flex-col sm:flex-row justify-center items-center py-6 sm:py-0">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full sm:w-2/5 px-6 sm:pr-5 mb-6 sm:mb-0">
          <motion.img 
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src={assets.eye} alt="Image" className="max-w-[350px] sm:max-w-[500px] h-auto" />
        </div>
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center w-full sm:w-2/5 -ml-0 sm:-ml-18 px-6 sm:px-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-300 leading-[1.25] text-center">
            WE THRIVE TO TAKE IT <br />
            TO THE NEXT LEVEL
          </h1>
          <p className="text-lg sm:text-xl mt-3 text-white w-full sm:w-[90%] leading-[1.5] text-center">
            Our vision is to be the world's best advertising company for client retention, delivering innovative and effective solutions that exceed expectations and drive growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutContent2;
