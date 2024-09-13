import React from "react";
import CodeImage from "../../assets/Code1.webp";  // Remplacer par l'image de code

const Section7 = () => {
    return (
        <div className="bg-[#FFFBED] w-full py-16 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-8">
                {/* Section gauche avec le visuel de code */}
                <div className="flex justify-center items-center">
                    <img src={CodeImage} alt="Code Snippet" className="w-full h-auto object-contain shadow-lg" /> {/* Image de code */}
                </div>

                {/* Section droite avec le texte descriptif */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-3xl md:text-5xl font-dmserif text-[#474747] mb-6">Programmation Web Complète</h3>
                    <p className="text-xl font-jost text-[#474747] mb-6">
                        Nous concevons et programmons nous-mêmes nos sites web pour vous garantir une qualité irréprochable, 100% made in France.
                        Grâce à notre expertise en développement sur mesure, nous créons des sites performants et adaptés à vos besoins, tout en respectant les standards de qualité et d’élégance à la française.
                    </p>
                    <button className="border-2 border-black px-4 py-2 font-jost max-w-[50%] mx-auto">En savoir plus</button>
                </div>
            </div>
        </div>
    );
};

export default Section7;
