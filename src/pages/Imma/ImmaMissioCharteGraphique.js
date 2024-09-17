import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../../components/AccueilImma/Navbar";
import Footer from "../../components/AccueilImma/Footer";
import BG from "assets/bgCharteImma.webp"; 

// Lazy-loaded sections
const Section1 = React.lazy(() => import("../../components/ImmaCharteLogo/Section1"));
const Section2 = React.lazy(() => import("../../components/ImmaCharteLogo/Section2"));
const Section3 = React.lazy(() => import("../../components/ImmaCharteLogo/Section3"));
const Section4 = React.lazy(() => import("../../components/ImmaCharteLogo/Section4"));
const Section5 = React.lazy(() => import("../../components/ImmaCharteLogo/Section5"));
const Section6 = React.lazy(() => import("../../components/ImmaCharteLogo/Section6"));
const Section7 = React.lazy(() => import("../../components/ImmaCharteLogo/Section7"));
const Section8 = React.lazy(() => import("../../components/ImmaCharteLogo/Section8"));
const Section9 = React.lazy(() => import("../../components/ImmaCharteLogo/Section9"));

const ImmaMissioCharteGraphique = () => {
    return (
        <div 
            className="w-full min-h-screen bg-[#FFFBED]"
             // Assurez-vous que l'image de fond est chargée
        >
            <Helmet>
                {/* SEO Meta Tags */}
                <title>ImmaCharteLogo - Création de Chartes Graphiques et Logos</title>
                <meta name="description" content="Découvrez ImmaCharteLogo, spécialisé dans la création de chartes graphiques et de logos sur mesure pour une identité visuelle forte et cohérente." />
                <meta name="keywords" content="ImmaCharteLogo, charte graphique, création de logo, branding, identité visuelle, Synergie Innovation" />


                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                {/* Favicon */}
            </Helmet>

            {/* Navbar */}
            <Navbar />

            {/* Lazy-loaded sections */}
            <Suspense fallback={null}>
                <div className="md:min-h-screen ">
                    <Section1 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-24">
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section3 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section4 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section5 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-16">
                    <Section6 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-16">
                    <Section7 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section8 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section9 />
                </div>
            </Suspense>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ImmaMissioCharteGraphique;
