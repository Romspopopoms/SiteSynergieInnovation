import React from "react";
import Image1 from "../../assets/mockupflyer.webp";  // L'image principale du haut
import Image2 from "../../assets/mockuppanneau.webp";  // Une des images en dessous
import Image3 from "../../assets/mockuppull.webp";         // L'autre image en dessous
import Flou from "../../assets/flou.webp"
const Section8 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-0 mb-8">
            {/* Titre de la section */}
            <h1 className="font-dmserif font-medium text-4xl md:text-7xl text-[#474747] text-center mb-8">
                Branding de votre marque
            </h1>

            {/* Bloc contenant l'image principale et les deux images en dessous */}
            <div className="w-full max-w-6xl mx-auto">
                {/* Image principale (rectangulaire et bien centrée) */}
                <div className="w-full mb-8">
                    <img 
                        src={Image1} 
                        alt="Branding principal" 
                        className="w-full h-auto shadow-lg object-cover max-h-[770px]" 
                    />
                </div>

                {/* Les deux images en dessous */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full">
                        <img 
                            src={Image2} 
                            alt="Branding 1" 
                            className="w-full h-full shadow-lg object-cover"
                        />
                    </div>
                    <div 
                    className="w-full object-cover"
                    style={{ backgroundImage: `url(${Flou})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <img 
                            src={Image3} 
                            alt="Branding 2" 
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Bloc contenant les textes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
                {/* Colonne de gauche : Texte sur le branding */}
                <div className="flex flex-col justify-center items-start text-center md:text-left md:min-h-[300px]">
                    <h2 className="font-dmserif font-medium text-2xl md:text-5xl text-[#474747] mb-4">Le branding ?</h2>
                    <p className="font-dmserif text-[#474747] text-sm md:text-base max-w-[90%] md:max-w-[400px]">
                        Votre branding, c’est l’ensemble des éléments qui définissent l’identité de votre entreprise. Cela inclut votre logo, vos couleurs, votre typographie, et le ton de votre communication. C’est ce qui permet à vos clients de vous reconnaître et de se rappeler de vous. Un bon branding reflète les valeurs de votre entreprise et crée une connexion émotionnelle avec votre audience.
                    </p>
                </div>

                {/* Colonne de droite : Texte sur les supports */}
                <div className="flex flex-col justify-center items-start text-center md:text-left md:min-h-[300px]w-full">
                    <h2 className="font-dmserif font-medium text-2xl md:text-5xl text-[#474747] mb-4">Les supports</h2>
                    <p className="font-dmserif text-[#474747] text-sm md:text-base max-w-[90%] md:max-w-[400px]">
                        Pour maximiser l’impact de votre branding, il doit être présent partout où votre entreprise est visible. Cela inclut votre site web, vos réseaux sociaux, vos cartes de visites, vos brochures, vos emballages, vos vêtements personnalisés, vos affiches publicitaires, et même votre signalétique. Chaque support est une opportunité de renforcer votre image de marque et de rester cohérent dans la manière dont vous vous présentez au monde.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section8;
