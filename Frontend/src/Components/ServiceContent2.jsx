import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const ServiceContent2 = () => {
    return (
        <div className="w-screen h-auto  flex flex-col items-center pt-16 md:mb-0">

            {/* Card Container with Increased Height */}
            <motion.div 
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-yellow-500 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center gap-8 w-11/12 md:w-[850px] mt-10">
                {/* White Card */}
                <div className="bg-white md:border-l-8 md:border-b-8 md:border-black rounded-xl p-6 shadow-lg w-[220px] md:w-[260px] h-[140px] md:h-[160px] flex flex-col justify-center mb-6 md:mb-0 md:absolute md:-top-8 md:left-4">
                    <img
                        src={assets.icon1}
                        alt="Icon"
                        className="mb-4 w-15 h-15"
                    />
                    <h2 className="text-black font-bold text-lg md:text-xl">
                        OPTIMIZED MEDIA STRATEGY

                    </h2>
                </div>

                {/* List Items */}
                <div className="ml-[0px] md:ml-[280px] -mt-7 md:mt-0">
                    <p className="text-black text-2xl lg:text-3xl font-medium flex items-center">
                        <span className="mr-2 font-bold">➜</span> Social media ads
                    </p>
                    <p className="text-black text-2xl lg:text-3xl font-medium flex items-center">
                        <span className="mr-2 font-bold">➜</span> Google ads
                    </p>
                    <p className="text-black text-2xl lg:text-3xl font-medium flex items-center ">
                        <span className="mr-2 font-bold">➜</span> Programmatic Ads
                    </p>
                    <p className="text-black text-2xl lg:text-3xl font-medium flex items-center">
                        <span className="mr-2 font-bold">➜</span> Paid Listing Management
                    </p>
                    <p className="text-black text-2xl lg:text-3xl font-medium flex items-center">
                        <span className="mr-2 font-bold">➜</span> Marketpace Ads Management
                    </p>

                </div>
            </motion.div>

            {/* Card Container with Increased Height */}
            <motion.div 
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-yellow-500 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center gap-8 w-11/12 md:w-[850px] mt-15 mb-20">
                {/* White Card */}
                <div className="bg-white md:border-l-8 md:border-b-8 md:border-black rounded-xl p-6 shadow-lg w-[220px] md:w-[260px] h-[140px] md:h-[160px] flex flex-col justify-center mb-6 md:mb-0 md:absolute md:-top-8 md:left-4">
                    <img
                        src={assets.icon5}
                        alt="Icon"
                        className="mb-4 w-15 h-15"
                    />
                    <h2 className="text-black font-bold text-lg md:text-xl">
                        OWL MEDIA HOUSE PRODUCTION

                    </h2>
                </div>

                {/* List Items */}
                <div className="ml-[0px] md:ml-[280px] -mt-7 md:mt-0">
                    <p className="text-black text-2xl md:text-3xl font-medium flex items-center">
                        <span className="mr-2 font-bold">➜</span> Ads Production
                    </p>
                    <p className="text-black text-2xl md:text-3xl font-medium flex items-center">
                        <span className="mr-2 font-bold">➜</span> Video shoots and editing
                    </p>
                    <p className="text-black text-2xl md:text-3xl font-medium flex items-center">
                        <span className="mr-2 font-bold">➜</span> Product shoot
                    </p>

                </div>
            </motion.div>
        </div>
    );
};

export default ServiceContent2;
