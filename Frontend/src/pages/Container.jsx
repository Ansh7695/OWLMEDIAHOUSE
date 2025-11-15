import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Container = () => {
    return (
        <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-10 md:px-10 py-10 md:h-[702px]"
            style={{ backgroundColor: "rgb(232, 187, 24)" }}
        >
            {/* Left Side (More Width on Desktop) */}
            <div className="w-full md:w-2/3 text-center md:text-left">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-bold mb-6 md:mb-8"
                >
                    INNOVATIVE <span className='text-black'>STRATEGIES</span> TO ELEVATE YOUR <span className='text-black'>BRAND</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-lg md:text-2xl mt-3 md:mt-4"
                >
                    At Owl Media House, we blend creativity and innovation to help your brand stand out in a competitive market. As a top branding and digital marketing agency, we craft unique strategies that captivate audiences and drive real engagement. In today’s ever-evolving digital landscape, success comes from bold ideas, innovative marketing solutions, and data-driven strategies—and that’s exactly what we deliver.
                </motion.p>
            </div>

            {/* Right Side (Icon with Flex Adjustments) */}
            <div className="w-full md:w-1/3 flex justify-center items-center mt-6 md:mt-0">
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src={assets.icon}
                    className="w-24 h-24 md:w-full md:h-full bg-transparent mix-blend-multiply"
                />
            </div>
        </div>
    )
}

export default Container;
