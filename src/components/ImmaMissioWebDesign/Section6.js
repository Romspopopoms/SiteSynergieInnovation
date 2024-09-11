import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const offers = [
    {
        title: "Site Vitrine personnalisable",
        price: "À partir de 600€",
        items: [
            "Une base de nombreux modèles personnalisables",
            "Conception Responsive adaptée à tous les appareils",
            "Design visuel personnalisable avec esthétique catholique",
            "Structure de navigation intuitive et simple",
            "Création de pages clés (Accueil, Paroisses, Événements, Contact, etc.)",
            "Intégration de contenu textuel et visuel",
            "Optimisation SEO de base pour visibilité en ligne",
            "Formulaire de contact fonctionnel pour la communauté",
            "Hébergement et configuration de domaine sécurisé",
            "Maintenance et support technique adapté",
            "Sécurité SSL",
            "Mise en ligne et tests de fonctionnalité"
        ]
    },
    {
        title: "Site Vitrine personnalisé",
        price: "À partir de 1500€",
        items: [
            "Concept et design fait 100% sur mesure",
            "Conception Responsive adaptée à tous les appareils",
            "Design visuel personnalisé avec esthétique catholique",
            "Structure de navigation intuitive et simple",
            "Création de pages clés (Accueil, Paroisses, Événements, Contact, etc.)",
            "Intégration de contenu textuel et visuel inspirant",
            "Optimisation SEO de base pour visibilité en ligne",
            "Formulaire de contact fonctionnel pour la communauté",
            "Hébergement et configuration de domaine sécurisé",
            "Maintenance et support technique adapté",
            "Sécurité SSL",
            "Mise en ligne et tests de fonctionnalité"
        ]
    },
    {
        title: "Site E-Commerce",
        price: "À partir de 3000€",
        items: [
            "Conception Responsive adaptée à tous les appareils",
            "Design visuel personnalisable avec esthétique catholique",
            "Structure de navigation optimisée pour les achats",
            "Création de pages clés (Accueil, Boutique, Catégories, Contact, etc.)",
            "Intégration d’un catalogue de produits",
            "Optimisation SEO de base pour visibilité en ligne",
            "Configuration du panier et processus de paiement sécurisé",
            "Intégration des réseaux sociaux et fonctionnalités de partage",
            "Gestion des stocks et système de commande automatisé",
            "Hébergement et configuration de domaine sécurisé",
            "Maintenance et support technique continu",
            "Sécurité renforcée (SSL, protection contre les fraudes)",
            "Mise en ligne et tests de fonctionnalité"
        ]
    }
];

const Section6 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-16 px-4">
            {/* Centrage des deux premières cartes en haut */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
                {offers.slice(0, 2).map((offer, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between bg-[#FFFFFF] p-8 rounded-lg shadow-xl h-full"
                        style={{ boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)" }}
                    >
                        <div>
                            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#474747] mb-4">{offer.title}</h2>
                            <h3 className="font-poppins font-semibold text-3xl md:text-4xl text-[#474747] mb-4">{offer.price}</h3>
                        </div>
                        <ul className="flex-grow">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-[#474747]" style={{ width: "20px", height: "20px" }} /> {/* Taille uniforme des icônes */}
                                    <p className="text-[#474747] text-lg font-poppins">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 mb-4">
                            <a href="/Contact" className="bg-white text-[#474747] font-DmSerif py-2 px-6 text-lg border-2 border-[#474747]">
                                Demandez votre devis
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Centrage de la troisième carte en bas */}
            <div className="flex justify-center mt-12 w-full max-w-lg">
                {offers.slice(2).map((offer, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between bg-[#FFFFFF] p-8 rounded-lg shadow-xl h-full"
                        style={{ boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)" }}
                    >
                        <div>
                            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#474747] mb-4">{offer.title}</h2>
                            <h3 className="font-poppins font-semibold text-3xl md:text-4xl text-[#474747] mb-4">{offer.price}</h3>
                        </div>
                        <ul className="flex-grow">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-[#474747]" style={{ width: "20px", height: "20px" }} /> {/* Taille uniforme des icônes */}
                                    <p className="text-[#474747] text-lg font-poppins">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 mb-4">
                            <a href="/Contact" className="bg-white text-[#474747] font-DmSerif py-2 px-6 text-lg border-2 border-[#474747]">
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
