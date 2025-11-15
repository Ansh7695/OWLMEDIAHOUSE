import React, {useState} from "react";
import { Link } from "react-router-dom";
import {  FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from '../assets/assets';

const Footer = () => {

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", about: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        
        const response = await axios.post("http://localhost:4000" + "/api/email", {formData});
    
        if(response.data.success){
            toast.success("Details Sent Successfully!");
            setFormData({ name: "", email: "", phone: "", about: "" });
        }else{
            toast.error(response.data.message);
        }
    };

    return (
        <>
            {/* Main Footer with Colored Container */}
            <footer className="bg-black text-white py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Colored Container - Similar to the green box in image */}
                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
                            
                            {/* Left Side - Heading */}
                            <div className="max-w-xl">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
                                    DON'T WING YOUR MARKETING,  
                                    FLY WITH THE WISE AT
                                    <br />
                                    <span className="text-white">OWL MEDIA HOUSE</span>
                                </h2>
                            </div>

                            {/* Right Side - Form */}
                            <div className="w-full lg:w-auto lg:min-w-[400px]">
                                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange}  
                                        placeholder="FULL NAME" 
                                        className="bg-white text-black px-6 py-4 rounded-lg font-semibold outline-none border-none placeholder-gray-500"
                                        required
                                    />
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange}  
                                        placeholder="E-MAIL" 
                                        className="bg-white text-black px-6 py-4 rounded-lg font-semibold outline-none border-none placeholder-gray-500"
                                        required
                                    />
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange}  
                                        placeholder="PHONE NO." 
                                        className="bg-white text-black px-6 py-4 rounded-lg font-semibold outline-none border-none placeholder-gray-500"
                                    />
                                    <input 
                                        type="text" 
                                        name="about" 
                                        value={formData.about} 
                                        onChange={handleChange}  
                                        placeholder="SUBJECT" 
                                        className="bg-white text-black px-6 py-4 rounded-lg font-semibold outline-none border-none placeholder-gray-500"
                                    />
                                    
                                    {/* Submit Button */}
                                    <button 
                                        type="submit" 
                                        className="bg-black text-white font-bold px-8 py-4 rounded-lg uppercase tracking-wide hover:bg-gray-900 transition-colors"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

            {/* Second Footer - Info Section */}
            <footer className="bg-black text-white py-10">
                <div className="container mx-auto px-6">
                    
                    {/* Main content area - 3 columns */}
                    <div className="grid grid-cols-1 p-10 md:grid-cols-3 gap-8 lg:gap-12">

                        {/* First Column - Logo and About */}
                        <div className="flex flex-col items-center">
                            <div className="flex justify-center mb-6">
                                <img
                                    src={assets.logo3}
                                    alt="Owl Media House Logo"
                                    className="h-44 md:h-48 lg:h-52"
                                />
                            </div>
                            
                            <div className="p-1 w-full max-w-sm">
                                <p className="text-base md:text-md leading-relaxed text-center">
                                    <span className="font-bold text-xl">ABOUT US</span> <br /> 
                                    OWL MEDIA HOUSE <br /> 
                                    Your trusted partner in digital marketing and media solutions.
                                    We help brands grow through innovative strategies and creative excellence.
                                </p>
                            </div>
                        </div>

                        {/* Second Column - Business Details, Quick Links, Social Media */}
                        <div className="flex flex-col space-y-6 text-center md:text-left">
                            
                            {/* Business */}
                            <div className="leading-[1.8]">
                                <h3 className="font-bold mb-3 text-2xl">BUSINESS</h3>
                                <a href="mailto:info@owlmediahouse.com" className="hover:underline text-base md:text-lg">info@owlmediahouse.com</a><br />
                                <a href="tel:+919045922719" className="text-base md:text-lg">+91 9045922719</a>
                            </div>

                            {/* Quick Links */}
                            <div className="leading-[1.8]">
                                <h3 className="font-bold mb-3 text-2xl">QUICK LINKS</h3>                   
                                <Link to="/career" className="hover:underline text-base md:text-lg block mb-1">Career</Link>
                                <Link to="/services" className="hover:underline text-base md:text-lg block mb-1">Services</Link>
                                <Link to="/about" className="hover:underline text-base md:text-lg block mb-1">About Us</Link>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="font-bold mb-3 text-2xl">FOLLOW US</h3>
                                <div className="flex justify-center md:justify-start space-x-4 text-2xl">
                                    <a href="https://www.linkedin.com/company/owlmediahouseofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://www.instagram.com/owlmediahouseofficial?igsh=bnR1d2ZhdzVpaGZq" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.facebook.com/owlmediahouseofficial" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        <FaFacebook />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Third Column - Office Details and Career */}
                        <div className="flex flex-col space-y-8 text-center md:text-left">
                            
                            {/* Company Name */}
                            <div>
                                <h3 className="font-bold mb-3 text-2xl underline">OWL MEDIA HOUSE</h3>
                            </div>

                            {/* Head Office */}
                            <div>
                                <h3 className="font-bold mb-3 text-2xl">HEAD OFFICE</h3>
                                <p className="text-lg md:text-base leading-relaxed">
                                    787/48, Lekhu Nagar, Tri Nagar, New Delhi - 110035
                                </p>
                            </div>

                            {/* Branch Office */}
                            <div>
                                <h3 className="font-bold mb-3 text-2xl">BRANCH OFFICE</h3>
                                <p className="text-lg md:text-base leading-relaxed">
                                    1072/2, Central Market, Shastri Nagar Meerut, UP - 250004
                                </p>
                            </div>

                            {/* Career */}
                            <div>
                                <h3 className="font-bold mb-3 text-2xl">CAREER AT OWL</h3>
                                <a href="mailto:hr@owlmediahouse.com" className="hover:underline text-lg md:text-base">hr@owlmediahouse.com</a>
                            </div>
                        </div>

                    </div>

                    {/* Copyright & Policies */}
                    <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-400 text-sm md:text-base">
                            &copy; 2022 Owl Media House. All Rights Reserved.
                            <Link to="/policy" className="hover:underline ml-2">Terms & Conditions</Link> 
                        </p>
                    </div>
                </div>
            </footer> 
        </>
    );
};

export default Footer;