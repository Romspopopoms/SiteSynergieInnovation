import React from "react"
import BG1 from "../../assets/bg1imma.webp"

const Section3 = () => {
    return (
        <div className="flex flex-col bg-[#FFFBED] w-full">
            <div className="grid grid-rows-2 justify-end relative ">
                <div className="flex flex-col justify-center items-center w-full max-h-[200px]">
                    <div className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[90%] sm:min-w-[80%] md:min-w-[70%] lg:min-w-[60%] min-h-[280px] sm:min-h-[360px] md:min-h-[480px] p-4 sm:p-6 md:p-8 bg-white">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl text-[#474747] font-DmSerif font-medium text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] self-center">
                        Notre constat et nos objectifs
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl font-jost font-medium text-[#474747] text-center max-w-[95%] sm:max-w-[85%] md:max-w-[85%] self-center mt-6 sm:mt-8 md:mt-12">
                        Nous plaçons l'écoute des paroisses, des patronages, des diocèses, et de toutes les communautés ecclésiales au cœur de notre démarche. Nous vous accompagnons dans la création de votre logo et de votre charte graphique, en concevant des solutions entièrement personnalisées. Notre expertise inclut la conception de chartes graphiques uniques et de logos sur mesure, conçus pour refléter l'identité de votre communauté et renforcer votre visibilité. Chaque élément est pensé pour transmettre votre message de manière claire et impactante, tout en mettant en valeur la mission et les valeurs de votre paroisse, patronage, ou diocèse.
                        </p>
                    </div>
                </div>
                <div className="">
                    <img src={BG1} alt="bg1" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default Section3
