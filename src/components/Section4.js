import React, { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedTitle from "../components/Animated";
import Imma from "../assets/Logo ImaMissio W.svg";
import Vox from "../assets/Logo vox W.svg";
import Scan from "../assets/LogoScan.png";

const Section4 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="min-h-[70vh] md:min-h-screen w-full flex flex-col justify-center items-center">
            <AnimatedTitle
                text="Nos services web pour vos besoins"
                className="text-white text-4xl sm:text-6xl font-bold font-afacad text-center"
                isInView={isInView}
            />
            <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-12 mt-12 md:mt-24 max-w-[80%]">
                <a href="/VoxUnity">
                    <img src={Vox} alt="Vox" className="max-h-20 w-full mr-8"></img>
                </a>
                <a href="/ImmaMissio" className="hidden md:block">
                    <img src={Imma} alt="Imma" className="max-h-16 w-full"></img>
                </a>
                <a href="/ScanAvis">
                    <img src={Scan} alt="Scan" className="max-h-20 w-full"></img>
                </a>
                <a href="/ImmaMissio" className="block md:hidden">
                    <img src={Imma} alt="Imma" className="object-cover max-h-16 w-full mt-4"></img>
                </a>
            </div>
        </div>
    );
};

export default Section4;
