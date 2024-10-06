import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Background from "../assets/Bg2.webp";
import LogoSynergie from "../assets/V4 simple W.svg";
import LogoVox from "../assets/Logo vox W.svg";
import LogoImma from "../assets/Logo ImaMissio W.svg";
import SynergieLong from "../assets/V4longW.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="min-h-screen w-full bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${Background})` }} 
        >
            <Helmet>
                {/* Meta Tags pour SEO */}
                <title>Synergie Innovation - Création de Sites Web et Solutions Digitales</title>
                <meta name="description" content="Synergie Innovation propose des solutions sur mesure en création de sites web, développement logiciel, design et branding pour entreprises locales." />
                <meta name="keywords" content="création de site web, développement logiciel, design, branding, solutions numériques, La Ciotat" />
                
                {/* Preload de l'image de fond */}
                <link rel="preload" href={Background} as="image" />

                {/* Canonical */}
                <link rel="canonical" href="https://synergieinnovation.fr" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Synergie Innovation",
                        "image": "https://synergieinnovation.fr/logo.png",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Chem. de Roumagoua",
                            "addressLocality": "La Ciotat",
                            "postalCode": "13600",
                            "addressCountry": "FR"
                        },
                        "telephone": "+33666952997",
                        "email": "contact@synergieinnovation.fr",
                        "url": "https://synergieinnovation.fr",
                        "sameAs": [
                            "https://www.facebook.com/synergieinnovation",
                            "https://www.instagram.com/synergie_innovation"
                        ],
                        "openingHours": "Mo-Fr 08:00-18:00",
                        "priceRange": "$$$"
                    }
                    `}
                </script>

                {/* Favicon en .ico */}
            </Helmet>

            <div className='flex items-center justify-center min-h-screen w-full'
                onClick={() => setIsOpen(!isOpen)}>
                <div className='h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 bg-transparent border-8 border-[#D92555] rounded-full flex items-center justify-center'>
                    <img src={LogoSynergie} alt='Logo Synergie Innovation - Création de Sites Web' className='w-48 h-48 sm:w-64 sm:h-60 bg-cover' loading="lazy" /> {/* Lazy loading */}
                </div>
            </div>

            {isOpen && (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
        <div className='flex min-h-screen'>
            {/* Left part with content */}
            <div className='w-full md:w-1/2 relative'>
                
                {/* Background with opacity */}
                <div className='absolute inset-0 bg-white opacity-70 z-10'></div>
                <div className='absolute inset-0 backdrop-blur-xl z-10'></div>

                {/* Content above the background */}
                <div className='relative z-20 h-full flex flex-col items-center justify-center'>

                    {/* HUB Synergie Innovation (top) */}
                    <a href="/" className='absolute top-0 rounded-t rounded-full left-[50%] translate-x-[-50%] bg-[rgba(0,0,0,0.46)] text-white px-16 py-4 flex items-center font-afacad text-2xl font-semibold'>
                        HUB Synergie Innovation
                    </a>
            <div className='space-y-24'>

                    {/* Section Découvrez Synergie */}
                    <h1 className='text-5xl font-bold font-afacad text-center'>
                        Bienvenue chez <span className='text-[#A11238]'>Synergie Innovation</span> <br></br>
                        - Solutions Digitales -
                    </h1>

                    <a href='/SynergieInnovation' className='text-center flex flex-col justify-center items-center'>
                    <h2 className='text-5xl font-bold font-afacad'>
                        Découvrez <span className='text-[#A11238]'>Synergie</span> !
                    </h2>
                    <button className='mt-6 px-8 py-4 bg-[#A11238] text-white font-semibold text-lg rounded-full flex items-center space-x-3'>
                        <img src={SynergieLong} alt='Synergie Logo' className='h-10 w-auto mr-4' />
                        {/* Wrapper for arrow to ensure proper styling */}
                        <div className="bg-white p-2 rounded-full">
                            <FaArrowRight className='text-[#A11238] text-2xl' />
                        </div>
                    </button>
                    </a>


                    {/* Section Découvrez nos services */}
                    <div className=' text-center flex flex-col justify-center items-center'>
                        <h2 className='text-5xl font-bold font-afacad'>
                            Découvrez <span className='text-[#A11238]'>nos services</span> !
                        </h2>
                        <div className='mt-6 flex space-x-6'>
                            <a href='/VoxUnity' className='px-6 py-4 bg-[#A11238] text-white font-semibold text-lg rounded-full flex items-center space-x-3'>
                                <img src={LogoVox} alt='Vox Unity Logo' className='h-10 w-auto' />
                                <div className="bg-white p-2 rounded-full">
                                    <FaArrowRight className='text-[#A11238] text-2xl' />
                                </div>
                            </a>

                            <a href='/Accueil' className='px-6 py-4 bg-[#A11238] text-white font-semibold text-lg rounded-full flex items-center space-x-3'>
                                <img src={LogoImma} alt='ImaMissio Logo' className='h-8 w-auto' />
                                <div className="bg-white p-2 rounded-full">
                                    <FaArrowRight className='text-[#A11238] text-2xl' />
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
                    {/* Contact button (bottom) */}
                    <a href='/Contact' className='absolute bottom-0 rounded-b rounded-full left-[50%] translate-x-[-50%] bg-[rgba(0,0,0,0.46)] text-white px-16 py-4 flex items-center font-afacad text-2xl font-semibold'>
                        <FaPhoneAlt className='mr-4 text-2xl' />
                        Contact
                    </a>
                </div>
            </div>

            {/* Right part (optional content or closing) */}
            <div className='hidden md:block w-1/2 relative'>
                <div className='absolute inset-0 bg-[#1C4A5C] opacity-40'></div>
                <div className='absolute inset-0 backdrop-blur-xl'></div>
                <div className='relative z-20 h-full flex flex-col items-center justify-between py-8'>
        {/* Header text */}
        <h2 className='text-white text-5xl font-bold font-afacad mt-6'>
            Entrez dans l'avenir !
        </h2>

        {/* Footer logo */}
        <div className='mb-4'>
            <img src={SynergieLong} alt='Synergie Innovation Logo' className='h-12 w-auto' />
        </div>
    </div>
</div>

{/* Close button */}
<button
    className="absolute top-4 right-4 text-white text-4xl font-bold z-30"
    onClick={() => setIsOpen(false)}
>
    &times;
</button>
        </div>
    </div>
)}


</div>
    )}

export default HomePage;
