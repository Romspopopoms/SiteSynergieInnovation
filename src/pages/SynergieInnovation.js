import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../assets/Bglandinghome.webp";
import Footer from "../components/Footer";
import Synergie from "assets/Synergie.webp"
// Lazy loading des sections
const Section1 = React.lazy(() => import("../components/Synergie/Section1"));
const Section2 = React.lazy(() => import("../components/Synergie/Section2"));
const Section3 = React.lazy(() => import("../components/Synergie/Section3"));
const Section4 = React.lazy(() => import("../components/Synergie/Section4"));
const Section5 = React.lazy(() => import("../components/Synergie/Section5"));
const Section6 = React.lazy(() => import("../components/Synergie/Section6"));
const Section7 = React.lazy(() => import("../components/Synergie/Section7"));

const SynergieInnovationPage = () => {
    return (
        <div 
            className="w-full bg-top bg-cover bg-repeat"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <Helmet>
                {/* Meta Tags pour SEO */}
                <title>Synergie Innovation - Solutions Numériques sur Mesure</title>
                <meta name="description" content="Découvrez Synergie Innovation : des solutions numériques complètes, de la création de sites web au branding et au développement logiciel sur mesure." />
                <meta name="keywords" content="création de site web, développement logiciel, design, branding, solutions numériques, Synergie Innovation, services numériques sur mesure" />


                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:title" content="Synergie Innovation - Solutions Numériques sur Mesure" />
                <meta property="og:description" content="Synergie Innovation vous offre des solutions sur mesure pour tous vos besoins numériques, du design à la création de sites web et applications." />
                <meta property="og:image" content={Synergie} />
                <meta property="og:url" content="https://synergieinnovation.fr/SynergieInnovationPage" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Synergie Innovation - Solutions Numériques Personnalisées" />
                <meta name="twitter:description" content="Nous offrons des services numériques personnalisés pour vous aider à atteindre vos objectifs digitaux." />
                <meta name="twitter:image" content={Synergie} />

                {/* Preload de l'image de fond */}
                <link rel="preload" href={Synergie} as="image" />

            </Helmet>

            {/* Sections avec Suspense pour un chargement paresseux */}
            <Suspense fallback={null}>
                <div id="Accueil" className="md:min-h-screen">
                    <Section1 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div>
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="NosSolutions" className="min-h-screen">
                    <Section3 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="NosServices" className="md:min-h-screen">
                    <Section4 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="NotreMission" className="min-h-screen">
                    <Section5 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="Notreequipe">
                    <Section6 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="Contact">
                    <Section7 />
                </div>
            </Suspense>

            <Footer />
        </div>
    );
}

export default SynergieInnovationPage;
