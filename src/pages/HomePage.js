import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Background from "../assets/Bg2.png";
import LogoSynergie from "../assets/V4 simple W.svg";
import LogoVox from "../assets/PictoVox.svg";
import LogoImma from "../assets/PictoImaMissio.svg";
import LogoScan from "../assets/PictoScanAvis.png";
import SynergieLong from "../assets/V4long.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate(); // Utilisation du hook useNavigate

    const menuItems = [
        {
            logo: LogoSynergie,
            text: 'Synergie',
            alt: 'LogoSynergie',
            href: "/SynergieInnovation",
            class: 'size-10 md:size-12',
            extraClass: 'md:ml-32',
            description: (
                <>
                    <p className="text-3xl font-bold mb-4">Innovons ensemble</p>
                    <p className="text-xl mb-4">Pour maîtriser votre avenir numérique</p>
                    <p className="text-lg">découvrez qui nous sommes,</p>
                    <p className="text-lg">notre vision et nos objectifs</p>
                </>
            )
        },
        {
            logo: LogoVox,
            text: 'VoxUnity',
            href: "/",
            alt: 'LogoVox',
            class: 'h-auto w-10 md:w-12',
            extraClass: '',
            description: (
                <>
                    <p className="text-3xl font-bold mb-4">Un visuel unique</p>
                    <p className="text-xl mb-4">Pour refleter au mieux votre identité</p>
                    <p className="text-lg">Venez découvrir notre offre complète en</p>
                    <p className="text-lg">logo, web design, communication</p>
                    <p className="text-lg">et branding.</p>
                </>
            )
        },
        {
            logo: LogoScan,
            text: 'Scan\'Avis',
            alt: 'LogoScan',
            href: "/",
            class: 'size-10 md:size-16',
            extraClass: 'md:mr-32',
            description: (
                <>
                    <p className="text-3xl font-bold mb-4">Votre suivi client</p>
                    <p className="text-xl mb-4">Depuis un Qr code</p>
                    <p className="text-lg">Venez découvrir notre offre de suivie client</p>
                    <p className="text-lg">depuis un qr code.</p>
                </>
            )
        },
        {
            logo: LogoImma,
            text: 'ImmaMissio',
            alt: 'LogoImma',
            href: "/",
            class: 'h-8 w-auto md:h-12',
            extraClass: '',
            description: (
                <>
                    <p className="text-3xl font-bold mb-4">Des solutions numérique</p>
                    <p className="text-xl mb-4">Au service de l'Eglise et des Patronages</p>
                    <p className="text-lg">Permettre à</p>
                    <p className="text-lg">l'Église de rayonner au mieux sur le web,</p>
                    <p className="text-lg">pour incarner ainsi les disciples</p>
                    <p className="text-lg">missionnaires 2.0.</p>
                </>
            )
        },
        {
            logo: 'phone',
            text: 'Contact',
            alt: 'Contact',
            href: "/",
            class: 'size-10 md:size-12 text-[#FFFFFF]',
            extraClass: 'md:ml-32',
            description: (
                <>
                <p className="text-3xl font-bold mb-4">Nous contacter</p>
                <p className="text-2xl">pour obtenir un devis rapidement !</p>
                </>
            )
        },
    ];

    const handleMouseEnter = (index) => {
        setActiveItem(index);
    };

    const handleItemClick = (href) => {
        navigate(href);
    };

    return (
        <div 
            className="min-h-screen w-full bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${Background})` }}
        >
            <Helmet>
                <title>Synergie Innovation - Accueil</title>
                <meta name="description" content="Synergie Innovation vous offre les meilleures solutions en création de sites web, logiciels, design et plus encore." />
                <meta name="keywords" content="création de site, développement logiciel, design, Synergie Innovation, La Ciotat, Bouche-du-Rhône, sur-mesure" />
            </Helmet>

            <div className='flex items-center justify-center min-h-screen w-full'
                onClick={() => setIsOpen(!isOpen)}>
                <div className='h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 bg-transparent border-8 border-[#D92555] rounded-full flex items-center justify-center'>
                    <img src={LogoSynergie} alt='Logo' className='w-48 h-48 sm:w-64 sm:h-60 bg-cover'></img>
                </div>
            </div>

            {isOpen && (
                <div className='fixed inset-0 z-50 overflow-y-auto'>
                    <div className='flex min-h-screen'>
                        {/* Colonne gauche */}
                        <div className='w-full md:w-1/2 relative'>
                            <div className='absolute inset-0 bg-white opacity-70'></div>
                            <div className='absolute inset-0 backdrop-blur-xl'></div>
                            
                            <div className='relative z-20 h-full flex items-center'>
                                <ul className='flex flex-col space-y-8 md:space-y-20 w-full px-4 py-8'>
                                    {menuItems.map((item, index) => (
                                        <li 
                                            key={index} 
                                            className={`flex items-center justify-center ${item.extraClass} cursor-pointer`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onClick={() => handleItemClick(item.href)} // Navigation au clic
                                        >
                                            {item.logo === 'phone' ? (
                                                <FaPhoneAlt className={item.class} />
                                            ) : (
                                                <img src={item.logo} alt={item.alt} className={item.class} />
                                            )}
                                            <span className='text-4xl md:text-6xl ml-4 font-afacad font-semibold text-[#1C4B5D]'>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Colonne droite */}
                        <div className='hidden md:block w-1/2 relative'>
                            <div className='absolute inset-0 bg-[#1C4A5C] opacity-40'></div>
                            <div className='absolute inset-0 backdrop-blur-xl'></div>
                            <div className='relative z-20 h-full flex flex-col justify-between p-8'>
                                {activeItem !== null ? (
                                    <div className="flex flex-col items-center justify-center h-full text-white text-center">
                                        {menuItems[activeItem].description}
                                    </div>
                                ) : (
                                    <>
                                        <h1 className='text-4xl lg:text-6xl font-afacad font-semibold text-white text-center mt-12'>Entrez dans l'avenir !</h1>
                                        <img src={SynergieLong} alt='SynergieLogoLong' className='h-8 lg:h-12 w-full object-contain mb-8' />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {/* Bouton de fermeture */}
                    <button 
                        className="absolute top-4 right-4 text-white text-4xl font-bold z-30"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

export default HomePage;