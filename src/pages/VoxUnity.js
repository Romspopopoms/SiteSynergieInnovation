import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../assets/bg5.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../components/VoxUnity/Navbar";

// Supprimez ces lignes car vous utilisez React.lazy pour importer les composants
// import Section1 from "../components/VoxUnity/Section1";
// import Section2 from "../components/VoxUnity/Section2";
// import Section3 from "../components/VoxUnity/Section3"

const Section1 = React.lazy(() => import("../components/VoxUnity/Section1"));
const Section2 = React.lazy(() => import("../components/VoxUnity/Section2"));
const Section3 = React.lazy(() => import("../components/VoxUnity/Section3"));

const VoxUnity = () => {
    return (
        <div className="w-full min-h-screen bg-top bg-cover bg-repeat"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <Helmet>
                <link rel="preload" href={BG} as="image" />
            </Helmet>
            
            <Navbar />
            <Suspense fallback={null}>
                <div className="md:min-h-screen">
                    <Section1 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div>
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="min-h-screen">
                    <Section3 />
                </div>
            </Suspense>
            
        </div>
    );
}

export default VoxUnity;
