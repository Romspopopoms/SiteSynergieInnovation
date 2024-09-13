import React from 'react';


const Section1 = () => {
    return (
        <div className="fixed left-0 top-16 h-full w-[25%] bg-[#474747] flex-col justify-between items-start text-white p-8 hidden md:flex z-10">
            {/* Titre de la section */}
            <div className="w-full mb-8 mt-16">
                <h1 className="font-dmserif font-medium text-4xl md:text-6xl mb-2 text-[#FFFDF5]">
                    Webdesign.
                </h1>
                <p className="font-jost font-light text-lg md:text-xl leading-tight text-[#FFFDF5]">
                    Conception responsive et fonctionnelle pour tous vos besoins
                </p>
            </div>

            {/* Informations de contact */}
            <div className="w-full space-y-2 mb-16">
                <p className="font-dmserif font-light text-lg md:text-base">Instagram</p>
                <hr className="border-t border-white opacity-40 mb-2" />
                <p className="font-dmserif font-light text-lg md:text-base">Email</p>
                <hr className="border-t border-white opacity-40" />
                <p className="font-dmserif font-light text-lg md:text-base">
                    © Synergie Innovation 2024
                </p>
            </div>
        </div>
    );
};

export default Section1;
