import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Eeshan Jain",
    title: "Software Engineer",
    review: "These folks are not a marketing agency, they are family to me!"
  },
  {
    name: "Sushant Bhuchar",
    title: "UI/UX Designer",
    review: "It's been more than 2 years working with them, they understand my business better than myself now"
  },
  {
    name: "Michelle",
    title: "Entrepreneur",
    review: "Best in class creatives and that too at such a fast speed. Clearly the best folks"
  },
  {
    name: "David Chen",
    title: "Marketing Director",
    review: "Outstanding service and incredible attention to detail. They truly care about results!"
  },
  {
    name: "Sarah Williams",
    title: "Business Owner",
    review: "Professional, creative, and always deliver on time. Highly recommend!"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getCardPosition = (index) => {
    const diff = index - current;
    const total = testimonials.length;
    
    // Normalize position to be between -total/2 and total/2
    let pos = diff;
    if (pos > total / 2) pos -= total;
    if (pos < -total / 2) pos += total;
    
    return pos;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Heading */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black text-center leading-tight">
          SEE WHAT INDUSTRY{" "}
          <span className="text-yellow-500">LEADERS</span> SAY ABOUT US
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
        {/* Cards Container */}
        <div className="relative w-full h-[280px] md:h-[320px] flex items-center justify-center overflow-visible">
          {testimonials.map((t, index) => {
            const position = getCardPosition(index);
            const isCenter = position === 0;
            const absPos = Math.abs(position);
            
            // Calculate transforms for horizontal carousel effect
            let translateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;
            
            if (isMobile) {
              if (isCenter) {
                translateX = 0;
                scale = 1;
                opacity = 1;
                zIndex = 20;
              } else {
                translateX = position > 0 ? 400 : -400;
                scale = 0.85;
                opacity = 0;
                zIndex = 5;
              }
            } else {
              // Desktop: side-by-side overlap effect with 1/4 width showing
              translateX = position * 190; // 350 * 0.25 = 87.5px (1/4 of card width)
              scale = isCenter ? 1.05 : 1 - (absPos * 0.05);
              opacity = isCenter ? 1 : Math.max(0.15, 1 - (absPos * 0.35));
              zIndex = 20 - absPos;
            }

            const blurAmount = isCenter ? 0 : Math.min(absPos * 2, 8);

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  left: '50%',
                  marginLeft: '-175px', // Half of card width
                  pointerEvents: absPos <= 2 ? 'auto' : 'none',
                  filter: `blur(${blurAmount}px)`
                }}
              >
                <div className={`bg-white rounded-3xl shadow-xl w-[350px] h-[240px] flex flex-col justify-center items-center text-center border-2 transition-all duration-700 overflow-hidden ${
                  isCenter ? 'border-yellow-500 shadow-2xl' : 'border-gray-200'
                }`}>
                  <div className="p-8 flex flex-col justify-center items-center w-full h-full">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg transition-all duration-700 flex-shrink-0 ${
                      isCenter ? 'bg-yellow-500 scale-110' : 'bg-yellow-400'
                    }`}>
                      <span className="text-white text-2xl font-bold">{t.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis w-full">{t.name}</h3>
                    <p className="text-base italic text-gray-700 leading-relaxed line-clamp-3">
                      "{t.review}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black hover:bg-yellow-500 p-4 rounded-full shadow-2xl z-30 transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black hover:bg-yellow-500 p-4 rounded-full shadow-2xl z-30 transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight className="w-7 h-7 text-white" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index 
                ? "w-8 h-3 bg-yellow-500" 
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        * { font-family: 'EB Garamond', serif !important; }
        h1,h2,h3,h4,h5,h6,li,p,a { font-family: 'Bookman Old Style', serif !important; }
      `}</style>
    </div>
  );
};

export default Testimonials;