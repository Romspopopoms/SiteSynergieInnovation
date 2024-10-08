import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../../components/AccueilImma/Navbar";
import Footer from "../../components/AccueilImma/Footer";
import BG from "assets/bg1imma.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects

// Lazy-loaded sections
const Section1 = React.lazy(() => import("../../components/AccueilImma/Section1"));
const Section2 = React.lazy(() => import("../../components/AccueilImma/Section2"));
const Section3 = React.lazy(() => import("../../components/AccueilImma/Section3"));
const Section4 = React.lazy(() => import("../../components/AccueilImma/Section4"));
const Section5 = React.lazy(() => import("../../components/AccueilImma/Section5"));
const Section6 = React.lazy(() => import("../../components/AccueilImma/Section6"));
const Section7 = React.lazy(() => import("../../components/AccueilImma/Section7"));

const Accueil = () => {
    return (
        <div className="w-full min-h-screen bg-[#FFFBED]"// Assurez-vous que l'image de fond est chargée
        >
            <Helmet>
                {/* SEO Meta Tags */}
                <title>ImmaMissio - Solutions numériques pour l'Église</title>
                <meta name="description" content="ImmaMissio propose des solutions numériques pour l'Église et les Patronages, permettant de rayonner et d'incarner la mission en ligne." />
                <meta name="keywords" content="ImmaMissio, Église, Patronage, solutions numériques, mission chrétienne, digitalisation, Synergie Innovation" />


                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                {/* Favicon */}
            </Helmet>

            {/* Navbar */}
            <Navbar />

            {/* Lazy-loaded sections */}
            <Suspense fallback={null}>
                <div className="md:min-h-screen">
                    <Section1 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-12 md:mt-24">
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-12 md:mt-24">
                    <Section3 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-12 md:mt-24">
                    <Section4 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-24">
                    <Section5 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="min-h-screen mt-24">
                    <Section6 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="min-h-screen mt-24">
                    <Section7 />
                </div>
            </Suspense>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Accueil;
