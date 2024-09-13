import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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


const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
        </svg>
      </div>
    );
  };

  

const Section4 = () => {
    // Paramètres de React Slick
    const settings = {
      infinite: true,          // Active le défilement infini
      speed: 500,
      slidesToShow: 3,       // Montre 3,5 cartes en md+
      slidesToScroll: 1,
      nextArrow: <NextArrow />, 
      responsive: [
        {
          breakpoint: 768,      // Pour les tailles en dessous de 768px
          settings: {
            slidesToShow: 1,    // Montre 1 slide pour les petits écrans
            slidesToScroll: 1,
          }
        }
      ]
    };
  
    return (
      <section className="min-h-screen bg-[#FFFBED] py-16 px-8">
        <h1 className="text-3xl md:text-5xl font-dmserif font-medium text-center mb-8">
          Le processus de création de votre logo
        </h1>
        
        {/* Utilisation de React Slick pour créer le carrousel */}
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {Menu.map((item, index) => (
              <div key={index} className="px-4">
                <div className="bg-white shadow-lg rounded-lg p-6 h-[480px]">
                  <h2 className="text-2xl font-dmserif font-medium mb-4">
                    {item.name}
                  </h2>
                  <p className="font-jost font-light text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  export default Section4;