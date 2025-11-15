import React from 'react'
import { motion } from 'framer-motion'

const CareerContent1 = () => {
    return (
        <div className="flex flex-col w-full p-10 bg-black justify-center items-center">
            <div className="flex flex-col md:flex-row w-full max-w-5xl justify-center items-center">
                {/* Left Side - Heading */}
                <div className="flex-2 md:mr-4 text-center md:text-left">
                    <h1 className="text-4xl md:text-8xl font-bold text-white">WELCOME TO OWL MEDIA HOUSE</h1>
                </div>

                {/* Right Side - Paragraph */}
                <div className="flex-1 mt-4 md:mt-0">
                    <p className="text-base md:text-lg text-white text-center md:text-left">
                        We have helped 100+ industry leaders in the last 5 years. We have been behind some of the major brands that control the economy today.
                    </p>
                </div>
            </div>


            {/* New Heading Below */}
            <div className="w-full mt-15 text-center">
                <h2 className="text-3xl md:text-6xl font-bold text-yellow-500">
                    JOIN OUR HANDS WITH OWL MEDIA HOUSE
                </h2>
            </div>


            {/* New White Container with Heading and Button */}
            <motion.div
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-5xl mx-auto min-h-[300px] bg-white p-6 sm:p-10 mt-6 sm:mt-10 text-center flex flex-col items-center justify-center rounded-3xl"
            >
                <h3 className="text-xl sm:text-4xl font-bold text-black mb-4 sm:mb-6 leading-[1.3]">
                    BECOME A PART OF OUR COMMUNITY AND THE THRIVING ECOSYSTEM
                </h3>
                <button className="px-8 sm:px-12 py-3 sm:py-4 mt-4 sm:mt-5 border-b-4 sm:border-b-8 border-yellow-400 bg-black text-white font-semibold text-lg sm:text-2xl rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                    Apply Now
                </button>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, translateX: "100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full bg-gray-100 p-6 sm:p-10 mt-10 min-h-[450px] flex justify-center items-center"
            >
                {/* Flex container with responsive layout */}
                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 w-full max-w-5xl">
                    {/* Left side - Heading at center for mobile, left for desktop */}
                    <div className="flex-1 text-center sm:text-start">
                        <h3 className="text-3xl sm:text-6xl font-bold text-black leading-[1.2]">
                            <span className="text-yellow-500">WORK</span> <br className="hidden sm:block" /> PHILOSOPHY
                        </h3>
                    </div>

                    {/* Right side - Heading, paragraph, and button */}
                    <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-start">
                        <h3 className="text-xl sm:text-5xl font-semibold text-black mb-4">
                            How We Recruit & <br className="hidden sm:block" /> Collaborate
                        </h3>
                        <p className="text-md sm:text-lg text-gray-700 mb-6">
                            We hire based on your passion for promoting change, growth, and innovation rather than resumes or CVs. We appreciate your tool proficiency and mental clarity. OUR EMPLOYMENT CATEGORIES ARE BELOW.
                        </p>
                        <button className="px-8 sm:px-12 py-3 sm:py-4 border-b-4 sm:border-b-8 border-yellow-400 bg-black text-white font-semibold text-lg sm:text-2xl rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                            Apply Now
                        </button>
                    </div>
                </div>
            </motion.div>



        </div>
    )
}

export default CareerContent1
