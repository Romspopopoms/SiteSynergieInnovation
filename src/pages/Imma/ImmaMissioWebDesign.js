import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "assets/bg6.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../../components/AccueilImma/Navbar";
import Footer from "../../components/AccueilImma/Footer";

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

                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                {/* Favicon */}
            </Helmet>

            {/* Navbar en haut */}
            <Navbar />

            {/* Flex container pour la page */}
            <div className="hidden xl:flex w-full min-h-screen">
                
                {/* Section 1: Fixée à gauche, occupe 25% de l'écran, visible seulement sur md et plus */}
                <div className="xl:w-[25%] fixed h-full top-0 left-0 z-30">
                    <Suspense fallback={null}>
                        <Section1 />
                    </Suspense>
                </div>

                {/* Section 2 : Occupant 75% de l'écran, centrée verticalement */}
                <div className="xl:w-[78%] xl:ml-[24%] flex justify-center items-center">
                    <Suspense fallback={null}>
                        <Section2 />
                    </Suspense>
                </div>
            </div>

            {/* Section visible pour les petits écrans */}
            <div className="xl:hidden">
                <Suspense fallback={null}>
                    <Section2 />
                </Suspense>
            </div>

            {/* Section 3, visible sur tous les écrans */}
            <div className="xl:w-[75%] xl:ml-[25%] py-24 xl:py-0">
                <Suspense fallback={null}>
                    <Section3 />
                </Suspense>
            </div>

            <div className="xl:w-[75%] xl:ml-[25%] mt-24">
                <Suspense fallback={null}>
                    <Section4 />
                </Suspense>
            </div>

            <div className="xl:w-[75%] xl:ml-[25%] mt-24">
                <Suspense fallback={null}>
                    <Section5 />
                </Suspense>
            </div>

            <div className="xl:w-[75%] xl:ml-[25%] mt-24">
                <Suspense fallback={null}>
                    <Section6 />
                </Suspense>
            </div>

            {/* Footer visible sur mobile uniquement */}
            <div className="xl:hidden block">
                <Footer />
            </div>
        </div>
    );
}

export default ImmaMissioWebDesign;
