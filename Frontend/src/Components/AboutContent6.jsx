import React from 'react'
import { motion } from 'framer-motion'

const AboutContent6 = () => {
  return (
    <div className=" w-screen h-auto min-h-[300px] bg-black flex flex-col md:flex-row items-center justify-between p-6 relative ">
        {/* Left Side (Number & Heading) */}
        <div className="w-full md:w-1/3 h-auto min-h-[120px] flex flex-col items-center justify-center text-white text-lg font-bold mx-5 relative overflow-hidden ">
            {/* Large "03" - Positioned Closer */}
            <motion.h1 
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-bold opacity-50 absolute top-[-4%]  left-1/2 transform -translate-x-1/2"
                style={{ color: "rgb(199, 159, 13)" }}>
                02
            </motion.h1>
            
            {/* Overlapping "APPROACH" - Adjusted for Better Spacing */}
            <motion.h2 
                initial={{ opacity: 0, translateX: "-50%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-4xl md:text-3xl font-bold bg-black px-2 text-center absolute top-[55%] md:top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
                STRONGER <br />TOGETHER
            </motion.h2>
        </div>

        {/* Right Side (Paragraph) */}
        <div className="w-full md:w-[70%] h-auto min-h-[120px] flex flex-col items-center justify-center text-white text-lg text-center md:text-left mx-5 gap-2">
            <motion.p 
                initial={{ opacity: 0, translateX: "-50%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-base md:text-3xl p-2">
                A comprehensive evaluation of a company’s online marketing activities, analyzing the effectiveness of their strategies across various digital channels like websites, social media, email marketing and paid advertising, to identify the areas for improvement and potential growth opportunities.
            </motion.p>
        </div>
    </div>
  )
}

export default AboutContent6;
