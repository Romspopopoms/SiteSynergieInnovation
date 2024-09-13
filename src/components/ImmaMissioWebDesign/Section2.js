import React from 'react';
import Paroisse from "../../assets/fondpc.webp"; // Assurez-vous que l'image est bien dans ce chemin

const Section2 = () => {
    return (
        <section className="relative min-h-[695px] w-full flex items-center justify-end">
            {/* Image de fond floutée */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${Paroisse})` }}
            />

            {/* Contenu textuel */}
            <div className="relative z-10 w-full  p-8 text-white text-right">
                <h1 className="text-5xl md:text-6xl font-dmserif font-medium leading-tight mb-4">
                    Création de <br /> Sites Web <br /> Sur-Mesure.
                </h1>
                <p className="text-lg md:text-xl font-jost font-light leading-relaxed">
                    Transformez votre présence en ligne avec un design attrayant et fonctionnel.
                </p>
            </div>
        </section>
    );
};

export default Section2;
