import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DirectorServices = [
    { name: "Analyse des Objectifs de Communication" },
    { name: "Étude du Marché et Concurrence" },
    { name: "Définition de la Stratégie de Communication" },
    { name: "Élaboration du Message et Positionnement" },
    { name: "Planification des Actions de Communication" },
    { name: "Sélection et Gestion des Canaux de Communication" },
    { name: "Coordination de la Création de Contenu" },
    { name: "Mise en Œuvre des Campagnes" },
    { name: "Suivi et Analyse des Résultats" },
    { name: "Gestion de la Réputation en Ligne" },
    { name: "Supervision et Gestion d'Équipe" },
    { name: "Support Stratégique Continu" },
];

const ManagerServices = [
    { name: "Gestion des Réseaux Sociaux" },
    { name: "Animation de la Communauté en Ligne" },
    { name: "Réponse aux Commentaires et Messages" },
    { name: "Surveillance et Modération des Discussions" },
    { name: "Veille des Tendances et Concurrence" },
    { name: "Gestion de la Réputation en Ligne" },
    { name: "Développement de Stratégies d'Engagement" },
    { name: "Organisation de Concours et Campagnes Interactives" },
    { name: "Analyse des Performances et Reporting" },
    { name: "Coordination avec les Équipes Marketing" },
    { name: "Support Continu et Réactivité" },
];

const Section4 = () => {
    return (
        <div className="flex justify-center items-center w-full py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:max-w-[65%] px-4">
                
                {/* Colonne gauche - Directeur de Communication */}
                <div className="flex flex-col justify-between bg-transparent p-8 rounded-lg shadow-xl h-full"
                    style={{
                        backdropFilter: "blur(100px)",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",  
                    }}>
                    <div className="flex flex-col items-start">
                        <div className="min-h-[100px]">
                            <h1 className="font-poppins font-semibold text-[#ffffff] text-2xl md:text-xl">Directeur de Communication</h1>
                            <h2 className="font-poppins font-bold text-[#ffffff] text-xl md:text-2xl mt-4">À partir de</h2>
                            <span className="text-4xl md:text-5xl font-poppins font-bold text-white">3000€</span>
                        </div>

                        {/* Liste des services pour Directeur de Communication */}
                        <div className="mt-6 flex-grow">
                            {DirectorServices.map((item, index) => (
                                <div key={index} className="flex items-center space-x-2 mt-8">
                                    <FaCheckCircle className="text-[#FFFFFF] w-5 h-5" />
                                    <p className="text-white text-lg font-poppins">{item.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bouton pour devis */}
                        <div className="mt-8">
                            <a
                                href="/Contact"
                                className="bg-transparent border-2 border-[#FFFFFF] font-poppins font-bold bg-white text-[#8D1257] rounded-full py-2 px-8"
                            >
                            Demandez votre devis
                            </a>
                        </div>
                    </div>
                </div>

                {/* Colonne droite - Community Manager */}
                <div className="flex flex-col justify-between bg-transparent p-8 rounded-lg shadow-xl h-full"
                    style={{
                        backdropFilter: "blur(100px)",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",  
                    }}>
                    <div className="flex flex-col items-start">
                        <div className="min-h-[100px]">
                            <h1 className="font-poppins font-semibold text-[#ffffff] text-2xl md:text-xl">Community Manager</h1>
                            <h2 className="font-poppins font-bold text-[#ffffff] text-xl md:text-2xl mt-4">À partir de</h2>
                            <span className="text-4xl md:text-5xl font-poppins font-bold text-white">800€/mois</span>
                        </div>

                        {/* Liste des services pour Community Manager */}
                        <div className="mt-6 flex-grow">
                            {ManagerServices.map((item, index) => (
                                <div key={index} className="flex items-center space-x-2 mt-8">
                                    <FaCheckCircle className="text-[#FFFFFF] w-5 h-5" />
                                    <p className="text-white text-lg font-poppins">{item.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bouton pour devis */}
                        <div className="mt-8">
                            <a
                                href="/Contact"
                                className="bg-transparent border-2 border-[#FFFFFF] font-poppins font-bold bg-white text-[#8D1257] rounded-full py-2 px-8"
                            >
                            Demandez votre devis
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
