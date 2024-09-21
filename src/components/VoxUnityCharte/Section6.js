import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const offers = [
    {
        title: "Votre charte graphique",
        price: "1000€",
        items: [
            "Palette de Couleurs",
            "Typographie",
            "Iconographie",
            "Photos et Illustrations",
            "Éléments Visuels Supplémentaires",
            "Consignes d'Utilisation",
            "Mise en Page et Grilles",
            "Guide de Style Complet"
        ]
    },
    {
        title: "Charte graphique et logo",
        price: "2000€",
        items: [
            "Brief client détaillé",
            "Recherche inspirationnelle",
            "Palette de Couleurs",
            "Typographie",
            "Esquisses initiales",
            "Sélection des concepts",
            "Vectorisation du logo",
            "Affinage des détails",
            "Iconographie",
            "Photos et Illustrations",
            "Éléments Visuels Supplémentaires",
            "Présentation au client",
            "Consignes d'Utilisation",
            "Mise en Page et Grilles",
            "Guide de Style Complet",
            "Livraison finale en JPEG, PNG, SVG, PDF"
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

const Section6 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
                {offers.map((offer, index) => (
                    <div 
                        key={index} 
                        className={`relative flex flex-col justify-between bg-transparent p-8 rounded-lg shadow-xl h-full ${index === 3 ? 'md:col-span-1 md:col-start-2' : ''}`}
                        style={{
                            backdropFilter: "blur(40px)",
                            borderRadius: "20px",
                            boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.2)"
                        }}>
                        <div className="flex flex-col">
                            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">{offer.title}</h2>
                            <h3 className="font-poppins font-semibold text-sm text-white">À partir de</h3>
                            <h4 className="font-poppins font-semibold text-white mb-4 text-3xl md:text-4xl">{offer.price}</h4>
                        </div>
                        <ul className="flex-grow">
                            {offer.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 mb-2">
                                    <FaCheckCircle className="text-white w-5 h-5" />
                                    <p className="text-white text-lg font-poppins">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 mb-4">
                            <a href="/Contact" className="bg-white text-[#8D1257] font-bold font-poppins py-2 px-6 rounded-full text-lg ">
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

export default Section6;
