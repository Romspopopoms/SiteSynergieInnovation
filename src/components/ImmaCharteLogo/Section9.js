import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const offers = [
    {
        title: "Logo simple",
        price: "À partir de 600€",
        items: [
            "Brief client détaillé",
            "Recherche inspirationnelle",
            "Esquisses initiales",
            "Sélection des concepts",
            "Vectorisation du logo",
            "Affinage des détails",
            "Présentation au client",
            "Livraison finale rapide en JPEG, PNG, SVG, PDF"
        ]
    },
    {
        title: "Logo Complexe",
        price: "À partir de 1000€",
        items: [
            "Analyse approfondie",
            "Étude du marché",
            "Recherche inspirationnelle",
            "Mood board personnalisé",
            "Exploration créative",
            "Esquisses initiales",
            "Itérations multiples",
            "Tests de variations",
            "Vectorisation du logo",
            "Affinage des détails",
            "Guide de style complet",
            "Support post-lancement",
            "Livraison finale en JPEG, PNG, SVG, PDF",
        ]
    },
    {
        title: "Votre charte graphique",
        price: "À partir de 600€",
        items: [
            "Palette de Couleurs",
            "Typographie",
            "Iconographie",
            "Photos et Illustrations",
            "Éléments Visuels Supplémentaires",
            "Consignes d'Utilisation",
            "Mise en Page et Grilles",
            "Guide de Style Complet",
        ]
    },
    {
        title: "Prestation photo",
        price: "400€/demi-journée",
        items: [
            "Demi-journée de shooting",
            "Traitement des images",
            "Style à votre image",
            "Livraison finale en JPEG"
        ]
    },
    {
        title: "Prestation drone",
        price: "800€/demi-journée",
        items: [
            "Shooting photo",
            "Traitement des images",
            "Style à votre image",
            "Livraison finale en JPEG"
        ],
        note: "Sous condition d'autorisation de vol"
    }
];

const Section9 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
                {/* Affichage des trois premières cartes */}
                {offers.slice(0, 3).map((offer, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between bg-[#FFFFFF] bg-opacity-45 p-8 rounded-lg shadow-xl h-full"
                        style={{
                            boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)"
                        }}>
                        <div>
                            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#474747] mb-4">{offer.title}</h2>
                            <h3 className="font-poppins font-semibold text-3xl md:text-4xl text-[#474747] mb-4">À partir de <span>{offer.price}</span></h3>
                        </div>
                        <ul className="flex-grow">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-[#474747] w-5 h-5" />
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

            {/* Les deux cartes du bas centrées horizontalement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-3xl mt-12">
                {offers.slice(3).map((offer, index) => (
                    <div 
                        key={index} 
                        className="relative flex flex-col justify-between bg-[#FFFFFF] bg-opacity-45 p-8 rounded-lg shadow-xl h-full"
                        style={{
                            boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)"
                        }}>
                        <div>
                            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#474747] mb-4">{offer.title}</h2>
                            <h3 className="font-poppins font-semibold text-3xl md:text-4xl text-[#474747] mb-4">À partir de <span>{offer.price}</span></h3>
                        </div>
                        <ul className="flex-grow">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-[#474747] w-5 h-5" />
                                    <p className="text-[#474747] text-lg font-poppins">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 mb-4">
                            <a href="/Contact" className="bg-white text-[#474747] font-DmSerif py-2 px-6 text-lg border-2 border-[#474747]">
                                Demandez votre devis
                            </a>
                        </div>
                        {offer.note && (
                            <p className="absolute bottom-2 right-4 text-xs text-white">
                                {offer.note}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section9;
