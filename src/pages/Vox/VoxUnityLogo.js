import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../../assets/bg1.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../../components/VoxUnity/Navbar";
import Footer from "../../components/VoxUnity/Footer";
import Synergie from "assets/Synergie.webp"

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


                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:title" content="VoxUnity - Création de Logos sur Mesure" />
                <meta property="og:description" content="Découvrez les services de création de logos professionnels par VoxUnity, adaptés aux besoins de votre entreprise pour une identité visuelle percutante." />
                <meta property="og:image" content={Synergie} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://synergieinnovation.fr/VoxUnityLogo" />

                {/* Twitter Cards Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VoxUnity - Création de Logos Personnalisés" />
                <meta name="twitter:description" content="Renforcez votre identité visuelle avec nos services de création de logos uniques et professionnels." />
                <meta name="twitter:image" content={Synergie} />

                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                {/* Favicon */}
                <link rel="icon" href="/rond_ico.ico" />
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
