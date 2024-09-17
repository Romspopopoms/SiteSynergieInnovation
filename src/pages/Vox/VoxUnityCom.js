import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../../assets/bg7.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../../components/VoxUnity/Navbar";
import Footer from "../../components/VoxUnity/Footer";

const Section1 = React.lazy(() => import("../../components/VoxUnityCom/Section1"));
const Section2 = React.lazy(() => import("../../components/VoxUnityCom/Section2"));
const Section3 = React.lazy(() => import("../../components/VoxUnityCom/Section3"));
const Section4 = React.lazy(() => import("../../components/VoxUnityCom/Section4"));

const VoxUnityCom = () => {
    return (
        <div 
            className="w-full min-h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BG})` }} // background-image correcte
        >
            <Helmet>
                {/* SEO Meta Tags */}
                <title>VoxUnity - Communication et Stratégies Digitales</title>
                <meta name="description" content="Améliorez votre communication digitale avec VoxUnity. Découvrez nos stratégies sur mesure pour renforcer votre présence en ligne et atteindre vos objectifs." />
                <meta name="keywords" content="communication digitale, stratégie marketing, branding, VoxUnity, Synergie Innovation, réseaux sociaux, stratégie de contenu" />


                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                {/* Favicon */}
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

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default VoxUnityCom;
