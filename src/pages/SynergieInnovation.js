import React, { Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import BG from "../assets/Bglandinghome.webp";
import Footer from "../components/Footer";

// Lazy loading des sections
const Section1 = React.lazy(() => import("../components/Section1"));
const Section2 = React.lazy(() => import("../components/Section2"));
const Section3 = React.lazy(() => import("../components/Section3"));
const Section4 = React.lazy(() => import("../components/Section4"));
const Section5 = React.lazy(() => import("../components/Section5"));
const Section6 = React.lazy(() => import("../components/Section6"));
const Section7 = React.lazy(() => import("../components/Section7"));

const SynergieInnovationPage = () => {
    return (
        <div className="w-full bg-top bg-cover bg-repeat"
            style={{ backgroundImage: `url(${BG})` }}
        >
            <Helmet>
                <link rel="preload" href={BG} as="image" />
            </Helmet>

            <Suspense fallback={null}>
                <div id="Accueil" className="md:min-h-screen">
                    <Section1 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div>
                    <Section2 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="NosSolutions" className="min-h-screen">
                    <Section3 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="NosServices" className="md:min-h-screen">
                    <Section4 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="NotreMission" className="min-h-screen">
                    <Section5 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="Notreequipe" className="">
                    <Section6 />
                </div>
            </Suspense>

            <Suspense fallback={null}>
                <div id="Contact" className="">
                    <Section7 />
                </div>
            </Suspense>

            <Footer />
        </div>
    );
}

export default SynergieInnovationPage;
