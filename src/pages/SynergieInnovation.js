import React, { Suspense, useState, useEffect, lazy } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../assets/Bglandinghome.webp";
import LogoSynergie from "../assets/V4 simple W.svg";

// Lazy loading des sections
const Section1 = lazy(() => import("../components/Section1"));
const Section2 = lazy(() => import("../components/Section2"));
const Section3 = lazy(() => import("../components/Section3"));
const Section4 = lazy(() => import("../components/Section4"));
const Section5 = lazy(() => import("../components/Section5"));
const Section6 = lazy(() => import("../components/Section6"));
const Section7 = lazy(() => import("../components/Section7"));
const Footer = lazy(() => import("../components/Footer"));

const Loader = () => (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: `url(${BG})` }}>
        <div className="h-32 w-32 sm:h-48 sm:w-48 animate-spin" style={{ animationDuration: '3s' }}>
            <img src={LogoSynergie} alt="Loading..." className="h-full w-full object-contain" />
        </div>
        <p className='text-white text-xl sm:text-3xl font-bold font-afacad mt-4'>
            Chargement en cours...
        </p>
    </div>
);

const SectionWrapper = ({ children, id }) => (
    <div id={id} className="transition-opacity duration-500 ease-in-out">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>}>
            {children}
        </Suspense>
    </div>
);

const SynergieInnovationPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <link rel="preload" href={BG} as="image" />
            </Helmet>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="w-full bg-top bg-cover bg-repeat" style={{ backgroundImage: `url(${BG})` }}>
                    <SectionWrapper id="Accueil"><Section1 /></SectionWrapper>
                    <SectionWrapper><Section2 /></SectionWrapper>
                    <SectionWrapper id="NosSolutions"><Section3 /></SectionWrapper>
                    <SectionWrapper id="NosServices"><Section4 /></SectionWrapper>
                    <SectionWrapper id="NotreMission"><Section5 /></SectionWrapper>
                    <SectionWrapper id="Notreéquipe"><Section6 /></SectionWrapper>
                    <SectionWrapper id="Contact"><Section7 /></SectionWrapper>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default SynergieInnovationPage;