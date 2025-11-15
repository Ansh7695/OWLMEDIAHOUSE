import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const ServiceContent3 = () => {
    return (
        <div className="w-screen h-auto bg-black flex flex-col items-center pt-16 md:mb-0">

            {/* Card Container with Increased Height */}
            <motion.div 
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-yellow-500 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center gap-8 w-11/12 md:w-[800px] mt-10">
                {/* White Card */}
                <div className="bg-white md:border-l-8 md:border-b-8 md:border-black rounded-xl p-6 shadow-lg w-[220px] md:w-[260px] h-[140px] md:h-[160px] flex flex-col justify-center mb-6 md:mb-0 md:absolute md:-top-8 md:left-4">
                    <img
                        src={assets.icon1}
                        alt="Icon"
                        className="mb-4 w-15 h-15"
                    />
                    <h2 className="text-black font-bold text-lg md:text-xl">
                        SERP RANKING
                    </h2>
                </div>

                {/* List Items */}
                <div className="ml-[0px] md:ml-[280px] -mt-7 md:mt-0">
                    <p className="text-black text-2xl md:text-3xl font-medium flex items-center">
                        <span className="mr-2 font-bold">➜</span> E-commerce strategy and execution
                    </p>
                    <p className="text-black text-2xl md:text-3xl font-medium flex items-center mt-2">
                        <span className="mr-2 font-bold">➜</span> Lead generation
                    </p>
                    <p className="text-black text-2xl md:text-3xl font-medium flex items-center mt-2">
                        <span className="mr-2 font-bold">➜</span>App installs
                    </p>
                    <p className="text-black text-2xl md:text-3xl font-medium flex items-center mt-2">
                        <span className="mr-2 font-bold">➜</span>Registration
                    </p>
                </div>
        </motion.div>

      
    </div >
  );
};

export default ServiceContent3;
