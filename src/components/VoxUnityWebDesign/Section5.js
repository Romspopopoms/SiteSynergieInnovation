import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const offers = [
    {
        title: "Site Vitrine Onepage personnalisable",
        price: "600€",
        items: [
            "Une base de nombreux modèles personnalisables",
            "Tout en une page",
            "Conception Responsive Adaptée à Tous les Appareils",
            "Design Visuel Personnalisable adapté à votre entreprise",
            "Structure de Navigation Intuitive et Simple",
            "Création de Pages Clés (Accueil, Services, Événements, Contact, etc.)",
            "Intégration de Contenu Textuel et Visuel",
            "Optimisation SEO de Base pour Visibilité en Ligne",
            "Formulaire de Contact Fonctionnel pour vos Clients",
            "Hébergement et Configuration de Domaine Sécurisé",
            "Maintenance et Support Technique Adapté",
            "Sécurité SSL",
            "Mise en Ligne et Tests de Fonctionnalité"
        ]
    },
    {
        title: "Site Vitrine 5 pages personnalisable",
        price: "1500€",
        items: [
            "Une base de nombreux modèles personnalisables",
            "5 pages pour des projets plus ambitieux",
            "Conception Responsive Adaptée à Tous les Appareils",
            "Design Visuel Personnalisable adapté à votre entreprise",
            "Structure de Navigation Intuitive et Simple",
            "Création de Pages Clés (Accueil, Services, Équipe, Contact, etc.)",
            "Intégration de Contenu Textuel et Visuel",
            "Optimisation SEO de Base pour Visibilité en Ligne",
            "Formulaire de Contact Fonctionnel pour vos Clients",
            "Hébergement et Configuration de Domaine Sécurisé",
            "Maintenance et Support Technique Adapté",
            "Sécurité SSL",
            "Mise en Ligne et Tests de Fonctionnalité"
        ]
    },
    {
        title: "Site Vitrine OnePage personnalisé",
        price: "1500€",
        items: [
            "Concept et design fait 100% sur mesure",
            "Tout en une page",
            "Conception Responsive Adaptée à Tous les Appareils",
            "Design Visuel Personnalisé adapté à votre entreprise",
            "Structure de Navigation Intuitive et Simple",
            "Création de Pages Clés (Accueil, Services, Événements, Contact, etc.)",
            "Intégration de Contenu Textuel et Visuel Inspirant",
            "Optimisation SEO de Base pour Visibilité en Ligne",
            "Formulaire de Contact Fonctionnel pour vos Clients",
            "Hébergement et Configuration de Domaine Sécurisé",
            "Maintenance et Support Technique Adapté",
            "Sécurité SSL",
            "Mise en Ligne et Tests de Fonctionnalité"
        ]
    },
    {
        title: "Site Vitrine personnalisé",
        price: "3000€",
        items: [
            "Concept et design fait 100% sur mesure",
            "5 pages pour des projets ambitieux",
            "Conception Responsive Adaptée à Tous les Appareils",
            "Design Visuel Personnalisé adapté à votre entreprise",
            "Structure de Navigation Intuitive et Simple",
            "Création de Pages Clés (Accueil, Services, Équipe, Contact, etc.)",
            "Intégration de Contenu Textuel et Visuel Inspirant",
            "Optimisation SEO de Base pour Visibilité en Ligne",
            "Formulaire de Contact Fonctionnel pour vos Clients",
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
            "Design Visuel Personnalisé adapté à votre boutique en ligne",
            "Structure de Navigation Optimisée pour les Achats",
            "Création de Pages Clés (Accueil, Boutique, Catégories, Contact, etc.)",
            "Intégration d'un Catalogue de Produits",
            "Optimisation SEO de Base pour Visibilité en Ligne",
            "Configuration du Panier et Processus de Paiement Sécurisé",
            "Intégration des Réseaux Sociaux et Fonctionnalités de Partage",
            "Hébergement et Configuration de Domaine Sécurisé",
            "Maintenance et Support Technique Continu",
            "Sécurité Renforcée (SSL, Protection Contre les Fraudes)",
            "Mise en Ligne et Tests de Fonctionnalité"
        ]
    }
];

const Section5 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-16 px-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-12 max-w-[90%] xl:max-w-[80%]">
                {offers.slice(0, 4).map((offer, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between bg-transparent p-8 shadow-xl h-full"
                        style={{
                            backdropFilter: "blur(40px)",
                            borderRadius: "20px",
                            boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)"
                        }}>
                        <div>
                            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">{offer.title}</h2>
                            <h3 className="font-poppins font-semibold text-sm text-white">À partir de</h3>
                            <h4 className="font-poppins font-semibold text-white text-3xl md:text-4xl mb-4">{offer.price}</h4>
                        </div>
                        <ul className="flex-grow mt-8 space-y-4">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-white w-5 h-5" />
                                    <p className="text-white text-lg font-poppins">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 mb-4">
                            <a href="/Contact" className="bg-white text-[#8D1257] font-bold font-poppins py-2 px-6 rounded-full text-lg">
                                Demandez votre devis
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-12 max-w-[90%] xl:max-w-[40%] mt-4 md:mt-12 md:mx-auto">
                {offers.slice(4).map((offer, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between bg-transparent p-8 rounded-lg shadow-xl h-full"
                        style={{
                            backdropFilter: "blur(40px)",
                            borderRadius: "20px",
                            boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)"
                        }}>
                        <div>
                            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">{offer.title}</h2>
                            <h3 className="font-poppins font-semibold text-sm text-white">À partir de</h3>
                            <h4 className="font-poppins font-semibold text-white text-3xl md:text-4xl mb-4">{offer.price}</h4>
                        </div>
                        <ul className="flex-grow mt-8 space-y-4">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-white w-5 h-5" />
                                    <p className="text-white text-lg font-poppins">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 mb-4">
                            <a href="/Contact" className="bg-white text-[#8D1257] font-bold font-poppins py-2 px-6 rounded-full text-lg">
                                Demandez votre devis
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section5;
