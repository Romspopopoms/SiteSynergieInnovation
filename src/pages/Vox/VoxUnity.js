import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../../assets/bg5.webp"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import Navbar from "../../components/VoxUnity/Navbar";
import Footer from "../../components/VoxUnity/Footer"

const Section1 = React.lazy(() => import("../../components/VoxUnity/Section1"));
const Section2 = React.lazy(() => import("../../components/VoxUnity/Section2"));
const Section3 = React.lazy(() => import("../../components/VoxUnity/Section3"));
const Section4 = React.lazy(() => import("../../components/VoxUnity/Section4"));
const Section5 = React.lazy(() => import("../../components/VoxUnity/Section5"));

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
                <div className="md:mt-24 mt-12">
                    <Section3 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="md:mt-24 mt-12">
                    <Section4 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div className="mt-36">
                    <Section5 />
                </div>
            </Suspense>

            <Footer />
            
        </div>
    );
}

export default VoxUnity;
