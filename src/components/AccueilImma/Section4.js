import React from "react";
import Tel from "../../assets/Tel.webp";  // Image du téléphone
import BG1 from "../../assets/bg1imma.webp";  // Image de fond avec les icônes
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";  // Importation des icônes React Icons

const Section4 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-[#FFFBED] w-full py-16">
            {/* Left Section with Phone Image */}
            <div className="flex justify-center w-full md:w-1/2 p-8">
                <img src={Tel} alt="Phone showing social media" className="max-w-[300px] md:max-w-[350px] rounded-[50px]" /> {/* Ajout d'un border-radius */}
            </div>

            {/* Right Section with Background Image and Icons */}
            <div className="relative flex flex-col items-center md:items-start w-full md:w-1/2 p-8 space-y-6">
                {/* Background image with icons */}
                <div className="relative bg-cover bg-center w-[25%] mx-[25%] h-[400px] md:h-[300px] shadow-lg flex justify-center items-center rounded-full"
                    style={{ backgroundImage: `url(${BG1})` }}>
                    
                    {/* Flou et icônes */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6"> {/* Flou et dégradé */}
                        <FaYoutube className="text-white text-6xl" /> {/* YouTube Icon */}
                        <FaFacebook className="text-white text-6xl" /> {/* Facebook Icon */}
                        <FaInstagram className="text-white text-6xl" /> {/* Instagram Icon */}
                    </div>
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left max-w-lg">
                    <h3 className="text-4xl font-DmSerif text-[#474747]">Booster votre communication</h3>
                    <p className="text-md font-jost text-[#474747] mt-4">
                        Nous vous aidons à accroître la visibilité de votre institution catholique sur le web avec des plans de communication personnalisés. Que vous ayez besoin d’un accompagnement stratégique, d’un directeur de communication, ou d’un community manager, nous sommes à vos côtés à chaque étape pour vous guider.
                    </p>
                    <a href="/ImmaMissioCom">
                    <button className="mt-8 border border-black px-4 py-2 font-jost">En savoir plus</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section4;
