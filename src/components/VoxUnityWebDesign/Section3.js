import React from 'react';
import { FaLaptop, FaUserAlt, FaPencilAlt, FaEye, FaLayerGroup, FaBullseye } from 'react-icons/fa';

const features = [
    {
        icon: <FaLaptop className="text-5xl" />,
        title: "Conception Responsive",
        description: "Nous nous assurons que votre site web s'adapte parfaitement à tous les appareils (ordinateurs, tablettes, smartphones). Un design responsive garantit une navigation fluide et agréable pour vos visiteurs, quel que soit l'appareil utilisé.",
    },
    {
        icon: <FaUserAlt className="text-5xl" />,
        title: "Expérience Utilisateur (UX)",
        description: "Nous nous concentrons sur l'expérience utilisateur pour rendre votre site intuitif et facile à utiliser. Nous créons une navigation claire, des menus simples, et une structure de contenu bien pensée pour guider vos utilisateurs sans effort et les encourager à explorer davantage.",
    },
    {
        icon: <FaPencilAlt className="text-5xl" />,
        title: "Interface Utilisateur (UI)",
        description: "Nous travaillons sur l'aspect visuel de votre site pour le rendre attrayant et fonctionnel. Nous choisissons soigneusement les couleurs, les typographies, les images, les icônes, et les boutons pour créer une interface qui capte l'attention et facilite l'interaction des utilisateurs avec vos contenus.",
    },
    {
        icon: <FaEye className="text-5xl" />,
        title: "Cohérence Visuelle",
        description: "Nous maintenons une cohérence visuelle sur toutes les pages de votre site pour renforcer l'identité de votre marque. Nous utilisons les mêmes styles, couleurs, et typographies pour offrir une expérience uniforme et professionnelle à vos visiteurs.",
    },
    {
        icon: <FaLayerGroup className="text-5xl" />,
        title: "Hiérarchie Visuelle",
        description: "Nous organisons les éléments de votre site pour diriger l'attention des utilisateurs vers les informations les plus importantes. Nous utilisons des tailles de police, des contrastes de couleur, et des espacements stratégiques pour hiérarchiser le contenu et améliorer la lisibilité.",
    },
    {
        icon: <FaBullseye className="text-5xl" />,
        title: "Appels à l'Action (CTA) Visuels",
        description: "Nous concevons des appels à l'action qui sont clairs et visuellement distincts pour encourager vos visiteurs à interagir avec votre site. Nous utilisons des couleurs contrastantes et des boutons attrayants, placés de manière stratégique pour maximiser l'engagement.",
    }
];

const Section3 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-0">
            {/* Titre principal */}
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-center text-white mb-12">
                Conception Webdesign<span className='text-[#8D1257]'>.</span>
            </h1>

            {/* Grille d'icônes et de fonctionnalités */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
                {/* Mapping des trois premiers éléments */}
                {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-8">
                        <div className="bg-[#071726] bg-opacity-40 w-48 h-48 flex justify-center items-center rounded-lg">
                            <span className="text-white">{feature.icon}</span>
                        </div>
                        <div className="flex flex-col justify-items-center md:justify-start md:items-start w-full max-w-full md:max-w-[67%]">
                            <h3 className="font-poppins font-semibold text-xl text-white text-center md:text-left">
                                {feature.title}
                            </h3>
                            <p className="font-poppins text-sm text-white mt-2 text-center md:text-left">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Espacement visuel entre les deux rangées sur mobile */}

                {/* Mapping des trois éléments suivants */}
                {features.slice(3, 6).map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-8">
                        <div className="bg-[#071726] bg-opacity-40 w-48 h-48 flex justify-center items-center rounded-lg">
                            <span className="text-white">{feature.icon}</span>
                        </div>
                        <div className="flex flex-col justify-items-center md:justify-start md:items-start w-full max-w-full md:max-w-[67%]">
                            <h3 className="font-poppins font-semibold text-xl text-white text-center md:text-left">
                                {feature.title}
                            </h3>
                            <p className="font-poppins text-sm text-white mt-2 text-center md:text-left">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section "Design Minimaliste" */}
            <div className="w-full mt-16 flex flex-col items-center">
                {/* Rectangle contenant l'icône */}
                <div className="flex items-center justify-center bg-[#071726] bg-opacity-40 w-[90%] md:w-[80%] h-40 rounded-lg mb-6">
                    <div className="text-white text-5xl">
                        <FaLayerGroup />
                    </div>
                </div>

                {/* Texte en dessous du rectangle */}
                <div className="w-[90%] md:w-[80%] max-w-5xl mb-12">
                    <h2 className="font-poppins font-bold text-2xl md:text-4xl text-white text-center md:text-left mb-4">
                        Design Minimaliste
                    </h2>
                    <p className="font-poppins text-white text-center md:text-left text-lg md:text-xl leading-relaxed">
                        Nous privilégions un design épuré qui évite de surcharger votre site d'informations inutiles. Un design minimaliste permet de mettre en valeur le contenu essentiel, améliorant ainsi la compréhension et l'expérience globale de vos utilisateurs. En appliquant ces principes de design, nous créons pour vous un site web qui non seulement est visuellement attrayant, mais qui améliore également l'expérience de vos utilisateurs, tout en reflétant l’identité unique de votre marque.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section3;
