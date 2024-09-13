import React from "react";
import Ima1 from '../../assets/SainteVierge.webp';
import SiteParoisse from '../../assets/siteparoiseetel.webp';

const Section1 = () => {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-[#FFFBED] px-4 md:px-12 lg:px-20 py-8">
            {/* Titre */}
            <div className="text-center mb-8 mt-20 md:mt-40">
                <h1 className="text-[#474747] font-dmserif font-medium text-3xl md:text-7xl">
                    Des solutions numériques
                </h1>
                <p className="text-[#474747] font-jost font-medium text-xl md:text-3xl mt-2">
                    Au service de l'Eglise
                </p>
            </div>
            
            {/* Conteneur principal */}
            <div className="relative w-full max-w-4xl aspect-square">
                {/* Image de la vierge */}
                <div className="w-full h-full overflow-hidden shadow-lg">
                    <img 
                        src={Ima1} 
                        alt="Statue de la Vierge" 
                        className="w-full h-full object-cover shadow-lg"
                    />
                </div>
                
                {/* Image de la paroisse */}
                <div className="absolute bottom-[-30px] left-[-10px] md:bottom-[-80px] md:left-[-80px] w-1/3 max-w-[250px]">
                    <div className="shadow-lg">
                        <img 
                            src={SiteParoisse} 
                            alt="Site de la paroisse" 
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;