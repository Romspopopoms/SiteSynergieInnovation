import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../../components/AccueilImma/Navbar";
import Footer from "../../components/AccueilImma/Footer";
import BG from "assets/bg1imma.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects

// Lazy-loaded sections
const Section1 = React.lazy(() => import("../../components/ImmaCom/Section1"));
const Section2 = React.lazy(() => import("../../components/ImmaCom/Section2"));
const Section3 = React.lazy(() => import("../../components/ImmaCom/Section3"));
const Section4 = React.lazy(() => import("../../components/ImmaCom/Section4"));
const Section5 = React.lazy(() => import("../../components/ImmaCom/Section5"));

const ImmaMissioCom = () => {
    return (
        <div 
            className="w-full min-h-screen bg-[#FFFBED]"
             // Assurez-vous que l'image de fond est chargée
        >
            <Helmet>
                {/* SEO Meta Tags */}
                <title>ImmaCom - Solutions de Communication pour l'Église</title>
                <meta name="description" content="Découvrez ImmaCom, spécialisé dans les solutions de communication numérique pour l'Église et les patronages." />
                <meta name="keywords" content="ImmaCom, solutions de communication, église, patronages, Synergie Innovation, communication digitale" />

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
                <div>
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div>
                    <Section3 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div>
                    <Section4 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div>
                    <Section5 />
                </div>
            </Suspense>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ImmaMissioCom;
