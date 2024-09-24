import React, { useRef } from "react";
import { useInView, motion, easeInOut } from "framer-motion";
import AnimatedTitle from "../../components/Animated";
import Window from "../../assets/Window.svg";
import Square from "../../assets/Square+.svg";
import { FaCircle } from "react-icons/fa6";

const Section5 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="flex flex-col justify-center items-center min-h-screen w-full ">
            <AnimatedTitle
                text="La mission de"
                className="text-white text-4xl sm:text-6xl font-bold font-afacad text-center"
                isInView={isInView}
            />
            <AnimatedTitle
                text="Synergie Innovation"
                className="text-white text-4xl sm:text-6xl font-bold font-afacad text-center"
                delay={1.5} // Adjust this delay based on the duration of the first animation
                isInView={isInView}
            />
            <motion.p 
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50}}
            transition={{delay:0.1, duration: 0.5, ease: easeInOut }}
            className="text-white text-lg sm:text-2xl font-afacad max-w-[60%] mx-auto text-center mt-12">
                Depuis décembre 2023, Synergie Innovation s'efforce de rendre les outils numériques accessibles à des tarifs abordables.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[80%] md:space-y-0 space-y-12 md:space-x-24 mt-32">
                <div className="flex flex-col items-start justify-center">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold font-antonio">Nos services</h3>
                    <div className="flex flex-col justify-center items-start space-y-6">
                        <div className="flex space-x-8 mt-8 justify-center items-center">
                            <div className="bg-[#BEBAF7]/25 border-4 border-white rounded-xl min-h-16 min-w-16 flex justify-center items-center">
                                <img src={Window} alt="window" className="size-8" />
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold font-antonio">
                                    Developpement de site Internet
                                </h4>
                                <p className="text-white text-md sm:text-lg font-antonio">
                                    Site vitrine ou e-commerce entièrement personnalisé
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-8 mt-8 justify-center items-center">
                            <div className="bg-[#BEBAF7]/25 border-4 border-white rounded-xl min-h-16 min-w-16 flex justify-center items-center">
                                <img src={Square} alt="Square" className="size-8" />
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold font-antonio">
                                    Création d'interfaces CRM et SIA
                                </h4>
                                <p className="text-white text-md sm:text-lg font-antonio">Inscriptions, Devis...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold font-antonio text-start">
                        Nos compétences
                    </h3>
                    <div className="flex justify-center items-center space-x-4 mt-5">
                        <FaCircle className="size-3 text-white" />
                        <p className="text-white text-md sm:text-lg font-antonio">Frontend</p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-5">
                        <FaCircle className="size-3 text-white" />
                        <p className="text-white text-md sm:text-lg font-antonio">Backend</p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-5">
                        <FaCircle className="size-3 text-white" />
                        <p className="text-white text-md sm:text-lg font-antonio">Design UI/UX</p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-5">
                        <FaCircle className="size-3 text-white" />
                        <p className="text-white text-md sm:text-lg font-antonio">Communication</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;
