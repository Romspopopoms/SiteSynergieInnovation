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

const Section5 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-[90%] md:max-w-[80%]">
                {/* Colonne gauche - Directeur de Communication */}
                <div className="relative flex flex-col justify-between bg-[#FFFFFF] p-8 shadow-xl h-full">
                    <div>
                        <h2 className="font-dmserif font-medium text-lg text-[#474747] mb-4">Directeur de Communication</h2>
                        <h3 className="font-dmserif font-medium text-sm text-[#474747] ">À partir de</h3>
                        <h4 className="font-dmserif font-medium  text-[#474747] text-6xl leading-none">3000€</h4>
                    </div>
                    <ul className="flex-grow mt-8 space-y-4">
                        {DirectorServices.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2 mb-2">
                                <FaCheckCircle className="text-[#474747] min-w-6 min-h-6" />
                                <p className="text-[#474747] text-lg font-dmserif font-light">{item.name}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 mb-4">
                        <a href="/Contact" className="bg-white text-[#474747] font-dmserif font-medium py-2 px-6 text-lg border-2 border-[#474747]">
                            Demandez votre devis
                        </a>
                    </div>
                </div>

                {/* Colonne droite - Community Manager */}
                <div className="relative flex flex-col justify-between bg-[#FFFFFF] p-8 shadow-xl h-full">
                    <div>
                        <h2 className="font-dmserif font-medium text-lg text-[#474747] mb-4">Community Manager</h2>
                        <h3 className="font-dmserif font-medium text-sm text-[#474747] ">À partir de</h3>
                        <h4 className="font-dmserif font-medium  text-[#474747] text-6xl leading-none">800€/mois</h4>
                    </div>
                    <ul className="flex-grow mt-8 space-y-4">
                        {ManagerServices.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2 mb-2">
                                <FaCheckCircle className="text-[#474747] min-w-6 min-h-6" />
                                <p className="text-[#474747] text-lg font-dmserif font-light">{item.name}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 mb-4">
                        <a href="/Contact" className="bg-white text-[#474747] font-dmserif font-medium py-2 px-6 text-lg border-2 border-[#474747]">
                            Demandez votre devis
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;
