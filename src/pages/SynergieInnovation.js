import React from "react";
import Section1 from "../components/Section1"
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const SynergieInnovationPage = () => {
    return (
        <div>
            <div id="Accueil" className="min-h-screen">
            <Section1 />
            </div>
            <div>
            <Section2 />
            </div>
            <div id="#NosSolutions" className="min-h-screen">
            <Section3 />
            </div>
        </div>
    )
}

export default SynergieInnovationPage