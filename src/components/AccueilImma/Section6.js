import React from "react";
import Mockup from "../../assets/mockupflyer.webp";  // Image de fond

const Section6 = () => {
    return (
        <div 
            className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${Mockup})` }}
        >
            {/* Overlay pour obscurcir légèrement l'image de fond */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            {/* Texte centré */}
            <div className="relative z-10 text-white px-8 max-w-[80%] md:max-w-[40%]">
                <h2 className="text-4xl md:text-6xl font-dmserif mb-4 font-medium text-[#FFFDF5]">Branding</h2>
                <p className="text-md md:text-lg font-jost">
                    Nous préparons des designs uniques pour tous vos supports de communication : flyers, affiches, pulls, t-shirts, et plus encore.
                    Faites briller votre entreprise avec une identité visuelle forte et cohérente, prête à marquer les esprits !
                </p>
            </div>
        </div>
    );
};

export default Section6;
