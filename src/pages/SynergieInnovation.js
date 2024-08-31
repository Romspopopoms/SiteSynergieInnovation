import React, { Suspense, useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../assets/Bglandinghome.webp";
import LogoSynergie from "../assets/V4 simple W.svg";
import Footer from "../components/Footer";

// Lazy loading des sections
const Section1 = React.lazy(() => import("../components/Section1"));
const Section2 = React.lazy(() => import("../components/Section2"));
const Section3 = React.lazy(() => import("../components/Section3"));
const Section4 = React.lazy(() => import("../components/Section4"));
const Section5 = React.lazy(() => import("../components/Section5"));
const Section6 = React.lazy(() => import("../components/Section6"));
const Section7 = React.lazy(() => import("../components/Section7"));

const Loader = ({ isVisible }) => {
    return (
        <div 
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ backgroundImage: `url(${BG})` }}
        >
            <div 
                className="h-32 w-32 sm:h-48 sm:w-48 animate-spin"
                style={{ animationDuration: '3s' }}
            >
                <img src={LogoSynergie} alt="Loading..." className="h-full w-full object-contain" />
            </div>
            <p className='text-white text-xl sm:text-3xl font-bold font-afacad mt-4'>
                Chargement en cours...
            </p>
        </div>
    );
};

const SectionWrapper = ({ children, onLoad }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            onLoad();
        }, 100);
        return () => clearTimeout(timer);
    }, [onLoad]);

    return (
        <Suspense fallback={
            <div className="h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        }>
            <div className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </Suspense>
    );
};

const SynergieInnovationPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [sectionsLoaded, setSectionsLoaded] = useState(0);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    useEffect(() => {
        if (isMobile) {
            // Sur mobile, on attend que toutes les sections soient chargées
            if (sectionsLoaded === 7) {
                setIsLoading(false);
            }
        } else {
            // Sur desktop, on utilise un timer comme avant
            const timer = setTimeout(() => setIsLoading(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [sectionsLoaded, isMobile]);

    const handleSectionLoad = () => {
        setSectionsLoaded(prev => prev + 1);
    };

    return (
        <>
            <Loader isVisible={isLoading} />
            <div className="w-full bg-top bg-cover bg-repeat"
                style={{ backgroundImage: `url(${BG})` }}
            >
                <Helmet>
                    <link rel="preload" href={BG} as="image" />
                </Helmet>

                <SectionWrapper onLoad={handleSectionLoad}>
                    <div id="Accueil" className="md:min-h-screen">
                        <Section1 />
                    </div>
                </SectionWrapper>

                <SectionWrapper onLoad={handleSectionLoad}>
                    <div>
                        <Section2 />
                    </div>
                </SectionWrapper>

                <SectionWrapper onLoad={handleSectionLoad}>
                    <div id="NosSolutions" className="min-h-screen">
                        <Section3 />
                    </div>
                </SectionWrapper>

                <SectionWrapper onLoad={handleSectionLoad}>
                    <div id="NosServices" className="md:min-h-screen">
                        <Section4 />
                    </div>
                </SectionWrapper>

                <SectionWrapper onLoad={handleSectionLoad}>
                    <div id="NotreMission" className="min-h-screen">
                        <Section5 />
                    </div>
                </SectionWrapper>

                <SectionWrapper onLoad={handleSectionLoad}>
                    <div id="Notreéquipe" className="">
                        <Section6 />
                    </div>
                </SectionWrapper>

                <SectionWrapper onLoad={handleSectionLoad}>
                    <div id="Contact" className="">
                        <Section7 />
                    </div>
                </SectionWrapper>

                <Footer />
            </div>
        </>
    );
}

export default SynergieInnovationPage;