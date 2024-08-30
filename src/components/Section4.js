import React, { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedTitle from "../components/Animated";
import Imma from "../assets/Logo ImaMissio W.svg";
import Vox from "../assets/Logo vox W.svg";
import Scan from "../assets/LogoScan.webp";

const Section4 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Vérifie si l'écran est de taille moyenne (md) ou plus
    const isMediumOrAbove = window.innerWidth >= 768;

    return (
        <div ref={ref} className="min-h-[70vh] md:min-h-screen w-full flex flex-col justify-center items-center">
            {isMediumOrAbove ? (
                <AnimatedTitle
                    text="Nos services web pour vos besoins"
                    className="text-white text-4xl sm:text-6xl font-bold font-afacad text-center max-w-[80%] mx-auto"
                    style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
                    isInView={isInView}
                />
            ) : (
                <h1 className="text-white text-4xl sm:text-6xl font-bold font-afacad text-center max-w-[80%] mx-auto">
                    Nos services web pour vos besoins
                </h1>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-12 mt-12 md:mt-24 max-w-[80%]">
                <a href="/VoxUnity" className="flex justify-center">
                    <img src={Vox} alt="Vox" className="h-auto w-24 md:w-40"></img>
                </a>
                <a href="/ImmaMissio" className="hidden md:flex justify-center">
                    <img src={Imma} alt="Imma" className="h-auto w-20 md:w-32"></img>
                </a>
                <a href="/ScanAvis" className="flex justify-center">
                    <img src={Scan} alt="Scan" className="h-auto w-24 md:w-40"></img>
                </a>
                <a href="/ImmaMissio" className="md:hidden flex justify-center col-span-2">
                    <img src={Imma} alt="Imma" className="h-auto w-36 mt-4"></img>
                </a>
            </div>
        </div>
    );
};

export default Section4;
