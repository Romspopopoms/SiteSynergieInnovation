import React from "react";
import Imma from "../../assets/Logo ImaMissio W.svg";
import Vox from "../../assets/Logo vox W.svg";
import Scan from "../../assets/LogoScan.webp";
import Synergie from "../../assets/V4longW.svg";

const Section4 = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-16">
            <h1 className="text-white text-4xl sm:text-6xl font-bold font-poppins text-center max-w-[80%] mx-auto">
                Ils nous font confiance
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-12 mt-12 md:mt-24 max-w-[80%] ">
                {/* Colonne 1 */}
                <a href="/VoxUnity" className="flex justify-center">
                    <img src={Vox} alt="Vox" className="h-auto w-24 md:w-40"></img>
                </a>

                {/* Colonne 2 */}
                <a href="/ImmaMissio" className="flex justify-center">
                    <img src={Imma} alt="Imma" className="h-auto w-20 md:w-32"></img>
                </a>

                {/* Colonne 3 */}
                <a href="/ScanAvis" className="flex justify-center">
                    <img src={Scan} alt="Scan" className="h-auto w-24 md:w-40"></img>
                </a>

                {/* Colonne 4 */}
                <a href="/SynergieInnovation" className="flex justify-center sm:col-span-1">
                    <img src={Synergie} alt="SynergieInnovation" className="h-auto w-24 md:w-40 "></img>
                </a>
            </div>
        </div>
    );
};

export default Section4;
