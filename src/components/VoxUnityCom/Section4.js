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
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 w-full max-w-6xl px-4">
                
                {/* Colonne gauche - Directeur de Communication */}
                <div className="flex flex-col justify-between bg-transparent p-8 rounded-lg shadow-xl h-full"
                    style={{
                        backdropFilter: "blur(100px)",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)",
                    }}>
                    <div className="flex flex-col items-start justify-between h-full">
                        <div>
                            <h1 className="font-poppins font-semibold text-[#ffffff] text-2xl md:text-3xl">Directeur de Communication</h1>
                            <h2 className="font-poppins font-bold text-[#ffffff] text-lg mt-4">À partir de</h2>
                            <span className="text-4xl md:text-5xl font-poppins font-bold text-white">3000€</span>
                        </div>

                        {/* Liste des services pour Directeur de Communication */}
                        <ul className="mt-6 flex-grow space-y-4">
                            {DirectorServices.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <FaCheckCircle className="text-[#FFFFFF] w-5 h-5" />
                                    <p className="text-white text-lg font-poppins">{item.name}</p>
                                </li>
                            ))}
                        </ul>

                        {/* Bouton pour devis */}
                        <div className="mt-8">
                            <a
                                href="/Contact"
                                className="bg-white text-[#8D1257] font-bold font-poppins py-2 px-6 rounded-full text-lg border-2 border-[#FFFFFF]"
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
                        boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)",
                    }}>
                    <div className="flex flex-col items-start justify-between h-full">
                        <div>
                            <h1 className="font-poppins font-semibold text-[#ffffff] text-2xl md:text-3xl">Community Manager</h1>
                            <h2 className="font-poppins font-bold text-[#ffffff] text-lg mt-4">À partir de</h2>
                            <span className="text-4xl md:text-5xl font-poppins font-bold text-white">800€/mois</span>
                        </div>

                        {/* Liste des services pour Community Manager */}
                        <ul className="mt-6 flex-grow space-y-4">
                            {ManagerServices.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <FaCheckCircle className="text-[#FFFFFF] w-5 h-5" />
                                    <p className="text-white text-lg font-poppins">{item.name}</p>
                                </li>
                            ))}
                        </ul>

                        {/* Bouton pour devis */}
                        <div className="mt-8">
                            <a
                                href="/Contact"
                                className="bg-white text-[#8D1257] font-bold font-poppins py-2 px-6 rounded-full text-lg border-2 border-[#FFFFFF]"
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
