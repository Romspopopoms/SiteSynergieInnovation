import React from "react";
import BG1 from "../../assets/bg1imma.webp";

const Section2 = () => {
    return (
        <div className="flex flex-col bg-[#FFFBED] w-full relative">
            {/* Premier élément avec h-52 */}
            <div className="w-full h-96 bg-[#FFFBED]"></div>

            {/* Image en dessous avec h-52 */}
            <div className="relative w-full h-96 z-0">
                <img src={BG1} alt="bg1" className="w-full h-full object-cover" />
            </div>

            {/* Card centrée en absolute au milieu des deux éléments */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] bg-white shadow-lg p-6 sm:p-8 md:px-24 text-center">
                <h1 className="text-3xl md:text-6xl text-[#474747] font-dmserif font-medium">
                    Connaitre les besoins
                    <br></br> pour mieux y répondre
                </h1>
                <p className="text-xl sm:text-2xl md:text-2xl font-jost font-medium text-[#474747] mt-6 sm:mt-8 md:mt-12 max-w-[83%] mx-auto">
                    Une équipe catholique passionnée, bien consciente des besoins spécifiques de l'Église sur le web. Grâce à notre expertise, nous répondons de la meilleure façon en développant des solutions numériques adaptées pour soutenir la mission de l'Église et faire rayonner l'Évangile dans le monde digital.
                </p>
            </div>
        </div>
    );
};

export default Section2;
