import React from "react";
import BG1 from "../../assets/bg1.webp";
import BG2 from "../../assets/bg8.webp";
import PictoVox from "../../assets/PictoVox.svg";
import { HiDocumentText } from "react-icons/hi2";

const Section4 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-0">
            <h1 className="font-poppins font-bold text-2xl md:text-4xl text-white text-center mb-8">
                Éléments visuels de la charte graphique
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto mt-12">
                
                {/* Bloc Éléments Visuels Supplémentaires - Colonne 1 */}
                <div className="flex flex-col justify-center items-center">
                    {/* Élément graphique : Image */}
                    <div className="relative w-full max-w-[400px] h-[220px] md:h-[280px] rounded-[20px] flex justify-center items-center text-white text-4xl p-4 overflow-hidden">
                        <img src={BG1} alt="Élément Visuel" className="w-full h-full object-cover absolute z-0"/>
                        <img src={PictoVox} alt="Élément Visuel" className="absolute z-10 w-24 h-24"/>
                    </div>

                    {/* Titre et texte sous le bloc visuel */}
                    <div className="text-center md:text-left max-w-[90%] md:max-w-[400px] mt-6">
                        <h2 className="font-poppins font-bold text-2xl md:text-4xl text-white mb-4">Éléments Visuels Supplémentaires</h2>
                        <p className="font-poppins text-[#FFFFFF] text-sm md:text-base">
                            Ils incluent des textures, motifs, arrière-plans, et autres graphismes qui ajoutent de la profondeur et du caractère à vos supports. Ces éléments sont conçus pour enrichir le visuel tout en respectant l'harmonie globale de la charte graphique.
                        </p>
                    </div>
                </div>

                {/* Bloc Consignes d'Utilisation - Colonne 2 */}
                <div className="flex flex-col justify-center items-center">
                    {/* Élément graphique : Image */}
                    <div className="relative w-full max-w-[400px] h-[220px] md:h-[280px] rounded-[20px] flex justify-center items-center text-white text-4xl p-4 overflow-hidden">
                        <img src={BG2} alt="Consignes d'Utilisation" className="w-full h-full object-cover absolute z-0"/>
                        <HiDocumentText className="absolute z-10 w-24 h-24"/>
                    </div>

                    {/* Titre et texte sous le bloc visuel */}
                    <div className="text-center md:text-left max-w-[90%] md:max-w-[400px] mt-6">
                        <h2 className="font-poppins font-bold text-2xl md:text-4xl text-white mb-4">Consignes d'Utilisation</h2>
                        <p className="font-poppins text-[#FFFFFF] text-sm md:text-base">
                            Les consignes d’utilisation définissent les bonnes pratiques à suivre et les erreurs à éviter pour utiliser correctement tous les éléments visuels de votre marque. Elles garantissent que l’identité visuelle reste cohérente et professionnelle sur tous les supports, qu'ils soient imprimés ou numériques.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
