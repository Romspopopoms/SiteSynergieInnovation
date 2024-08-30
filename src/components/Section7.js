import React from "react";
import PictoSynergie from "../assets/V4 simple W.svg"

const Section7 = () => {
    return (
        <div className="md:grid md:grid-cols-2 flex flex-col mt-32 md:mt-60 mb-12">
            <div className="hidden md:flex justify-center items-center">
                <img src={PictoSynergie} alt="PictoSynergie" className="max-w-[50%] mx-auto h-auto" />
            </div>
            <div className="flex flex-col justify-start items-center mx-auto max-w-[70%]">
            <h1 className="text-white text-4xl sm:text-6xl font-bold font-afacad md:text-start text-center">Démarquez vous aujourd'hui sur le web</h1>
            <p className="text-white text-lg sm:text-2xl font-afacad mx-auto text-start mt-6 md:mt-12">
                Prenez les devants et lancez votre projet avec Synergie Innovation. Ensemble, nous concervrons un site internet, un design, et un plan de communication personnalisés qui sauront captiver votre audience et propulser votre entreprise vers de nouveau horizons.
            </p>
            <a href="/Contact" className="bg-transparent border-2 border-[#FFFFFF] rounded-full py-4 px-8 mt-12 self-start">
                <h2 className="text-white text-xl sm:text-3xl font-bold font-afacad center">CONTACTEZ-NOUS →</h2>
            </a>


            </div>

        </div>
    )
}

export default Section7