import React from "react";
import BG from "../assets/Bg2.png";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6"
import Section7 from "../components/Section7";
import Footer from "../components/Footer";
const SynergieInnovationPage = () => {
    return (
        <div className="w-full bg-top bg-cover space-y-12 bg-repeat"
        style={{backgroundImage : `url(${BG})`}}>
            <div id="Accueil" className="min-h-screen">
                <Section1 />
            </div>
            <div>
                <Section2 />
            </div>
            <div id="NosSolutions" className="min-h-screen">
                <Section3 />
            </div>
            <div id="NosServices" className="md:min-h-screen">
                <Section4 />
            </div>
            <div id="NotreMission" className="min-h-screen">
                <Section5 />
            </div>
            <div id="Notreéquipe" className="">
                <Section6 />
            </div>
            <div id="Contact" className="">
                <Section7 />
            </div>
            <div>
                <Footer/>
            </div>
            {/* Ajoutez d'autres sections avec leurs IDs ici */}
        </div>
    );
}

export default SynergieInnovationPage;
