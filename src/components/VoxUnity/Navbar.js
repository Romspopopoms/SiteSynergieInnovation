import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from '../../assets/PictoVox.svg'; // Remplacez par le chemin correct vers le logo VoxUnity

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Menu = [
        { name: "Hub", href: "/" },
        { name: "Logo", href: "/Logo" },
        { name: "Charte Graphique", href: "/CharteGraphique" },
        { name: "WebDesign", href: "/WebDesign" },
        { name: "Communication", href: "/Communication" },
    ];

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[60%] max-w-[60%] z-50">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-3 flex justify-between items-center">
                {/* Logo visible en permanence */}
                <div className="text-white text-xl">
                    <img src={Logo} alt="VoxUnity" className="h-8 md:h-10 ml-4" />
                </div>

                {/* Bouton Hamburger pour les petits écrans */}
                <div className="xl:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Menu pour grands écrans */}
                <div className={`hidden xl:flex md:items-center md:space-x-6 text-white font-poppins font-semibold mr-8`}>
                    {Menu.map((item, index) => (
                        <a key={index} href={item.href} className="hover:text-[#8D1257] px-1">
                            {item.name}
                        </a>
                    ))}
                    <a href="/Contact" className="bg-white text-[#8D1257] rounded-full py-2 px-4">
                        <h1>Contact</h1>
                    </a>
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
                className="xl:hidden bg-gray-800 text-white rounded-xl overflow-hidden mt-2"
            >
                <ul className="flex flex-col space-y-4 p-4">
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
            </motion.div>
        </nav>
    );
};

export default Navbar;
