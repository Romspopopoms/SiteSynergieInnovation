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

const Loader = ({ isVisible }) => (
    <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundImage: `url(${BG})` }}
    >
        <div className="h-32 w-32 sm:h-48 sm:w-48 animate-spin">
            <img src={LogoSynergie} alt="Loading..." className="h-full w-full object-contain" />
        </div>
        <p className='text-white text-xl sm:text-3xl font-bold font-afacad mt-4'>
            Chargement en cours...
        </p>
    </div>
);

const SynergieInnovationPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Promise.race will either resolve after 2 seconds (timeout) or when the content is ready (2 seconds max)
        const timeout = new Promise(resolve => setTimeout(resolve, 2000));
        
        const loadContent = new Promise(resolve => {
            const timer = setTimeout(() => {
                setIsLoading(false);
                resolve();
            }, 2000); 
            return () => clearTimeout(timer);
        });

        Promise.race([timeout, loadContent]).then(() => setIsLoading(false));

    }, []);

    if (isLoading) {
        return <Loader isVisible={true} />;
    }

    return (
        <div className="w-full bg-top bg-cover bg-repeat"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <Helmet>
                <link rel="preload" href={BG} as="image" />
            </Helmet>

            <Suspense fallback={<Loader isVisible={true} />}>
                <div id="Accueil" className="md:min-h-screen">
                    <Section1 />
                </div>
            </Suspense>

            <Suspense fallback={<Loader isVisible={true} />}>
                <div>
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={<Loader isVisible={true} />}>
                <div id="NosSolutions" className="min-h-screen">
                    <Section3 />
                </div>
            </Suspense>

            <Suspense fallback={<Loader isVisible={true} />}>
                <div id="NosServices" className="md:min-h-screen">
                    <Section4 />
                </div>
            </Suspense>

            <Suspense fallback={<Loader isVisible={true} />}>
                <div id="NotreMission" className="min-h-screen">
                    <Section5 />
                </div>
            </Suspense>

            <Suspense fallback={<Loader isVisible={true} />}>
                <div id="Notreequipe" className="">
                    <Section6 />
                </div>
            </Suspense>

            <Suspense fallback={<Loader isVisible={true} />}>
                <div id="Contact" className="">
                    <Section7 />
                </div>
            </Suspense>

            <Footer />
        </div>
    );
}

export default SynergieInnovationPage;
