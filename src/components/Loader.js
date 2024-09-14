import React from 'react';
import { motion, easeInOut } from "framer-motion";
import Background from "../assets/Bg2.webp";
import LogoSynergie from "../assets/V4 simple W.svg";

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Background})`, backgroundColor: '#f0f0f0' }} // Ajout d'une couleur de fond pour éviter le flash
        >
            {/* Logo animation */}
            <motion.div 
                initial={{ opacity: 0.3, scale: 0.9, rotate: 15 }}
                animate={{ opacity: 1, scale: [0.9, 1.1, 1], rotate: 0 }}
                transition={{ duration: 2, ease: easeInOut }}
                style={{ willChange: 'opacity, transform' }} // Ajout du will-change pour optimiser le rendu
                className="h-32 w-32 sm:h-48 sm:w-48"
            >
                <img 
                    src={LogoSynergie} 
                    alt="Loading..." 
                    className="h-full w-full object-contain"
                    style={{ transition: 'opacity 1s ease-in-out' }} // Transition CSS pour un effet de fondu
                />
            </motion.div>

            {/* Texte principal */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, textShadow: "0px 0px 8px rgba(255,255,255,0.9)" }}
                transition={{ delay: 1.5, duration: 1.5, ease: easeInOut }}
                className="mt-8"
            >
                <motion.p 
                    className='text-white text-2xl sm:text-4xl font-bold font-afacad text-center'
                    style={{ willChange: 'opacity, transform' }}
                >
                    SYNERGIE INNOVATION
                </motion.p>
            </motion.div>

            {/* Texte de chargement animé */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [10, 0, 10] }}
                transition={{ delay: 2.5, repeat: Infinity, repeatType: "reverse", duration: 2, ease: easeInOut }}
                className="mt-4 text-white text-sm sm:text-lg font-light"
            >
                <p>Chargement...</p>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
