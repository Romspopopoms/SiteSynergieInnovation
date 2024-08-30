import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../assets/Bglandinghome.webp"; // Utilisez WebP pour l'image de fond
import Footer from "../components/Footer";

// Lazy loading des sections
const Section1 = React.lazy(() => import("../components/Section1"));
const Section2 = React.lazy(() => import("../components/Section2"));
const Section3 = React.lazy(() => import("../components/Section3"));
const Section4 = React.lazy(() => import("../components/Section4"));
const Section5 = React.lazy(() => import("../components/Section5"));
const Section6 = React.lazy(() => import("../components/Section6"));
const Section7 = React.lazy(() => import("../components/Section7"));

const SynergieInnovationPage = () => {
    return (
        <div className="w-full bg-top bg-cover bg-repeat"
            style={{ backgroundImage: `url(${BG})` }} // Image de fond optimisée
        >
            <Helmet>
                <link rel="preload" href={BG} as="image" /> {/* Préchargement de l'image de fond */}
            </Helmet>

            <Suspense fallback={<div>Loading...</div>}>
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
