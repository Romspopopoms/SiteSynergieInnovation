import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../../components/AccueilImma/Navbar";
import Footer from "../../components/AccueilImma/Footer";
import BG from "assets/bg1imma.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Synergie from "assets/Synergie.webp"

// Lazy-loaded sections
const Section1 = React.lazy(() => import("../../components/ImmaMissio/Section1"));
const Section2 = React.lazy(() => import("../../components/ImmaMissio/Section2"));
const Section3 = React.lazy(() => import("../../components/ImmaMissio/Section3"));

const Accueil = () => {
    return (
        <div className="w-full min-h-screen bg-[#FFFBED]"
            style={{ backgroundImage: `url(${BG})` }} // Assurez-vous que l'image de fond est chargée
        >
            <Helmet>
                {/* SEO Meta Tags */}
                <title>ImmaMissio - Accueil</title>
                <meta name="description" content="ImmaMissio vous accompagne avec des solutions numériques dédiées à l'Église et aux Patronages, pour une présence numérique forte et dynamique." />
                <meta name="keywords" content="ImmaMissio, solutions numériques, Église, Patronages, mission, digitalisation, Synergie Innovation" />



                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:title" content="ImmaMissio - Accueil" />
                <meta property="og:description" content="Découvrez les solutions numériques d'ImmaMissio pour l'Église et les Patronages." />
                <meta property="og:image" content={Synergie} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://synergieinnovation.fr/ImmaMissioAccueil" />

                {/* Twitter Cards Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ImmaMissio - Solutions Numériques pour l'Église et les Patronages" />
                <meta name="twitter:description" content="Découvrez les solutions d'ImmaMissio pour digitaliser et renforcer la présence en ligne de l'Église et des Patronages." />
                <meta name="twitter:image" content={Synergie} />

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
                <div className="">
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="">
                    <Section3 />
                </div>
            </Suspense>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Accueil;
