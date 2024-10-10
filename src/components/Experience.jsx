import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-500 pb-4">
            <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
            >
             Work & Volunteer Experience    
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4"
                        >
                            <h3 className="text-xl font-bold">{experience.year}</h3>
                        </motion.div>
                        <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-3/4"
                        >
                            <h4 className="text-lg font-semibold">{experience.role}</h4>
                            <p className="text-gray-500">{experience.company}</p>
                            <p className="mt-2">{experience.description}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {experience.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
