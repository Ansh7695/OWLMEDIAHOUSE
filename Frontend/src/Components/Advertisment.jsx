import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Advertisement = () => {
  const workflowContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  
  const workflowSections = [
    {
      title: "Concept",
      description: "We believe that a strong marketing concept is the foundation of any successful campaign. Whether it's a new product launch, a brand awareness campaign, or a lead generation effort."
    },
    {
      title: "Budget",
      description: "The budget is an essential part of any successful campaign. It helps in determining the financial resources required for the execution of the strategy, ensuring that the goals are met within a controlled budget framework."
    },
    {
      title: "Development",
      description: "We intend to work with you every step of the way to guarantee that your campaign functions effectively. We will handle all areas of your brand's social media development, from writing captivating prose to creating eye-catching images."
    },
    {
      title: "Result",
      description: "Helping you accomplish your company goals—whether they be raising sales, creating leads, raising visibility, or something else entirely—is our ultimate goal. Our goal is to provide quantifiable, observable outcomes that you can examine and evaluate."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const sectionMiddle = rect.top + rect.height / 2;
          
          // Check if section is in the middle of viewport
          if (sectionMiddle >= windowHeight * 0.4 && sectionMiddle <= windowHeight * 0.6) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const cards = [
    { icon: assets.icon1, title: "Social Media\nManagement", gradient: "from-purple-500 via-pink-500 to-red-500" },
    { icon: assets.icon2, title: "Ads and\nCampaign", gradient: "from-blue-500 via-cyan-500 to-teal-500" },
    { icon: assets.icon3, title: "Search Engine\nOptimization", gradient: "from-green-500 via-emerald-500 to-lime-500" },
    { icon: assets.icon4, title: "Brand Identity", gradient: "from-yellow-500 via-orange-500 to-red-500" },
    { icon: assets.icon5, title: "UI and UX Design", gradient: "from-indigo-500 via-purple-500 to-pink-500" },
    { icon: assets.icon6, title: "Web Development", gradient: "from-cyan-500 via-blue-500 to-indigo-500" }
  ];

  return (
    <div className="w-full bg-black">
      {/* Hero Section - Fixed Height */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-12">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase leading-tight mb-8"
        >
          TAILORED SOLUTIONS FOR EVERY BUSINESS <br />
          <span className="text-yellow-400">BIG OR SMALL</span>
        </motion.h1>

        {/* Cards Grid - Smaller Cards */}
        <div className="w-full max-w-9xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4 mb-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`w-full h-56 rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-300 bg-gradient-to-br ${card.gradient} relative group backdrop-blur-sm border border-white/10 hover:scale-105`}
            >
              {/* White Card Content */}
              <div className="absolute inset-[2px] bg-white rounded-3xl p-4 flex flex-col justify-between">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 mt-5 object-cover mb-2 rounded-md mx-auto"
                />
                <h2 className="text-sm md:text-base font-semibold whitespace-pre-line text-center leading-tight mb-5">
                  {card.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        /* Button */}
          <motion.a
            href="/services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full transition-all duration-300 hover:bg-white hover:scale-105 text-center"
            aria-label="View All Services"
          >
            View All Services
          </motion.a>
              </div>

              {/* Workflow Section - Scroll-triggered */}
      <div className="min-h-screen py-20 px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold uppercase mb-20 text-center"
        >
          CUSTOMIZED WORKFLOW
        </motion.h2>

        {/* Workflow Timeline Container */}
        <div ref={workflowContainerRef} className="relative max-w-6xl mx-auto">
          <div className="flex gap-12 md:gap-16">
            {/* Left Side: Line and Balls */}
            <div className="relative flex-shrink-0 w-6">
              {/* Vertical Line */}
              <div className="absolute left-3 top-0 bottom-0 w-1 bg-gray-700" />
              
              {/* Interactive Balls */}
              {workflowSections.map((_, index) => {
                const isActive = activeSection === index;
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      if (!sectionRefs.current[index]) {
                        sectionRefs.current[index] = el;
                      }
                    }}
                    className="absolute left-0"
                    style={{ 
                      top: index === 0 ? '10%' : 
                           index === 1 ? '35%' : 
                           index === 2 ? '60%' : '85%'
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.5 : 1,
                        backgroundColor: isActive ? '#facc15' : '#6b7280',
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 rounded-full shadow-lg"
                      style={{
                        boxShadow: isActive ? '0 0 20px rgba(250, 204, 21, 0.6)' : 'none'
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Side: Content */}
            <div className="flex-1">
              {workflowSections.map((section, index) => (
                <motion.div
                  key={index}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0.3, x: 50 }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="min-h-[40vh]"
                >
                  <div
                    className={`p-6 md:p-8 rounded-2xl border transition-all duration-500 ${
                      activeSection === index
                        ? 'bg-yellow-400/10 border-yellow-400/30 shadow-xl'
                        : 'border-transparent'
                    }`}
                  >
                    <h3 
                      className={`text-3xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
                        activeSection === index ? 'text-yellow-400' : 'text-white'
                      }`}
                    >
                      {section.title}
                    </h3>
                    <p 
                      className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 ${
                        activeSection === index ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {section.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;