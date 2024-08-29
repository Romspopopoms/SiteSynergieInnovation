import React, { useState } from "react";
import Logo from "../assets/V4longW.svg";
import BG from "../assets/Bglandinghome.png";
import { FaBars } from "react-icons/fa"; // Pour l'icône du menu hamburger
import { HiPaintBrush } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineMenu } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { BsStars } from "react-icons/bs";

const Menu = [
    { name: "Accueil", href: "#Accueil" },
    { name: "Nos Solutions", href: "#NosSolutions" },
    { name: "Nos Services", href: "#Section3" },
    { name: "Notre Mission", href: "#Section4" },
    { name: "Notre équipe", href: "#Section5" },
    { name: "Contact", href: "#Section6" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full absolute top-0 left-0 z-50 bg-transparent">
            <div className="relative flex justify-between items-center min-h-20 px-4 sm:px-8">
                {/* Logo à gauche */}
                <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2">
                    <img src={Logo} alt="Logo" className="h-10 sm:h-12" />
                </div>
                {/* Menu centré */}
                <div className="flex-grow flex justify-center">
                    <ul className="hidden md:flex space-x-4 sm:space-x-8">
                        {Menu.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-white text-sm sm:text-lg font-medium hover:text-gray-300 transition-colors duration-200"
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
                                    onClick={() => setIsOpen(false)} // Ferme le menu après sélection
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

const Section1 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${BG})` }}>
            <Navbar />
            <div className="flex flex-col items-center text-center">
                <h1 className="text-white text-4xl sm:text-6xl font-bold font-afacad">Innovons ensemble</h1>
                <div className="mt-4">
                <p className="text-white text-2xl sm:text-4xl font-thin font-afacad">Pour maîtriser votre avenir</p>
                <p className="text-white text-2xl sm:text-4xl font-thin font-afacad">numérique</p>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-16 gap-x-4 gap-y-4">
                    <div
                    className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <HiPaintBrush className="text-white size-6"/>
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">Design</p>
                    </div>
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <RiComputerLine className="text-white size-6"/>
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">Site Web</p>
                    </div>
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <MdOutlineMenu className="text-white size-6"/>
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">CRM</p>
                    </div>
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <MdGroups className="text-white size-6"/>
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">Communication</p>
                    </div>
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <BsStars className="text-white size-6"/>
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">Outils API</p>
                    </div>

                </div>
            </div>
            {/* Contenu de la section */}
        </div>
    );
};

export default Section1;
