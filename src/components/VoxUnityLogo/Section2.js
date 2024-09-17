import { React, useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import LogoVox from "../../assets/Logo vox W.svg";

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

const Section2 = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Gérer l'index du titre actuellement survolé

    const handleMouseEnter = (index) => {
        setHoveredIndex(index); // Ouvre le modal correspondant à ce titre
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null); // Ferme le modal lorsqu'on quitte la div
    };

    return (
        <div className="w-full max-w-6xl mx-auto mt-8 relative">
            {/* Grille pour les grands écrans */}
            <div className=" grid-cols-2 gap-4 w-full hidden md:grid">
                {/* Colonne de gauche : Menu des étapes */}
                <div className="flex flex-col space-y-4">
                    {Menu.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-4 rounded-md relative"
                            onMouseEnter={() => handleMouseEnter(index)} // Ouvre le modal au survol de la div
                            onMouseLeave={handleMouseLeave} // Ferme le modal quand la souris quitte la div
                        >
                            {/* Titre de la section */}
                            <h3 className="text-white font-poppins font-bold text-lg md:text-2xl">
                                {item.name}
                            </h3>

                            {/* Flèche à droite */}
                            <FaCircleArrowRight
                                className="text-white cursor-pointer h-8 w-8 hover:text-[#8D1257] transition-all duration-200"
                            />
                        </div>
                    ))}
                </div>

                {/* Colonne de droite : Image */}
                <div className="flex justify-center items-center relative">
                    <img src={LogoVox} alt="Logo Vox" className="w-[80%] h-auto" />

                    {/* Modal toujours positionné sur le logo Vox */}
                    {hoveredIndex !== null && (
                        <div
                            className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 m-auto w-[80%] h-full bg-transparent rounded-md z-10"
                            style={{ backdropFilter: "blur(40px)" }}
                        >
                            <p className="text-white font-poppins font-medium text-lg max-w-[90%] text-center">
                                {Menu[hoveredIndex].description}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Slider pour les petits écrans */}
            <div className="md:hidden overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex space-x-6 w-full px-4 mt-12">
                {Menu.map((item, index) => (
                    <div
                        key={index}
                        className="snap-center flex-shrink-0 flex flex-col justify-center items-start bg-white/10 backdrop-blur-lg w-[85%] min-h-[400px] p-8 border-2 border-[#6BABFF] shadow-lg"
                        style={{ borderRadius: "20px" }}
                    >
                        {/* Titre de la carte */}
                        <h3 className="text-white font-poppins font-bold text-lg mb-4">
                            {item.name}
                        </h3>

                        {/* Description de la carte */}
                        <p className="text-white text-base leading-relaxed flex-grow">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section2;
