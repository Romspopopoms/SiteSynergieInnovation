import React from "react";
import Logo from "../assets/V4long.svg";
import BG from "../assets/Bglandinghome.png";

const Menu = [
    { name: "Accueil", href: "#" },
    { name: "Nos Solutions", href: "#Section2" },
    { name: "Nos Services", href: "#Section3" },
    { name: "Notre Mission", href: "#Section4" },
    { name: "Notre équipe", href: "#Section5" },
    { name: "Contact", href: "#Section6" },
];

const Navbar = () => {
    return (
        <div
            className="w-full fixed top-0 left-0 z-50"
            style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex items-center justify-between py-4 px-8">
                <img src={Logo} alt="Logo" className="h-12" />
                <ul className="flex space-x-8">
                    {Menu.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent my-0" />
        </div>
    );
};

const Section1 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }}>
            <Navbar />
            {/* Contenu de la section */}
        </div>
    );
};

export default Section1;
