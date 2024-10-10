import React from "react";  
import './Navbar.css'; // Tambahkan baris ini
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/kevinRushLogo.png"; // Pastikan path ini benar

const Navbar = () => {
    return (
        <nav className="bg-gray-200 shadow-md w-full">
            <div className="flex items-center px-4 py-4">
                <img src={logo} alt="Kevin Rush Logo" className="h-10 w-auto mr-4" />
                
                <div className="bg-gray-250 flex-grow flex items-center justify-center border-2 border-gray-400 rounded-lg py-2">
                    <ul className="flex items-center">
                        <li><a href="#" className="text-gray-700 hover:text-gray-900 hover:bg-gray-400 px-3 py-2 rounded-md transition duration-300">Beranda</a></li>
                        <li className="border-l-2 border-gray-400 h-8 mx-2"></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900 hover:bg-gray-400 px-3 py-2 rounded-md transition duration-300">Tentang</a></li>
                        <li className="border-l-2 border-gray-400 h-8 mx-2"></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900 hover:bg-gray-400 px-3 py-2 rounded-md transition duration-300">Layanan</a></li>
                        <li className="border-l-2 border-gray-400 h-8 mx-2"></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900 hover:bg-gray-400 px-3 py-2 rounded-md transition duration-300">Kontak</a></li>
                    </ul>
                    
                    <div className="flex items-center ml-8">
                        <div className="border-l-2 border-gray-2000 h-8 mx-2"></div>
                        
                        <ul className="flex items-center space-x-4">
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
                                    <FaLinkedin className="text-xl" />
                                </a>
                            </li>
                            <li>
                                <a href="Https://www.facebook.com/Abilla24/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
                                    <FaFacebook className="text-xl" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/@billabielll/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
                                    <FaInstagram className="text-xl" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
                                    <FaSquareXTwitter className="text-xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Garis Pemisah */}
            <div className="border-t-2 border-gray-400 w-full"></div>
        </nav>
    );
};

export default Navbar;