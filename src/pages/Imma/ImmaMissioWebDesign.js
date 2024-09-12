import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "assets/bg6.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../../components/AccueilImma/Navbar";
import Footer from "../../components/AccueilImma/Footer";
import Synergie from "assets/Synergie.webp"

const Section1 = React.lazy(() => import("../../components/ImmaMissioWebDesign/Section1"));
const Section2 = React.lazy(() => import("../../components/ImmaMissioWebDesign/Section2"));
const Section3 = React.lazy(() => import("../../components/ImmaMissioWebDesign/Section3"));
const Section4 = React.lazy(() => import("../../components/ImmaMissioWebDesign/Section4"));
const Section5 = React.lazy(() => import("../../components/ImmaMissioWebDesign/Section5"));
const Section6 = React.lazy(() => import("../../components/ImmaMissioWebDesign/Section6"));

const ImmaMissioWebDesign = () => {
    return (
        <div className="w-full min-h-screen bg-[#FFFBED]">
            <Helmet>
                {/* SEO Meta Tags */}
                <title>ImmaMissio - Web Design pour l'Église et les Patronages</title>
                <meta name="description" content="ImmaMissio propose des services de web design uniques pour l'Église et les patronages, avec un focus sur l'expérience utilisateur et la conception visuelle." />
                <meta name="keywords" content="web design, UX, UI, design d'église, développement web, design professionnel, ImmaMissio, Synergie Innovation" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://synergieinnovation.fr/ImmaMissioWebDesign" />

                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:title" content="ImmaMissio - Web Design pour l'Église et les Patronages" />
                <meta property="og:description" content="Optimisez l'interface utilisateur et l'expérience utilisateur avec nos services de web design pour l'Église et les patronages." />
                <meta property="og:image" content={Synergie} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://synergieinnovation.fr/ImmaMissioWebDesign" />

                {/* Twitter Cards Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ImmaMissio - Web Design Personnalisé pour l'Église" />
                <meta name="twitter:description" content="Découvrez nos services de design web pour améliorer la présence en ligne des églises et patronages." />
                <meta name="twitter:image" content={Synergie} />

                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                {/* Favicon */}
                <link rel="icon" href="/rond_ico.ico" />
            </Helmet>

            {/* Navbar en haut */}
            <Navbar />

            {/* Flex container pour la page */}
            <div className="hidden md:flex w-full min-h-screen">
                
                {/* Section 1: Fixée à gauche, occupe 25% de l'écran, visible seulement sur md et plus */}
                <div className="w-[25%] fixed h-full top-0 left-0 z-30">
                    <Suspense fallback={null}>
                        <Section1 />
                    </Suspense>
                </div>

                {/* Section 2 : Occupant 75% de l'écran, centrée verticalement */}
                <div className="w-[78%] ml-[24%] flex justify-center items-center">
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

            <div className="md:w-[75%] md:ml-[25%] mt-24">
                <Suspense fallback={null}>
                    <Section5 />
                </Suspense>
            </div>

            <div className="md:w-[75%] md:ml-[25%] mt-24">
                <Suspense fallback={null}>
                    <Section6 />
                </Suspense>
            </div>

            {/* Footer visible sur mobile uniquement */}
            <div className="md:hidden block">
                <Footer />
            </div>
        </div>
    );
}

export default ImmaMissioWebDesign;
