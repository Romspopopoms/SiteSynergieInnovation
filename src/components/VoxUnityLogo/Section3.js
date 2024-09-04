import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Menu1 = [
    { name: "Brief client détaillé" },
    { name: "Recherche inspirationnelle" },
    { name: "Esquisses initiales" },
    { name: "Sélection des concepts" },
    { name: "Vectorisation du logo" },
    { name: "Affinage des détails" },
    { name: "Présentation au client" },
    { name: "Livraison finale rapide en JPEG, PNG, SVG, PDF" },
];

const Menu2 = [
    { name: "Analyse approfondie" },
    { name: "Étude du marché" },
    { name: "Recherche inspirationnelle" },
    { name: "Mood board personnalisé" },
    { name: "Exploration créative" },
    { name: "Esquisses initiales" },
    { name: "Itérations multiples" },
    { name: "Tests de variations" },
    { name: "Vectorisation du logo" },
    { name: "Affinage des détails" },
    { name: "Guide de style complet" },
    { name: "Support post-lancement" },
    { name: "Livraison finale en JPEG, PNG, SVG, PDF" },
];

const Section3 = () => {
    return (
        <div className="flex justify-center items-center w-full py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:max-w-[65%] px-4">
                
                {/* Colonne gauche (Logo Simple) */}
                <div className="flex flex-col justify-between bg-transparent p-8 rounded-lg shadow-xl h-full"
                    style={{
                        backdropFilter: "blur(100px)",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 5px 0px #FFFFFF",  // Application de l'ombre
                    }}>
                    <div className="flex flex-col items-start">
                        <h1 className="font-poppins font-semibold text-[#ffffff] text-2xl md:text-3xl">Logo Simple</h1>
                        <h2 className="font-poppins font-bold text-[#ffffff] text-xl md:text-2xl mt-4">À partir de</h2>
                        <span className="text-4xl md:text-5xl font-poppins font-bold text-white">1000€</span>
                    </div>

                    {/* Liste des services pour Logo Simple */}
                    <div className="mt-6 flex-grow">
                        {Menu1.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 my-2">
                                <FaCheckCircle className="text-[#FFFFFF] w-5 h-5" />
                                <p className="text-white text-lg font-poppins">{item.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bouton pour contacter */}
                    <div className="mt-8">
                        <a
                            href="/Contact"
                            className="bg-transparent border-2 border-[#FFFFFF] font-poppins font-bold bg-white text-[#8D1257] rounded-full py-2 px-8"
                        >
                        Demander votre devis
                        </a>
                    </div>
                </div>

                {/* Colonne droite (Logo Premium) */}
                <div className="flex flex-col justify-between bg-transparent p-8 rounded-lg shadow-xl h-full"
                    style={{
                        backdropFilter: "blur(100px)",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 5px 0px #FFFFFF",  // Application de l'ombre
                    }}>
                    <div className="flex flex-col items-start">
                        <h1 className="font-poppins font-semibold text-[#ffffff] text-2xl md:text-3xl">Logo Premium</h1>
                        <h2 className="font-poppins font-bold text-[#ffffff] text-xl md:text-2xl mt-4">À partir de</h2>
                        <span className="text-4xl md:text-5xl font-poppins font-bold text-white">2000€</span>
                    </div>

                    {/* Liste des services pour Logo Premium */}
                    <div className="mt-6 flex-grow">
                        {Menu2.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 my-2">
                                <FaCheckCircle className="text-[#FFFFFF] w-5 h-5" />
                                <p className="text-white text-lg font-poppins">{item.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bouton pour contacter */}
                    <div className="mt-8">
                        <a
                            href="/Contact"
                            className="bg-transparent border-2 border-[#FFFFFF] font-poppins font-bold bg-white text-[#8D1257] rounded-full py-2 px-8"
                        >
                            Demander votre devis
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
