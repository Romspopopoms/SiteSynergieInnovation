import React, {Suspense} from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../../components/ImmaMissio/Navbar";
import Footer from "../../components/ImmaMissio/Footer";

// Lazy-loaded sections
 const Section1 = React.lazy(() => import("../../components/ImmaMissio/Section1"));



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
                <div className="md:min-h-screen">
                    <Section1 />
                </div>
            </Suspense>

            
            

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Accueil;
