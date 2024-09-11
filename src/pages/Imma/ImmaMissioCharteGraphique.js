import React, {Suspense} from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../../components/AccueilImma/Navbar";
import Footer from "../../components/AccueilImma/Footer";

// Lazy-loaded sections
 const Section1 = React.lazy(() => import("../../components/ImmaCharteLogo/Section1"));
 const Section2 = React.lazy(() => import("../../components/ImmaCharteLogo/Section2"));
 const Section3 = React.lazy(() => import("../../components/ImmaCharteLogo/Section3"));
 const Section4 = React.lazy(() => import("../../components/ImmaCharteLogo/Section4"));
 const Section5 = React.lazy(() => import("../../components/ImmaCharteLogo/Section5"));
 const Section6 = React.lazy(() => import("../../components/ImmaCharteLogo/Section6"));
 const Section7 = React.lazy(() => import("../../components/ImmaCharteLogo/Section7"));
 const Section8 = React.lazy(() => import("../../components/ImmaCharteLogo/Section8"));
 const Section9 = React.lazy(() => import("../../components/ImmaCharteLogo/Section9"));




const Accueil = () => {
    return (
        <div className="w-full min-h-screen bg-[#FFFBED]" >
         <Helmet>
                <title>VoxUnity - Design et Branding sur mesure</title>
                <meta name="description" content="VoxUnity, le studio créatif spécialisé dans la conception de logo, web design, branding et communication visuelle." />
                <meta name="keywords" content="VoxUnity, design, branding, web design, logo, communication visuelle" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://synergieinnovation.fr/VoxUnity" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="VoxUnity - Design et Branding sur mesure" />
                <meta property="og:description" content="Création de logos et d'identités visuelles uniques pour refléter votre marque de manière impactante." />
                <meta property="og:image" content="https://synergieinnovation.fr/images/bg5.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://synergieinnovation.fr/VoxUnity" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VoxUnity - Votre partenaire en Design et Branding" />
                <meta name="twitter:description" content="Découvrez nos solutions de branding, création de logo, et web design pour votre entreprise." />
                <meta name="twitter:image" content="https://synergieinnovation.fr/images/bg5.webp" />
            </Helmet>

            {/* Navbar */}
            <Navbar />

             <Suspense fallback={null}>
                <div className="md:min-h-screen ">
                    <Section1 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-24">
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section3 />
                </div>
            </Suspense>
            
            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section4 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section5 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-16">
                    <Section6 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-16">
                    <Section7 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section8 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-32">
                    <Section9 />
                </div>
            </Suspense>
            

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Accueil;
