import React from 'react';
import { motion, easeInOut } from "framer-motion";
import Background from "../assets/Bg2.webp";
import LogoSynergie from "../assets/V4 simple W.svg";

const Loader = () => {
    return (
        <div 
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
                animate={{ opacity: 1, scale: [0.7, 1.1, 1], rotate: 0 }}
                transition={{ duration: 2, ease: easeInOut }}
                className="h-32 w-32 sm:h-48 sm:w-48"
            >
                <img src={LogoSynergie} alt="Loading..." className="h-full w-full object-contain" />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, textShadow: "0px 0px 8px rgba(255,255,255,0.9)" }}
                transition={{ delay: 1.5, duration: 1.5, ease: easeInOut }}
                className="mt-8"
            >
                <motion.p 
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                    className='text-white text-2xl sm:text-4xl font-bold font-afacad text-center'
                >
                    SYNERGIE INNOVATION
                </motion.p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [10, 0, 10] }}
                transition={{ delay: 3, repeat: Infinity, repeatType: "reverse", duration: 2, ease: easeInOut }}
                className="mt-4 text-white text-sm sm:text-lg font-light"
            >
                <p>Chargement...</p>
            </motion.div>
        </div>
    );
};

export default Loader;
