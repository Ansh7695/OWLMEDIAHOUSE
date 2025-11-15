import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const AboutContent3 = () => {
  return (
    <div 
      className="w-full h-auto flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 md:px-10 py-10 md:h-[650px]"
      style={{ backgroundColor: "rgb(232, 187, 24)" }}
    >
      {/* Left Side (More Width on Desktop) */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold mb-6 md:mb-8"
        >
          ON A <span className='text-black'>MISSION</span> TO <br />DELIVER THE <span className='text-black'>BEST</span>
        </motion.h1>

        {/* Paragraph Content */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl mt-3 md:mt-4"
        >
          Our mission at OWL MEDIA HOUSE is to be the largest marketing agency globally, offering the widest variety of services to our clients. We are committed to continually expanding our service offerings to stay ahead of the latest trends and technologies in marketing and to provide our clients with the highest level of service and support.
        </motion.p>
      </div>

      {/* Right Side (Icon with Flex Adjustments) */}
      <div className="w-full md:w-1/3 flex justify-center items-center mt-6 md:mt-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          src={assets.idea}
          className="w-24 h-24 md:w-full md:h-full bg-transparent mix-blend-multiply"
        />
      </div>
    </div>
  )
}

export default AboutContent3;
