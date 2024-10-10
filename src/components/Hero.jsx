import React from "react";
import { motion } from "framer-motion"; // Pastikan Anda mengimpor motion
import { HERO_CONTENT, ABOUT_TEXT } from "../constants";
import ProfilePic from "../assets/Poll.jpeg.jpeg"

// Gunakan require untuk gambar
// const ProfilePic = require("../assets/Poll.jpeg.jpeg");

console.log("HERO_CONTENT:", HERO_CONTENT);
console.log("ProfilePic:", ProfilePic);

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});

const Hero = () => {
  return (
    <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl lg:text-6xl font-bold text-gray-100 mb-4"
                    >
                        Pak Pol Nyetting
                    </motion.h1>
                    <motion.span
                    variants={container(0.2)}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-6"
                    >
                      Pemuda Resing
                    </motion.span>
                    <motion.p
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="text-lg text-gray-400 max-w-xl leading-relaxed"
                    >
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <motion.div
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.5}}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gray-700 transform rotate-3"></div>
                    <img
                        src={ProfilePic}
                        alt="Nabill Ft Kresna"
                        className="relative z-10 w-64 h-64 object-cover border-4 border-gray-600"
                    />
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default Hero;