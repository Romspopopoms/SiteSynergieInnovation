import React from 'react';
import Background from "../assets/Bg2.webp";
import LogoSynergie from "../assets/V4 simple W.svg";

const Loader = () => {
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="animate-spin-slow h-32 w-32 sm:h-48 sm:w-48">
                <img src={LogoSynergie} alt="Loading..." className="h-full w-full object-contain" />
            </div>
        </div>
    );
};

export default Loader;
