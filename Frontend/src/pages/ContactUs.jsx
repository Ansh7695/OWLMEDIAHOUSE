import { FaPhoneAlt, FaEnvelope, FaBuilding, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", about: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await axios.post("http://localhost:4000"+"/api/email",{formData});
    if(response.data.success){
      toast.success("Details sent successfully!");

      // Reset formData after successful submission
    setFormData({ name: "", email: "", phone: "", about: "" });
    }else{
      toast.error("Failed to send details. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-6 md:p-12 min-h-screen">
      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: "0" }}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-2/3 p-6 md:p-8 min-h-[500px] md:min-h-[550px] mt-10 lg:mt-20 relative z-10"
      >
        <h1 className="text-4xl md:text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Feel Free To Contact Us Any Time Even When We Are Asleep
        </p>
        
        <form className="mt-6 space-y-6 md:space-y-15" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
            className="w-full md:w-[60%] border-b-2 p-2 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            className="w-full md:w-[60%] border-b-2 p-2 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone *"
            className="w-full md:w-[60%] border-b-2 p-2 focus:outline-none"
            required
          />
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About *"
            className="w-full md:w-[60%] border-b-2 p-2 focus:outline-none"
            required
          ></textarea>
          <br />
          <button
            type="submit"
            className="w-full md:w-[300px] px-6 py-2 text-lg font-semibold bg-white border-2 border-black rounded-full shadow-md hover:shadow-lg"
          >
            Connect
          </button>
        </form>
      </motion.div>

      {/* Info Box */}
      <motion.div 
        initial={{ opacity: 0, rotateY: 90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full lg:w-1/3 bg-black text-white p-6 md:p-6 rounded-lg z-10 min-h-[400px] mt-10 lg:mt-0"
      >
        <button className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-2 md:px-5 md:py-3 font-bold text-sm md:text-base">
          Let's Talk
        </button>
        <h2 className="text-4xl md:text-4xl font-bold mb-6">Info</h2>
        
        <div className="space-y-6 md:space-y-6 text-base md:text-xl">
          <div className="flex items-center space-x-4 mt-10">
            <FaPhoneAlt />
            <a href="tel:+919540404737" className="hover:underline">+91 90459 22719</a>
          </div>
          <div className="flex items-center space-x-4 mt-10">
            <FaEnvelope />
            <a href="mailto:Info@brandmonkey.in" className="hover:underline">contact@owlmediahouse.com</a>
          </div>
          <div className="flex items-center space-x-4 mt-10 ">
            <FaBuilding />
            <p className="text-sm md:text-lg">1072/2, Central Market, Shastri Nagar Meerut , UP - 250004</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center md:justify-start space-x-6 text-yellow-400 text-3xl md:text-4xl mt-15">
          <a href="https://www.linkedin.com/company/owlmediahouseofficial/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/owlmediahouseofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/owlmediahouseofficial" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
