import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Advertisement1 = () => {
  return (
    <div className='relative'>
      <div className="h-screen flex flex-col">
        {/* Heading Container */}
        

        <div className="p-4 md:p-8 lg:px-9">
          <motion.h1
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center text-black text-2xl md:text-5xl lg:text-8xl font-bold leading-tight lg:text-start"
          >
            USING DESIGN AND <br />
            <span className="text-orange-500">MARKETING</span> TO BRING <br />
            BRANDS TO <span className="text-orange-500">LIFE</span>
          </motion.h1>
        </div>

        {/* Paragraph Container */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:mt-1 text-gray-700 text-md lg:text-2xl max-w-6xl text-start mx-auto p-5 lg:p-0"
        >
          Owl Media House, an Indian agency for integrated digital marketing. Our specialty is assisting companies in
          creating marketing plans that work and produce outcomes. Personalized solutions that address each client's
          particular demands are the focus of our team of seasoned professionals.
        </motion.p>

        <div className="flex justify-center items-center w-full mt-10 px-4">
          <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
            {/* Left Side - Image */}
            <div className="w-[65%] md:w-1/2 h-[300px]  md:h-[400px]">
              <motion.img
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                src={assets.office}
                alt="Marketing"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Right Side - Text (Centered) */}
            <div className="w-full md:w-1/2 bg-white flex flex-col items-center text-center md:items-start md:text-left justify-center gap-6 p-6 md:p-8 lg:gap-15">
              <div>
                <motion.h2
                  initial={{ opacity: 0, translateX: "100%" }}
                  whileInView={{ opacity: 1, translateX: "0" }}
                  transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl lg:text-8xl font-bold text-yellow-500 "
                >
                  5+
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, translateX: "100%" }}
                  whileInView={{ opacity: 1, translateX: "0" }}
                  transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-base md:text-2xl text-gray-800"
                >
                  Years of Experience
                </motion.p>
              </div>

              <div>
                <motion.h2
                  initial={{ opacity: 0, translateX: "100%" }}
                  whileInView={{ opacity: 1, translateX: "0" }}
                  transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl lg:text-8xl font-bold text-yellow-500"
                >
                  50+
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, translateX: "100%" }}
                  whileInView={{ opacity: 1, translateX: "0" }}
                  transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-base md:text-2xl text-gray-800"
                >
                  Happy Clients
                </motion.p>
              </div>

              <div>
                <motion.h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-yellow-500">
                  500+
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, translateX: "100%" }}
                  whileInView={{ opacity: 1, translateX: "0" }}
                  transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-base md:text-2xl text-gray-800"
                >
                  Campaigns Executed
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement1;
