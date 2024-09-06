import React from "react";
import PictoSynergie from "../../assets/V4 simple W.svg"
import BGLanding from "../../assets/Bg2.webp"
const Section7 = () => {
    return (
        <div className="md:grid md:grid-cols-2 flex flex-col items-end mt-32 bg-cover min-h-[600px]" style={{ backgroundImage: `url(${BGLanding})` }}>
            <div className="hidden md:flex justify-center items-center">
                <img src={PictoSynergie} alt="PictoSynergie" className="max-w-[40%] mx-auto mb-24 h-auto" />
            </div>
            <div className="flex flex-col justify-start items-center mx-auto max-w-[70%]">
            <h1 className="text-white text-4xl sm:text-6xl font-bold font-afacad md:text-start text-center">Démarquez vous aujourd'hui sur le web</h1>
            <p className="text-white text-lg sm:text-2xl font-afacad mx-auto text-start mt-6 md:mt-12">
                Prenez les devants et lancez votre projet avec Synergie Innovation. Ensemble, nous concervrons un site internet, un design, et un plan de communication personnalisés qui sauront captiver votre audience et propulser votre entreprise vers de nouveau horizons.
            </p>
            <a href="/Contact" className="bg-transparent border-2 border-[#FFFFFF] rounded-full py-1 px-6 mt-12 self-start mb-12">
                <h2 className="text-white text-xl sm:text-3xl font-bold font-afacad center">CONTACTEZ-NOUS →</h2>
            </a>


            </div>

        </div>
    )
}

export default Section7