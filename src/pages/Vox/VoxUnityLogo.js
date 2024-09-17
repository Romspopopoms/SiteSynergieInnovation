import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../../assets/bg1.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../../components/VoxUnity/Navbar";
import Footer from "../../components/VoxUnity/Footer";

const Section1 = React.lazy(() => import("../../components/VoxUnityLogo/Section1"));
const Section2 = React.lazy(() => import("../../components/VoxUnityLogo/Section2"));
const Section3 = React.lazy(() => import("../../components/VoxUnityLogo/Section3"));
const Section4 = React.lazy(() => import("../../components/VoxUnityLogo/Section4"));

const VoxUnityLogo = () => {
    return (
        <div 
            className="w-full min-h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BG})` }} // background-image correcte
        >
            <Helmet>
                {/* SEO Meta Tags */}
                <title>VoxUnity - Création de Logos Professionnels</title>
                <meta name="description" content="VoxUnity vous propose des services professionnels de création de logos uniques et sur-mesure pour renforcer l'identité visuelle de votre marque." />
                <meta name="keywords" content="création de logo, identité visuelle, branding, VoxUnity, Synergie Innovation, design graphique, logo personnalisé" />

                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                </Helmet>

            {/* Navbar */}
            <Navbar />

            {/* Main Content with Lazy-loaded sections */}
            <Suspense fallback={null}>
                <div className="md:min-h-screen">
                    <Section1 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="md:min-h-screen">
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-24">
                    <Section3 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-24">
                    <Section4 />
                </div>
            </Suspense>
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default VoxUnityLogo;
