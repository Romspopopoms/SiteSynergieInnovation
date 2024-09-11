import React, { useState, useRef, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
};

const Menu = [
    {
        name: "Analyse de vos besoins",
        description: "Pour créer un logo qui vous ressemble, nous commençons par une discussion avec vous pour comprendre vos attentes, votre vision, votre marché cible, et vos valeurs. Cela nous permet de définir un brief détaillé et de bien cerner votre identité. Ensuite, nous analysons l'histoire de votre entreprise, ses valeurs et ses objectifs pour que votre logo reflète parfaitement ce que vous souhaitez communiquer. Enfin, nous étudions le marché et vos concurrents pour identifier les meilleures pratiques et concevoir un logo unique et percutant, adapté à votre secteur.",
    },
    {
        name: "Recherche et reflexion",
        description: "Pour créer un logo unique, nous commençons par rechercher l'inspiration à partir de diverses sources, telles que les designs actuels, les symboles culturels, et la typographie. Cela nous permet de brainstormer et de générer des idées créatives adaptées à votre entreprise. Ensuite, nous élaborons un mood board, un tableau de styles qui regroupe les concepts, les couleurs, et les éléments stylistiques possibles, afin de visualiser et affiner l'identité visuelle qui correspondra le mieux à votre marque.",
    },
    {
        name: "Esquisse conceptuelle",
        description: "Nous passons ensuite à l'étape des croquis préliminaires, où nous réalisons des esquisses à la main pour explorer diverses idées et concepts. C'est une phase exploratoire où la créativité est essentielle pour donner vie à des idées uniques. Après cette exploration, nous sélectionnons les croquis les plus prometteurs, ceux qui capturent au mieux l'essence de votre marque et reflètent vos valeurs.",
    },
    {
        name: "Conception Numérique",
        description: "Nous passons ensuite à la vectorisation des croquis, où les meilleures esquisses sont transférées sur un logiciel de conception, comme Adobe Illustrator, pour créer des versions vectorielles. Cette étape permet de peaufiner le design en affinant les formes, les lignes, et les couleurs. Nous explorons également différentes typographies, styles, et combinaisons de couleurs pour développer plusieurs variations numériques du logo, afin de trouver la meilleure représentation de votre marque.",
    },
    {
        name: "Révisions et Feedback",
        description: "Une fois les concepts de logo créés, nous vous présentons les différentes options avec des explications sur les choix de conception et la manière dont ils répondent à votre brief initial. Nous recueillons ensuite vos commentaires pour comprendre ce qui fonctionne bien, ce qui pourrait être amélioré, ou ce qui doit être modifié. Sur la base de votre feedback, nous effectuons les révisions nécessaires pour ajuster le design et l'aligner parfaitement avec vos préférences et vos attentes.",
    },
    {
        name: "Finalisation du Logo",
        description: "Une fois votre choix finalisé, nous affinons les derniers détails pour perfectionner le logo. Ensuite, nous créons plusieurs versions du logo (couleur, noir et blanc, inversé) afin de garantir sa polyvalence. Nous exportons le logo dans divers formats (JPEG, PNG, SVG, PDF) pour vous permettre de l'utiliser efficacement sur tous vos supports de communication.",
    },
    {
        name: "Livraison et Documentation",
        description: "Enfin, nous vous fournissons les fichiers finaux du logo, accompagnés d'instructions d'utilisation pour garantir une application correcte sur tous vos supports. Nous créons également un guide de style complet, détaillant comment utiliser le logo, les couleurs, la typographie, et les marges appropriées, afin de maintenir une cohérence visuelle forte pour votre marque.",
    },
    {
        name: "Suivi et Support",
        description: "Après le lancement du logo, nous restons en contact avec vous pour nous assurer qu'il répond pleinement à vos attentes et qu'il fonctionne bien dans toutes ses applications. Nous offrons également un support continu pour toute modification future ou adaptation du logo, afin de garantir que votre identité visuelle reste pertinente et efficace au fil du temps.",
    },
];


const Section4 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = Menu.length;
    const itemsRef = useRef(null);
    const isMdAndUp = useMediaQuery("(min-width: 768px)"); // Taille md

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems); // Assurez-vous que l'index reste dans les limites de `Menu`
    };

    return (
        <section className="min-h-screen bg-[#FFFBED] py-16 px-8">
            <h1 className="text-4xl font-bold text-center mb-8">Le processus de création de votre logo</h1>

            <div className="flex items-center justify-center">
                {/* Carrousel avec 3,5 cartes visibles pour md et plus */}
                <div className="flex overflow-hidden w-[90%] max-w-7xl">
                    {isMdAndUp ? (
                        <div
                            ref={itemsRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * (100 / 3.5)}%)` }}
                        >
                            {Menu.map((item, index) => (
                                <div key={index} className="flex-shrink-0 md:w-[calc(100%/4.5)] px-4">
                                    <div className="bg-white shadow-lg rounded-lg p-6 h-[650px]">
                                        <h2 className="text-2xl font-semibold mb-4">{item.name}</h2>
                                        <p className="text-lg">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Carrousel basique pour les écrans plus petits que md
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-white shadow-lg rounded-lg p-6 h-[650px] w-full">
                                <h2 className="text-2xl font-semibold mb-4">{Menu[activeIndex].name}</h2>
                                <p className="text-lg">{Menu[activeIndex].description}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Flèche droite */}
                <button
                    className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 ml-4"
                    onClick={handleNext}
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
};

export default Section4;