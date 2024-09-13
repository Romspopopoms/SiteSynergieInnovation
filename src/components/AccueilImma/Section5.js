import React from "react";
import Messe from "../../assets/ImageMesse.webp";  // Image pour la photographie
import Drone from "../../assets/PhotoDrone.webp";  // Image pour le drone

const Section5 = () => {
    return (
        <div className="bg-[#FFFBED] w-full py-16 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-8">
                {/* Photographie Section */}
                <div className="flex flex-col items-start">
                    <img src={Messe} alt="Photographie" className="w-full h-auto object-cover aspect-square" /> {/* Image carrée sans border-radius */}
                    <h3 className="text-3xl font-dmserif text-[#474747] mt-6 text-left">Photographie</h3> {/* Alignement à gauche */}
                    <p className="text-md font-jost text-[#474747] mt-4 text-left">
                        Immortalisez vos événements et valorisez votre institution avec des visuels percutants qui enrichissent votre communication et captivent votre communauté grâce à une prestation photographique professionnelle.
                    </p>
                    <a href="/">
                    <button className="mt-8 border-2 border-black px-4 py-2 font-jost text-left">En savoir plus</button> {/* Bouton aligné à gauche */}
                    </a>
                </div>

                {/* Télépilote Drone Section */}
                <div className="flex flex-col items-start">
                    <img src={Drone} alt="Télépilote drone" className="w-full h-auto object-cover aspect-square" /> {/* Image carrée sans border-radius */}
                    <h3 className="text-3xl font-dmserif text-[#474747] mt-6 text-left">Télépilote drone</h3> {/* Alignement à gauche */}
                    <p className="text-md font-jost text-[#474747] mt-4 text-left">
                        Capturez des images uniques et spectaculaires pour mettre en valeur votre institution. Nos drones offrent une perspective aérienne innovante pour dynamiser votre communication visuelle.
                    </p>
                    <a href="/">
                    <button className="mt-8 border-2 border-black px-4 py-2 font-jost text-left">En savoir plus</button> {/* Bouton aligné à gauche */}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section5;
