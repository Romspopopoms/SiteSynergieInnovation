import React from "react"
import BG1 from "../../assets/bg1imma.webp"

const Section2 = () => {
    return (
        <div className="flex flex-col bg-[#FFFBED] w-full relative">
            {/* Premier élément avec h-52 */}
            <div className="w-full sm:h-[600px] md:h-[300px] h-[650px] bg-[#FFFBED]"></div>

            {/* Image en dessous avec h-52 */}
            <div className="relative w-full sm:h-[600px] md:h-[500px] h-[650px] z-0">
                <img src={BG1} alt="bg1" className="w-full h-full object-cover" />
            </div>

            {/* Card centrée en absolute au milieu des deux éléments */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mx-auto bg-white shadow-lg p-6 sm:p-8  text-center">
                <h1 className="text-3xl md:text-6xl text-[#474747] font-dmserif font-medium">
                Une Communication Efficaces
                </h1>
                <p className="text-xl sm:text-2xl md:text-2xl font-jost font-medium text-[#474747] mt-6 sm:mt-8 md:mt-12 max-w-[83%] mx-auto">
                La communication web est devenue un outil essentiel pour l'Église catholique afin de partager son message et de toucher une audience plus large. À l'ère du numérique, une présence en ligne bien pensée permet aux paroisses, diocèses, et autres institutions catholiques de renforcer leur mission d'évangélisation. Elle offre une plateforme pour diffuser des enseignements, annoncer des événements, et créer des liens avec les fidèles au-delà des murs de l'église. Une communication web efficace favorise l'engagement communautaire, permet de répondre aux besoins spirituels de chacun, et aide à attirer de nouveaux membres. En investissant dans une stratégie de communication numérique, l'Église peut s'assurer que son message continue de résonner dans les cœurs et les esprits, partout et à tout moment.
                </p>
            </div>
        </div>
    );
};

export default Section2;