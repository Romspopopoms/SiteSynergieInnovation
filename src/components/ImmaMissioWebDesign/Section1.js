import React from 'react';


const Section1 = () => {
    return (
        <div className="fixed left-0 top-32 h-full w-[25%] bg-[#474747] flex-col justify-between items-start text-white p-8 hidden md:flex z-10">
            {/* Titre de la section */}
            <div className="w-full mb-8">
                <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-2 text-[#FFFDF5]">
                    Webdesign
                </h1>
                <p className="font-poppins text-lg md:text-xl leading-tight text-[#FFFDF5]">
                    Conception responsive et fonctionnelle pour tous vos besoins
                </p>
            </div>

            {/* Informations de contact */}
            <div className="w-full space-y-2 mb-8">
                <hr className="border-t border-white opacity-40 mb-2 z" />
                <p className="font-poppins text-sm md:text-base">Instagram</p>
                <hr className="border-t border-white opacity-40 mb-2" />
                <p className="font-poppins text-sm md:text-base">Email</p>
                <hr className="border-t border-white opacity-40" />
            </div>

            {/* Copyright */}
            <div className="w-full mb-32">
                <p className="font-poppins text-xs md:text-sm">
                    © Synergie Innovation 2024
                </p>
            </div>
        </div>
    );
};

export default Section1;
