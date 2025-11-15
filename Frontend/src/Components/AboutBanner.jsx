import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between bg-gray-100 h-auto lg:h-[700px] min-h-[450px] py-16 lg:py-24 px-6 sm:px-16 mt-10 lg:mt-20">
      
      {/* Background Logo */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-opacity-50 bg-opacity-50 opacity-15 bg-[length:10%] lg:bg-[length:30%] bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.owl3})`,
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Left Side - Heading and About Paragraph (Hidden on Mobile) */}
      <div className="lg:w-2/3 space-y-10 lg:space-y-20 hidden lg:flex flex-col items-center">
        <motion.h1 
        initial={{ opacity: 0, rotateY: 90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center font-bold text-2xl md:text-4xl leading-[1.4]">
          WE ARE YOUR TRUSTED PARTNER IN DIGITAL MARKETING & WEB DEVELOPMENT: 
          PURSUING INNOVATION, CREATING IMPACT, AND BUILDING BRANDS
        </motion.h1>

        {/* ABOUT paragraph below the heading */}
        <motion.p 
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: "0" }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center font-bold text-8xl md:text-9xl"
        >
          ABOUT US
        </motion.p>
      </div>

      {/* Centered Paragraph (Only visible on Mobile) */}
      <motion.p 
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: "0" }}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:hidden flex-grow flex items-center justify-center text-center font-bold text-6xl"
      >
        ABOUT US
      </motion.p>

      {/* Right Side - Image (Hidden on Mobile) */}
      <div className="hidden lg:block md:w-1/3 mt-8 md:mt-0">
        <motion.img
          initial={{ opacity: 0, translateY: "-100%" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          src={assets.blackOwl}
          alt="Service Banner"
          className="w-[250px] sm:w-[350px] max-w-xl md:max-w-2xl mx-auto h-[400px] md:h-1/2"
        />
      </div>
    </div>
  );
};

export default AboutBanner;
