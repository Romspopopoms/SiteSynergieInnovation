import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/V4longW.svg";


const Menu = [
    { name: "Hub", href: "/" },
    { name: "Synergie", href: "/SynergieInnovation" },
    { name: "VoxUnity", href: "/VoxUnity" },
    { name: "ImmaMissio", href: "/Accueil" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth",
                });
                setIsOpen(false); // Ferme le menu après sélection
            }
        } else {
            setIsOpen(false); // Ferme le menu après sélection pour l'accueil
        }
    };

    return (
        <div className="w-full absolute top-0 left-0 z-50 bg-transparent">
            <div className="relative flex justify-between items-center min-h-20 px-4 sm:px-8">
                {/* Logo à gauche */}
                <a href="/Contact" className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2">
                    <img src={Logo} alt="Logo" className="h-10 sm:h-12" />
                </a>
                {/* Menu centré */}
                <div className="flex-grow flex justify-center">
                    <ul className="hidden md:flex space-x-4 sm:space-x-8">
                        {Menu.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-white text-sm sm:text-lg font-medium hover:text-gray-300 transition-colors duration-200"
                                    onClick={(e) => handleScroll(e, item.href)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Bouton hamburger pour les petits écrans */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <FaBars className="h-6 w-6" />
                    </button>
                </div>
            </div>
            {/* Menu déroulant pour petits écrans */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 text-white">
                    <ul className="flex flex-col space-y-2 p-4">
                        {Menu.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200"
                                    onClick={(e) => handleScroll(e, item.href)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent my-0" />
        </div>
    );
};

export default Navbar