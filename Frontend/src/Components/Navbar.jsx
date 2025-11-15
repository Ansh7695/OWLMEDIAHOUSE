import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100;
      
      if (currentScrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show navbar 
      if (currentScrollY > scrollThreshold) {
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // scroll event listener
    let timeoutId = null;
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 10);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-md'
    } ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-3 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.newset} alt="Logo" className="w-38 h-12 ml-2" />
        </div>

        {/* Desktop Menu (Increased Text Size) */}
        <ul className="hidden lg:flex space-x-2 text-lg font-bold lg:text-lg xl:text-lg md:text-lg font-sans">
          <li>
            <Link 
              to="/" 
              className="relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                         hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600
                         hover:text-white hover:shadow-lg transform-gpu"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className="relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                         hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600
                         hover:text-white hover:shadow-lg transform-gpu"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                         hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600
                         hover:text-white hover:shadow-lg transform-gpu"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                         hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600
                         hover:text-white hover:shadow-lg transform-gpu"
            >
              Connect
            </Link>
          </li>
          <li>
            <Link 
              to="/career" 
              className="relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                         hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600
                         hover:text-white hover:shadow-lg transform-gpu"
            >
              Career
            </Link>
          </li>
          <li>
            <Link 
              to="/blogs" 
              className="relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                         hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600
                         hover:text-white hover:shadow-lg transform-gpu"
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Call Now Button (Scales with Viewports) */}
        <Link
          to="https://wa.me/919045922719?text=Hello%20I%20want%20to%20connect"
          className="hidden lg:block bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden text-black px-8 py-4 text-xl font-bold rounded-full hover:bg-gray-800 md:px-4 md:py-3 md:text-lg xl:text-xl"
        >
          Call Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className={`lg:hidden py-4 px-6 space-y-4 text-lg font-sans ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-white shadow-lg'
        }`}>
          <a href="/" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/services" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="/about" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="/contact" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Connect</a>
          <a href="/career" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Career</a>
          <a href="/blogs" className="block hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Blog</a>

          {/* Call Now Button */}
          <a
            href="tel:+1234567890"
            className="block bg-black text-white px-6 py-3 text-lg font-bold rounded-full hover:bg-gray-800 text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;