import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../../assets/bg6.webp";
import Navbar from "../../components/VoxUnity/Navbar";
import Footer from "../../components/VoxUnity/Footer"

const Section1 = React.lazy(() => import("../../components/VoxUnityWebDesign/Section1"));
const Section2 = React.lazy(() => import("../../components/VoxUnityWebDesign/Section2"));
const Section3 = React.lazy(() => import("../../components/VoxUnityWebDesign/Section3"));
const Section4 = React.lazy(() => import("../../components/VoxUnityWebDesign/Section4"));

const VoxUnityWebDesign = () => {
    return (
        <div
            className="w-full min-h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <Helmet>
                {/* SEO Meta Tags */}
                <title>VoxUnity - Web Design Professionnel</title>
                <meta name="description" content="VoxUnity propose des services de web design uniques et professionnels pour améliorer l'interface utilisateur et l'expérience utilisateur de votre site web." />
                <meta name="keywords" content="web design, UX, UI, développement web, design professionnel, VoxUnity, Synergie Innovation" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://synergieinnovation.fr/VoxUnityWebDesign" />

                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:title" content="VoxUnity - Web Design sur Mesure" />
                <meta property="og:description" content="Optimisez l'interface utilisateur et l'expérience utilisateur avec les services de web design professionnels de VoxUnity." />
                <meta property="og:image" content={`${BG}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://synergieinnovation.fr/VoxUnityWebDesign" />

                {/* Twitter Cards Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VoxUnity - Web Design Personnalisé" />
                <meta name="twitter:description" content="Venez découvrir nos services de design professionnel pour améliorer votre présence en ligne." />
                <meta name="twitter:image" content={`${BG}`} />

                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                {/* Favicon */}
                <link rel="icon" type="image/svg+xml" href={require("../../assets/PictoVox.svg")} />
            </Helmet>

            {/* Navbar en haut */}
            <Navbar />

            {/* Flex container pour la page */}
            <div className="hidden md:flex w-full min-h-screen">
                
                {/* Section 1: Fixée à gauche, occupe 25% de l'écran, visible seulement sur md et plus */}
                <div className="w-[25%] fixed h-full top-0 left-0">
                    <Suspense fallback={null}>
                        <Section1 />
                    </Suspense>
                </div>

                {/* Section 2 : Occupant 75% de l'écran, centrée verticalement */}
                <div className="w-[75%] ml-[25%] flex justify-center items-center">
                    <Suspense fallback={null}>
                        <Section2 />
                    </Suspense>
                </div>
            </div>

            {/* Section visible pour les petits écrans */}
            <div className="md:hidden">
                <Suspense fallback={null}>
                    <Section2 />
                </Suspense>
            </div>

            {/* Section 3, visible sur tous les écrans */}
            <div className="md:w-[75%] md:ml-[25%]">
                <Suspense fallback={null}>
                    <Section3 />
                </Suspense>
            </div>

            <div className="md:w-[75%] md:ml-[25%] mt-24">
                <Suspense fallback={null}>
                    <Section4 />
                </Suspense>
            </div>

            {/* Footer visible sur mobile uniquement */}
            <div className="md:hidden block">
                <Footer />
            </div>
        </div>
    );
}

export default VoxUnityWebDesign;
