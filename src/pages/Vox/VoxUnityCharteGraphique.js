import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../assets/bg4.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../components/VoxUnity/Navbar";
import Footer from "../components/VoxUnity/Footer";

const Section1 = React.lazy(() => import("../components/VoxUnityCharte/Section1"));
const Section2 = React.lazy(() => import("../components/VoxUnityCharte/Section2"));
const Section3 = React.lazy(() => import("../components/VoxUnityCharte/Section3"));
const Section4 = React.lazy(() => import("../components/VoxUnityCharte/Section4"));
const Section5 = React.lazy(() => import("../components/VoxUnityCharte/Section5"));
const Section6 = React.lazy(() => import("../components/VoxUnityCharte/Section6"));


const VoxUnityCharteGraphique = () => {
    return (
        <div 
            className="w-full min-h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BG})` }} // background-image correcte
        >
            <Helmet>
                <link rel="preload" href={BG} as="image" /> {/* Préchargement */}
            </Helmet>

            <Navbar />
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
            
            <Footer />
        </div>
    );
}

export default VoxUnityCharteGraphique;
