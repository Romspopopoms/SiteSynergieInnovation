import React from "react";
import { FaHome, FaGlobe, FaWrench, FaLink, FaEye, FaChartBar } from "react-icons/fa";
import Eveque from "../../assets/Eveque.webp";

const Section6 = () => {
return (
    <div className="flex flex-col justify-center items-center w-full px-4 md:px-0">

        <div className="grid grid-cols-1 md:grid-cols-5 space-y-16 md:space-y-0 w-full max-w-6xl mx-auto mt-12">
            
            {/* Bloc Iconographie - Colonne 3 à 5 (prend 60%) */}
            <div className="flex flex-col justify-start items-center col-span-3 max-w-[90%] mx-auto">
            {/* Élément graphique : Icônes */}
                <div className="bg-[#FFFFFF] p-8 shadow-lg w-full h-[320px] flex justify-around items-center max-w-[90%] md:max-w-[700px] space-x-4 text-[#474747] text-5xl">
                    <FaHome />
                    <FaGlobe />
                    <FaWrench />
                    <FaLink />
                    <FaEye />
                    <FaChartBar />
                </div>

                {/* Titre et texte sous le bloc d'icônes */}
                <div className="text-center md:text-left w-full max-w-[90%] md:max-w-[570px] mt-6">
                <h2 className="font-dmserif font-medium text-2xl md:text-4xl text-[#474747] mb-4">Iconographie</h2>
                    <p className="font-jost font-light text-[#474747] text-sm md:text-base">
                        L'iconographie regroupe les styles d'icônes utilisés pour illustrer et compléter le contenu visuel de votre marque. Elle définit les lignes directrices pour l'utilisation d'icônes cohérentes avec l'identité de la marque, afin de renforcer la communication visuelle.
                    </p>
                </div>
            </div>

            {/* Bloc Photo et illustration - Colonne 1 à 2 (prend 40%) */}
            <div className="flex flex-col justify-center items-center col-span-2">
                {/* Élément graphique : Image carrée */}
                <div className="w-full max-w-[370px] h-[320px] overflow-hidden mr-12 ">
                <img 
                        src={Eveque} 
                        alt="Feu" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Titre et texte sous l'image */}
                <div className="text-center md:text-left max-w-[90%] md:max-w-[320px] mt-6 mr-20">
                <h2 className="font-dmserif font-medium text-2xl md:text-4xl text-[#474747] mb-4">Photo et illustration</h2>
                    <p className="font-jost font-light text-[#474747] text-sm md:text-base">
                        Cet élément couvre le style des photos et illustrations qui représentent votre marque, indiquant les types d'images (composition, éclairage) et les styles d'illustrations à utiliser. Il aide à maintenir une ambiance et une esthétique uniformes sur tous vos supports de communication.
                    </p>
                </div>
            </div>
        </div>
    </div>
);
};

export default Section6