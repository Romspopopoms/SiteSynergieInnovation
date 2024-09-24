import React from 'react';
import VoxUnityLogo from "../../assets/Logo vox W.svg";

const Section1 = () => {
    return (
        <div className="fixed left-0 top-0 h-full w-[25%] bg-transparent flex-col justify-between items-start text-white p-8 hidden xl:flex">
            {/* Titre de la section */}
            <div className="w-full mb-8 mt-24">
                <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-2">
                    Webdesign<span className='text-[#8D1257]'>.</span>
                </h1>
                <p className="font-poppins text-lg md:text-xl leading-tight">
                    Conception responsive et fonctionnelle pour tous vos besoins
                </p>
            </div>

            {/* Logos partenaires */}
            <div className="flex justify-center items-end space-x-4 w-full ">
                <img src={VoxUnityLogo} alt="Vox Unity Logo" className="w-24 md:w-28" />
            </div>

            {/* Informations de contact */}
            <div className="w-full space-y-2 mb-8">
                <p className="font-poppins text-sm md:text-base">Instagram</p>
                <hr className="border-t border-white opacity-40 mb-2" />
                <p className="font-poppins text-sm md:text-base">Email</p>
                <hr className="border-t border-white opacity-40" />
            </div>

            {/* Copyright */}
            <div className="w-full">
                <p className="font-poppins text-xs md:text-sm">
                    © Synergie Innovation 2024
                </p>
            </div>
        </div>
    );
};

export default Section1;
