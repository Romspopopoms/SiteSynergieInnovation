import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../../assets/bg4.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../../components/VoxUnity/Navbar";
import Footer from "../../components/VoxUnity/Footer";

const Section1 = React.lazy(() => import("../../components/VoxUnityCharte/Section1"));
const Section2 = React.lazy(() => import("../../components/VoxUnityCharte/Section2"));
const Section3 = React.lazy(() => import("../../components/VoxUnityCharte/Section3"));
const Section4 = React.lazy(() => import("../../components/VoxUnityCharte/Section4"));
const Section5 = React.lazy(() => import("../../components/VoxUnityCharte/Section5"));
const Section6 = React.lazy(() => import("../../components/VoxUnityCharte/Section6"));

const VoxUnityCharteGraphique = () => {
    return (
        <div 
            className="w-full min-h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BG})` }} // background-image correcte
        >
            <Helmet>
                {/* SEO Meta Tags */}
                <title>VoxUnity - Charte Graphique et Identité Visuelle</title>
                <meta name="description" content="Découvrez les solutions graphiques et l'identité visuelle unique que nous créons pour renforcer votre marque grâce à VoxUnity." />
                <meta name="keywords" content="charte graphique, identité visuelle, branding, VoxUnity, communication, design graphique, Synergie Innovation" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://synergieinnovation.fr/VoxUnityCharteGraphique" />

                {/* Open Graph / Facebook Meta Tags */}
                <meta property="og:title" content="VoxUnity - Charte Graphique et Branding" />
                <meta property="og:description" content="Nous créons des chartes graphiques uniques pour donner à votre entreprise une identité visuelle forte et mémorable." />
                <meta property="og:image" content={`${BG}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://synergieinnovation.fr/VoxUnityCharteGraphique" />

                {/* Twitter Cards Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VoxUnity - Charte Graphique et Branding sur mesure" />
                <meta name="twitter:description" content="Renforcez l'identité de votre marque avec nos solutions graphiques personnalisées." />
                <meta name="twitter:image" content={`${BG}`} />

                {/* Preload Background Image */}
                <link rel="preload" href={BG} as="image" />

                {/* Favicon */}
                <link rel="icon" type="image/svg+xml" href="../../assets/PictoVox.svg" />
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
                    <Section3/>
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-24">
                    <Section4/>
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-24">
                    <Section5/>
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-24">
                    <Section6/>
                </div>
            </Suspense>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default VoxUnityCharteGraphique;
