import React from "react";
import { motion } from "framer-motion";

const AboutContent7 = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-black px-4">
      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-yellow-500 rounded-2xl max-w-4xl w-[90%] h-auto md:h-[500px] flex flex-col justify-center items-center p-6 md:p-10"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-black text-4xl md:text-7xl font-extrabold uppercase text-center leading-tight md:leading-[1.5]"
        >
          Ready &nbsp; to <br />
          <span className="block md:inline">Collaborate</span>
        </motion.h1>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mt-6 md:mt-8 w-full max-w-sm md:max-w-none"
        >
          {/* See Our Work Button */}
          <button
  onClick={() =>
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }
  className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 border-2 border-black hover:bg-white hover:text-black transition duration-300 w-full md:w-auto"
>
  SEE OUR WORK →
</button>

          {/* Talk@BM Button */}
          <button
  onClick={() =>
    window.open("https://wa.me/919045922719", "_blank")
  }
  className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 border-2 border-black hover:bg-black hover:text-white transition duration-300 w-full md:w-auto"
>
  TALK TO US →
</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutContent7;
