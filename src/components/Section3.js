import React, { useRef } from "react";
import { motion, useInView, easeInOut } from "framer-motion";
import Frame from "../assets/Frame@4x.png";

const Section3 = () => {
    // Référence pour l'élément à observer
    const ref = useRef(null);
    // Détection de la visibilité
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="flex flex-col items-center justify-center min-h-[70vh] md:min-h-screen">
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50}}
                transition={{delay:0.1, duration: 0.5, ease: easeInOut }}
                className="text-white text-4xl sm:text-6xl font-bold font-inter mt-48 text-center"
            >
                Des solutions web adaptées
            </motion.h1>
            <img src={Frame} alt="Frame" className="bg-cover max-w-[80%] mx-auto" />
            <p className="text-white text-lg sm:text-xl font-afacal max-w-[80%] md:max-w-[50%] mx-auto text-center font-semibold">
                Chez Synergie Innovation, nous concevons des solutions sur mesure pour aider les entreprises à se développer sur le web. Notre expertise permet de créer des outils numériques adaptés à vos besoins spécifiques, afin de maximiser votre croissance en ligne et renforcer votre présence digitale.
            </p>
        </div>
    );
};

export default Section3;
