import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const offers = [
    {
        title: "Site Vitrine personnalisable",
        price: "600€",
        items: [
            "Une base de nombreux modèles personnalisable",
            "Conception Responsive Adaptée à Tous les Appareils",
            "Design Visuel Personnalisable avec Esthétique Catholique",
            "Structure de Navigation Intuitive et Simple",
            "Création de Pages Clés (Accueil, Paroisse, Événements, Contact, etc.)",
            "Intégration de Contenu Textuel et Visuel",
            "Optimisation SEO de Base pour Visibilité en Ligne",
            "Formulaire de Contact Fonctionnel pour la Communauté",
            "Hébergement et Configuration de Domaine Sécurisé",
            "Maintenance et Support Technique Adapté",
            "Sécurité SSL",
            "Mise en Ligne et Tests de Fonctionnalité"
        ]
    },
    {
        title: "Site Vitrine personnalisé",
        price: "1500€",
        items: [
            "Concept et design fait 100% sur mesure",
            "Conception Responsive Adaptée à Tous les Appareils",
            "Design Visuel Personnalisé avec Esthétique Catholique",
            "Structure de Navigation Intuitive et Simple",
            "Création de Pages Clés (Accueil, Paroisse, Événements, Contact, etc.)",
            "Intégration de Contenu Textuel et Visuel inspirant",
            "Optimisation SEO de Base pour Visibilité en Ligne",
            "Formulaire de Contact Fonctionnel pour la Communauté",
            "Hébergement et Configuration de Domaine Sécurisé",
            "Maintenance et Support Technique Adapté",
            "Sécurité SSL",
            "Mise en Ligne et Tests de Fonctionnalité"
        ]
    },
    {
        title: "Site E-Commerce",
        price: "3000€",
        items: [
            "Conception Responsive Adaptée à Tous les Appareils",
            "Design Visuel Personnalisé avec Esthétique Catholique",
            "Structure de Navigation Optimisée pour les Achats",
            "Création de Pages Clés (Accueil, Boutique, Catégories, Contact, etc.)",
            "Intégration d'un Catalogue de Produits",
            "Optimisation SEO de Base pour Visibilité en Ligne",
            "Configuration du Panier et Processus de Paiement Sécurisé",
            "Intégration des Réseaux Sociaux et Fonctionnalités de Partage",
            "Gestion des Stocks et Système de Commande Automatisé",
            "Hébergement et Configuration de Domaine Sécurisé",
            "Maintenance et Support Technique Continu",
            "Sécurité Renforcée (SSL, Protection Contre les Fraudes)",
            "Mise en Ligne et Tests de Fonctionnalité"
        ]
    }
];

const Section6 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-[90%] md:max-w-[80%]">
                {offers.slice(0, 2).map((offer, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between bg-[#FFFFFF] p-8 shadow-xl h-full">
                        <div>
                            <h2 className="font-dmserif font-medium text-lg text-[#474747] mb-4">{offer.title}</h2>
                            <h3 className="font-dmserif font-medium text-sm text-[#474747] ">À partir de</h3>
                            <h4 className="font-dmserif font-medium  text-[#474747] text-6xl leading-none">{offer.price}</h4>
                        </div>
                        <ul className="flex-grow mt-8 space-y-4">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-[#474747] min-w-6 min-h-6" />
                                    <p className="text-[#474747] text-lg font-dmserif font-light">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 mb-4">
                            <a href="/Contact" className="bg-white text-[#474747] font-dmserif font-medium py-2 px-6 text-lg border-2 border-[#474747]">
                                Demandez votre devis
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-12 max-w-[90%] md:max-w-[40%] mt-4 md:mt-12">
                {offers.slice(2).map((offer, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between bg-[#FFFFFF] p-8 rounded-lg shadow-xl h-full">
                        <div>
                            <h2 className="font-dmserif font-medium text-lg text-[#474747] mb-4">{offer.title}</h2>
                            <h3 className="font-dmserif font-medium  text-[#474747] text-sm leading-none">À partir de</h3>
                            <h4 className="font-dmserif font-medium  text-[#474747] text-6xl leading-[-2px]">{offer.price}</h4>
                        </div>
                        <ul className="flex-grow mt-8 space-y-4">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-[#474747] min-w-6 min-h-6" />
                                    <p className="text-[#474747] text-lg font-dmserif font-light ">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 mb-4">
                            <a href="/Contact" className="bg-white text-[#474747] font-dmserif font-medium py-2 px-6 text-lg border-2 border-[#474747]">
                                Demandez votre devis
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section6;
