import React, { Suspense } from "react";
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

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <div className="h-32 w-32 sm:h-48 sm:w-48 animate-spin-slow">
                <img src={LogoSynergie} alt="Loading..." className="h-full w-full object-contain" />
            </div>
            <p className='text-white text-xl sm:text-3xl font-bold font-afacad mt-4'>
                Chargement en cours...
            </p>
        </div>
    );
};

const SynergieInnovationPage = () => {
    return (
        <div className="w-full bg-top bg-cover bg-repeat"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <Helmet>
                <link rel="preload" href={BG} as="image" />
            </Helmet>

            <Suspense fallback={<Loader />}>
                <div id="Accueil" className="md:min-h-screen">
                    <Section1 />
                </div>
                <div>
                    <Section2 />
                </div>
                <div id="NosSolutions" className="min-h-screen">
                    <Section3 />
                </div>
                <div id="NosServices" className="md:min-h-screen">
                    <Section4 />
                </div>
                <div id="NotreMission" className="min-h-screen">
                    <Section5 />
                </div>
                <div id="Notreéquipe" className="">
                    <Section6 />
                </div>
                <div id="Contact" className="">
                    <Section7 />
                </div>
                <div>
                    <Footer />
                </div>
            </Suspense>
        </div>
    );
}

export default SynergieInnovationPage;
