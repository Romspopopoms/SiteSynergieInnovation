import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom'; // Importer useLocation
import Logo from '../../assets/LogoImmaNoir.svg'; // Remplacez par le chemin correct vers le logo VoxUnity

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Obtenez l'URL actuelle

    const Menu = [
        { name: "Hub", href: "/" },
        { name: "ImmaMissio", href: "/ImmaMissio" },
        { name: "Logo et Charte Graphique", href: "/ImmaMissioCharteGraphique" },
        { name: "Site Web", href: "/ImmaMissioWebDesign" },
        { name: "Communication", href: "/ImmaMissioCom" },
    ];

    return (
        <nav className="fixed flex flex-col w-full z-50">
            <div className="flex justify-between items-center px-4 h-20 bg-[#FFFBED] border-b-2" style={{ borderBottomColor: 'rgba(0, 0, 0, 0.08)' }}>

                {/* Logo visible en permanence */}
                <a href='/Accueil' className="text-white text-xl">
                    <img src={Logo} alt="Imma" className="h-8 md:h-10 ml-4" />
                </a>
                
                <div className="xl:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#474747] focus:outline-none">
                        {isOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>


                <a href="/Contact" className="hidden xl:block border-2 border-black py-2 px-4 mr-4">
                <h1 className="font-jost font-semibold ">Contact</h1>
                </a>
                {isOpen ? (
                    <a href="/Contact" className="block border-2 border-black py-2 px-4 mr-4">
                    <h1 className="font-jost font-semibold ">Contact</h1>
                    </a>
                )  : null}

            </div>
            <div className="hidden bg-[#FFFBED]/85 xl:flex justify-end xl:justify-between items-center h-12 w-full px-4 border-b-2 border-[#222222]">

                {/* Bouton Hamburger pour les petits écrans */}
                <div className="xl:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#474747] focus:outline-none">
                        {isOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Menu pour grands écrans */}
                <div className={`hidden xl:flex md:items-center md:space-x-3 text-[#474747] font-poppins font-medium ml-3`}>
                    {Menu.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.href} 
                            className={`px-1 ${location.pathname === item.href ? '' : ''}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Menu déroulant pour petits écrans avec animation */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: {
                        opacity: 1,
                        height: "auto",
                        transition: {
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    },
                    closed: {
                        opacity: 0,
                        height: 0,
                        transition: {
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    },
                }}
                className="xl:hidden bg-[#FFFBED] text-white rounded-xl overflow-hidden"
            >
                <ul className="flex flex-col justify-center items-center space-y-4 p-4">
                    {Menu.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className={`text-[#474747] text-lg font-medium hover:text-gray-300 transition-colors duration-200 ${location.pathname === item.href ? '' : ''}`}
                                onClick={() => setIsOpen(false)} // Ferme le menu après sélection
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
            
        </nav>
    );
};

export default Navbar;
