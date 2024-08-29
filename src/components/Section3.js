import React from "react";
import BG from "../assets/Bg2.png"
import Frame from "../assets/Frame@4x.png"
const Section3 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-top bg-cover space-y-12 "
        style={{backgroundImage : `url(${BG})`}}>
            <h1 className="text-white text-4xl sm:text-6xl font-bold font-inter mt-48 text-center">Des solutions web adaptées</h1>
            <img src={Frame} alt="Frame" className="bg-cover max-w-[80%] mx-auto"></img>
            <p className="text-white text-lg sm:text-xl font-afacal max-w-[80%] md:max-w-[50%] mx-auto text-center font-semibold">Chez Synergie Innovation, nous concevons des solutions sur mesure pour aider les entreprises à se développer sur le web. Notre expertise permet de créer des outils numériques adaptés à vos besoins spécifiques, afin de maximiser votre croissance en ligne et renforcer votre présence digitale.</p>
        </div>
    );
};

export default Section3;
