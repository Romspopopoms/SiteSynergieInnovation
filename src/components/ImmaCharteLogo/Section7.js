import React from "react";
import BG1 from "../../assets/ImmaBG.webp";
import BG2 from "../../assets/flou.webp";
import { HiDocumentText } from "react-icons/hi2";

const Section7 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-0">
            <h1 className="font-dmserif font-medium text-2xl md:text-4xl text-[#474747] text-center mb-8">
                Éléments visuels de la charte graphique
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto md:mt-6">
                
                {/* Bloc Éléments Visuels Supplémentaires - Colonne 1 */}
                <div className="flex flex-col justify-center items-center md:ml-32 mt-5">
                    {/* Élément graphique : Image */}
                    <div className="relative w-full max-w-[90%] md:max-w-[400px] h-[240px] md:h-[280px] rounded-[20px] flex justify-center items-center text-[#474747] text-4xl p-4 overflow-hidden">
                        <img src={BG1} alt="Élément Visuel" className="w-full h-full object-cover absolute z-0 "/>
                    </div>

                    {/* Titre et texte sous le bloc visuel */}
                    <div className="text-center md:text-left max-w-[90%] md:max-w-[400px] mt-6">
                        <h2 className="font-dmserif font-medium text-2xl md:text-4xl text-[#474747] mb-4">Éléments Visuels Supplémentaires</h2>
                        <p className="font-jost font-light text-[#474747] text-lg md:text-base">
                            Ils incluent des textures, motifs, arrière-plans, et autres graphismes qui ajoutent de la profondeur et du caractère à vos supports. Ces éléments sont conçus pour enrichir le visuel tout en respectant l'harmonie globale de la charte graphique.
                        </p>
                    </div>
                </div>

                {/* Bloc Consignes d'Utilisation - Colonne 2 */}
                <div className="flex flex-col justify-center items-center md:mr-32">
                    {/* Élément graphique : Image */}
                    <div className="relative w-full max-w-[90%] md:max-w-[400px] h-[240px] md:h-[280px] rounded-[20px] flex justify-center items-center text-white text-4xl p-4 overflow-hidden">
                        <img src={BG2} alt="Consignes d'Utilisation" className="w-full h-full object-cover absolute z-0"/>
                        <HiDocumentText className="absolute z-10 w-24 h-24"/>
                    </div>

                    {/* Titre et texte sous le bloc visuel */}
                    <div className="text-center md:text-left max-w-[90%] md:max-w-[400px] mt-6">
                        <h2 className="font-dmserif font-medium text-2xl md:text-4xl text-[#474747] mb-4">Consignes d'Utilisation</h2>
                        <p className="font-light font-jost text-[#474747] text-lg md:text-base">
                            Les consignes d’utilisation définissent les bonnes pratiques à suivre et les erreurs à éviter pour utiliser correctement tous les éléments visuels de votre marque. Elles garantissent que l’identité visuelle reste cohérente et professionnelle sur tous les supports, qu'ils soient imprimés ou numériques.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section7;
