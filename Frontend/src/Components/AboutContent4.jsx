import React from 'react'
import { motion } from 'framer-motion'

const AboutContent4 = () => {
  return (
    <div className="w-full bg-black py-5 px-6 md:px-16">
      {/* OUR VISIONS Heading (Left-aligned) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-left"
      >
        <h1 className="text-yellow-500 text-5xl md:text-7xl font-bold uppercase leading-tight ">
          CORE
        </h1>
        <p className="text-white text-5xl md:text-7xl font-bold uppercase relative inline-block leading-tight">
          VALUES
          
        </p>
      </motion.div>
    </div>
  )
}

export default AboutContent4;
