import React from "react";
import Imma from "../assets/Logo ImaMissio W.svg"
import Vox from "../assets/Logo vox W.svg"
import Scan from "../assets/LogoScan.png"

const Section4 = () => {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-6xl font-bold font-afacad text-center">Nos services web pour vos besoins</h1>
            <div className="flex space-x-12 mt-24 max-w-[80%]">
                <a href="/VoxUnity">
                <img src={Vox} alt="Vox" className="object-cover max-h-24 w-full"></img>
                </a>
                <a href="/ImmaMissio">
                <img src={Imma} alt="Imma" className="object-cover max-h-24 w-full"></img>
                </a>
                <a href="/ScanAvis">
                <img src={Scan} alt="Scan" className="object-cover max-h-24 w-full"></img>
                </a>

            </div>
        
        </div>
    );
};

export default Section4;
