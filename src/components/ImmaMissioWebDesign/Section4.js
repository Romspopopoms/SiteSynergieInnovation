import React from 'react';
import Ico1 from "../../assets/1.svg"
import Ico2 from "../../assets/2.svg"
import Ico3 from "../../assets/3.svg"
import Ico4 from "../../assets/4.svg"
import Ico5 from "../../assets/5.svg"
import Ico6 from "../../assets/6.svg"
import Ico7 from "../../assets/7.svg"
import Ico8 from "../../assets/8.svg"
import Ico9 from "../../assets/9.svg"

const features = [
    {
        icon: <img src={Ico1} alt='Ico1' className='w-24 h-24'></img>,
        title: "Conception Responsive",
        description: "Nous nous assurons que votre site web s'adapte parfaitement à tous les appareils (ordinateurs, tablettes, smartphones). Un design responsive garantit une navigation fluide et agréable pour vos visiteurs, quel que soit l'appareil utilisé.",
    },
    {
        icon: <img src={Ico2} alt='Ico3' className='w-24 h-24'></img>,
        title: "Expérience Utilisateur (UX)",
        description: "Nous nous concentrons sur l'expérience utilisateur pour rendre votre site intuitif et facile à utiliser. Nous créons une navigation claire, des menus simples, et une structure de contenu bien pensée pour guider vos utilisateurs sans effort et les encourager à explorer davantage.",
    },
    {
        icon: <img src={Ico3} alt='Ico3' className='w-24 h-24'></img>,
        title: "Interface Utilisateur (UI)",
        description: "Nous travaillons sur l'aspect visuel de votre site pour le rendre attrayant et fonctionnel. Nous choisissons soigneusement les couleurs, les typographies, les images, les icônes, et les boutons pour créer une interface qui capte l'attention et facilite l'interaction des utilisateurs avec vos contenus.",
    },
    {
        icon: <img src={Ico4} alt='Ico4' className='w-24 h-24'></img>,
        title: "Cohérence Visuelle",
        description: "Nous maintenons une cohérence visuelle sur toutes les pages de votre site pour renforcer l'identité de votre marque. Nous utilisons les mêmes styles, couleurs, et typographies pour offrir une expérience uniforme et professionnelle à vos visiteurs.",
    },
    {
        icon: <img src={Ico5} alt='Ico6' className='w-24 h-24 '></img>,
        title: "Hiérarchie Visuelle",
        description: "Nous organisons les éléments de votre site pour diriger l'attention des utilisateurs vers les informations les plus importantes. Nous utilisons des tailles de police, des contrastes de couleur, et des espacements stratégiques pour hiérarchiser le contenu et améliorer la lisibilité.",
    },
    {
        icon: <img src={Ico6} alt='Ico5' className='w-24 h-24 '></img>,
        title: "Appels à l'Action (CTA) Visuels",
        description: "Nous concevons des appels à l'action qui sont clairs et visuellement distincts pour encourager vos visiteurs à interagir avec votre site. Nous utilisons des couleurs contrastantes et des boutons attrayants, placés de manière stratégique pour maximiser l'engagement.",
    },

    {
        icon: <img src={Ico7} alt='Ico7' className='w-24 h-24 '></img>,
        title: "Design Minimaliste",
        description: "Nous privilégions un design épuré qui évite de surcharger votre site d'informations inutiles. Un design minimaliste permet de mettre en valeur le contenu essentiel, améliorant ainsi la compréhension et l'expérience globale de vos utilisateurs. En appliquant ces principes de design, nous créons pour vous un site web qui non seulement est visuellement attrayant, mais qui améliore également l'expérience de vos utilisateurs, tout en reflétant l’identité unique de votre marque.",
    },
    {
        icon:<img src={Ico8} alt='Ico8' className='w-24 h-24 '></img>,
        title: "Programmation",
        description: "La programmation est au cœur du développement de sites web. Elle permet de créer des sites sur mesure qui répondent parfaitement aux besoins spécifiques de chaque institution. Grâce à la programmation, nous pouvons concevoir des fonctionnalités personnalisées, optimiser les performances, et assurer une navigation fluide et sécurisée pour les utilisateurs. C'est cette expertise technique qui garantit que votre site web sera à la fois performant, intuitif et en parfaite adéquation avec votre mission.",
    },
    {
        icon: <img src={Ico9} alt='Ico9' className='w-24 h-24 '></img>,
        title: "Publication",
        description: "La publication d'un site web est l'étape finale qui permet de rendre votre site accessible au monde entier. Après avoir testé et optimisé toutes les fonctionnalités, nous nous assurons que votre site est prêt à être mis en ligne. Cette phase comprend la configuration de l'hébergement, le déploiement du site sur un serveur sécurisé, et l'optimisation pour les moteurs de recherche (SEO) afin de garantir une visibilité maximale. Une fois publié, votre site devient un outil puissant pour communiquer avec votre communauté et atteindre vos objectifs en ligne.",
    }
];

const Section4 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-0 ">
            {/* Titre principal */}
            <h1 className="font-dmserif font-medium text-4xl md:text-6xl text-center text-[#474747] mb-12">
                Conception Webdesign
            </h1>

            {/* Grille d'icônes et de fonctionnalités */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[70%]">
                {/* Mapping des trois premiers éléments */}
                {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-8">
                        <div className="bg-white shadow-lg w-60 h-60 flex justify-center items-center ">
                            <span className="text-[#474747]">{feature.icon}</span>
                        </div>
                        <div className="flex flex-col justify-items-center md:justify-start md:items-start w-full max-w-full">
                            <h3 className="font-dmserif font-medium text-3xl text-[#474747] text-center md:text-left">
                                {feature.title}
                            </h3>
                            <p className="font-light font-jost text-lg text-[#474747] mt-2 text-center md:text-left">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Espacement visuel entre les deux rangées sur mobile */}

                {/* Mapping des trois éléments suivants */}
                {features.slice(3, 6).map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-8">
                        <div className="bg-white shadow-lg w-60 h-60 flex justify-center items-center ">
                            <span className="text-[#474747]">{feature.icon}</span>
                        </div>
                        <div className="flex flex-col justify-items-center md:justify-start md:items-start w-full max-w-full">
                            <h3 className="font-dmserif font-medium text-3xl text-[#474747] text-center md:text-left">
                                {feature.title}
                            </h3>
                            <p className="font-light font-jost text-lg text-[#474747] mt-2 text-center md:text-left">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}

                {features.slice(6, 9).map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-8">
                        <div className="bg-white shadow-lg w-60 h-60 flex justify-center items-center ">
                            <span className="text-[#474747]">{feature.icon}</span>
                        </div>
                        <div className="flex flex-col justify-items-center md:justify-start md:items-start w-full max-w-full">
                            <h3 className="font-dmserif font-medium text-3xl text-[#474747] text-center md:text-left">
                                {feature.title}
                            </h3>
                            <p className="font-light font-jost text-lg text-[#474747] mt-2 text-center md:text-left">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section4;
