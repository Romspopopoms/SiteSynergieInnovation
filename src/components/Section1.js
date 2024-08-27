import React from "react";
import { easeInOut, motion } from "framer-motion";


const Section1 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-96 w-auto">
            
            <img src={''} alt="Photo1" className="absolute inset-0 w-full blur-sm z-0 min-h-96" />
            <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{opacity: 1, y:0 }}
            transition={{ duration: 1, ease:easeInOut }}
            className="z-10 self-start xl:ml-32 xl:mt-32 mt-12 ml-8 font-jost text-2xl md:text-4xl lg:text-6xl font-bold text-white"
            >LA BOULANGERIE</motion.h1>
            
            <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            animate={{opacity: 1, y:0 }}
            transition={{ duration: 1, ease:easeInOut, delay:0.3 }}
            className="z-10 self-start xl:ml-32 mt-4 ml-8 font-jost text-2xl sm:text-4xl font-bold text-white">L'art de la boulangerie française à votre portée</motion.h2>
                
        </div>
    );
};

export default Section1;
