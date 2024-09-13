import React from "react";
import BG1 from "../../assets/bg1imma.webp";

const Section3 = () => {
    return (
        <div className="flex flex-col bg-[#FFFBED] w-full relative">
            {/* Premier élément avec h-52 */}
            <div className="w-full h-[300px] md:h-[500px] bg-[#FFFBED]"></div>

            {/* Image en dessous avec h-52 */}
            <div className="relative w-full h-[300px] md:h-[500px] z-0">
                <img src={BG1} alt="bg1" className="w-full h-full object-cover" />
            </div>

            {/* Card centrée en absolute au milieu des deux éléments */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] bg-white shadow-lg p-6 sm:p-8 md:px-12 text-center">
                <h1 className="text-3xl md:text-6xl text-[#474747] font-dmserif font-medium">
                Notre constat et nos objectifs
                </h1>
                <p className="text-xl sm:text-2xl md:text-2xl font-jost font-medium text-[#474747] mt-6 sm:mt-8 md:mt-12 max-w-[83%] mx-auto">
                Nous plaçons l'écoute des paroisses, des patronages, des diocèses, et de toutes les communautés ecclésiales au cœur de notre démarche. Nous vous accompagnons dans la création de votre logo et de votre charte graphique, en concevant des solutions entièrement personnalisées. Notre expertise inclut la conception de chartes graphiques uniques et de logos sur mesure, conçus pour refléter l'identité de votre communauté et renforcer votre visibilité. Chaque élément est pensé pour transmettre votre message de manière claire et impactante, tout en mettant en valeur la mission et les valeurs de votre paroisse, patronage, ou diocèse.
                </p>
            </div>
        </div>
    );
};

export default Section3