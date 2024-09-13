import React from "react";
import Tel from "../../assets/Post.webp";  // Image du téléphone
import BG1 from "../../assets/bg1imma.webp";  // Image de fond avec les icônes
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";  // Importation des icônes React Icons

const Section4 = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center w-full py-16">
            {/* Left Section with Phone Image */}
            <div className="flex justify-center items-center w-full xl:w-1/2 ">
                <img src={Tel} alt="Phone showing social media" className="max-w-[300px] md:max-w-[350px] rounded-3xl border-[12px] border-white shadow-lg xl:ml-72" /> {/* Ajout d'un border-radius */}
            </div>

            {/* Right Section with Background Image and Icons */}
            <div className="relative flex flex-col items-center w-full md:w-1/2 p-8 space-y-6 xl:mr-48">
                {/* Background image with icons */}
                <div className="relative bg-cover bg-center w-[25%] mx-[25%] h-[300px] shadow-lg flex justify-center items-center rounded-full"
                    style={{ backgroundImage: `url(${BG1})` }}>
                    
                    {/* Flou et icônes */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6"> {/* Flou et dégradé */}
                        <FaYoutube className="text-white text-6xl" /> {/* YouTube Icon */}
                        <FaFacebook className="text-white text-6xl" /> {/* Facebook Icon */}
                        <FaInstagram className="text-white text-6xl" /> {/* Instagram Icon */}
                    </div>
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left xl:max-w-[55%] mx-auto flex flex-col justify-start items-start">
                    <h3 className="text-4xl font-dmserif text-[#474747]">Booster votre communication</h3>
                    <p className="text-md font-jost text-[#474747] mt-4">
                        Nous vous aidons à accroître la visibilité de votre institution catholique sur le web avec des plans de communication personnalisés. Que vous ayez besoin d’un accompagnement stratégique, d’un directeur de communication, ou d’un community manager, nous sommes à vos côtés à chaque étape pour vous guider.
                    </p>
                    <a href="/ImmaMissioCom" className="flex justify-center items-center w-full md:justify-start">
                    <button className="mt-8 border border-black px-4 py-2 font-jost">En savoir plus</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section4;
