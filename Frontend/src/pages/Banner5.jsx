import React from 'react'
import { motion } from 'framer-motion'

const Banner5 = () => {
  return (
    <div className="w-screen h-auto min-h-[300px] bg-black flex flex-col md:flex-row items-center justify-between p-6 relative">
        {/* Left Side (Number & Heading) */}
        <div className="w-full md:w-1/3 h-auto min-h-[250px] flex flex-col items-center justify-center text-white text-lg font-bold mx-5 relative overflow-hidden">
            {/* Large "03" - Increased Size */}
            <motion.h1 
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-8xl md:text-[12rem] lg:text-[14rem] font-bold opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ color: "rgb(199, 159, 13)" }}>
                03
            </motion.h1>
            
            {/* "APPEARANCE" - Centered in the middle of "03" */}
            <motion.h2 
                initial={{ opacity: 0, translateX: "-50%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold bg-black px-8 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                APPEARANCE
            </motion.h2>
        </div>

        {/* Right Side (Paragraph) */}
        <div className="w-full md:w-[49%] h-auto min-h-[120px] flex flex-col items-center justify-center text-white text-lg text-center md:text-left mx-5 gap-2">
            <motion.p 
                initial={{ opacity: 0, translateX: "-50%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-base md:text-2xl p-2">
                Once we have a clear picture of where your brand stands, we'll help you create a strong visual identity that communicates your brand's message clearly. From designing your logo, choosing your color palette, to selecting the right fonts and writing a catchy tagline, we'll make sure every visual element speaks to your audience in the best way possible.

            </motion.p>
        </div>
    </div>
  )
}

export default Banner5;