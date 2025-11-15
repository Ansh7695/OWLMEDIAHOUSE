import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full h-[550px] sm:h-[620px]  md:h-[720px] lg:h-[750px] bg-gray-200 relative pt-12 flex items-center justify-center">
      {/* Container with responsive flex direction */}
      <div className="w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-16 gap-6 lg:gap-10 mt-20 lg:mt-10">
        
        {/* Left-side Heading with Increased Width */}
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }} 
          whileInView={{ opacity: 1, translateX: "0" }} 
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }} 
          viewport={{ once: true }}
          className="w-full lg:w-3/5 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-gray-700" >
            BOOST YOUR BRAND WITH WEB DEV & MARKETING
          </h1>
        </motion.div>

        {/* Right-side Image */}
        <motion.div className="w-full lg:w-2/5 flex justify-center">
          <motion.img
            src={assets.owl3}
            alt="Banner"
            className="w-[250px] sm:w-[300px] md:w-[300px] lg:w-[400px] h-auto object-cover"
            initial={{ opacity: 0, scale: 1 }} 
            animate={{ opacity: 1, scale: [1, 1.1, 1] }} 
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }} 
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
