import React from 'react';

const data = [
  {
    category: "Analyse et Stratégie de Cible (Etude et Analyse)",
    elements: [
      {
        title: "Analyse des Objectifs de l'Entreprise",
        description: "Comprendre les objectifs stratégiques de l'entreprise pour définir des objectifs de communication clairs et alignés."
      },
      {
        title: "Étude du Marché et de la Concurrence",
        description: "Analyser le marché, identifier les tendances, et étudier les stratégies de communication des concurrents pour élaborer un plan efficace."
      },
      {
        title: "Définition de la Cible",
        description: "Identifier et segmenter le public cible pour personnaliser le message et les canaux de communication."
      }
    ]
  },
  {
    category: "Conception et Planification des Actions de Communication",
    elements: [
      {
        title: "Élaboration du Message Clé",
        description: "Concevoir un message clair et cohérent qui reflète les valeurs de l'entreprise et qui capte l'attention de la cible."
      },
      {
        title: "Choix des Canaux de Communication",
        description: "Sélectionner les plateformes numériques et les canaux de communication les plus pertinents pour atteindre la cible."
      },
      {
        title: "Planification des Actions de Communication",
        description: "Développer un calendrier de contenu détaillé, incluant les types de contenus à produire (articles, vidéos, infographies) et leur diffusion."
      },
      {
        title: "Création et Production de Contenu",
        description: "Superviser la création de contenu en collaboration avec les créatifs pour s'assurer que tous les supports sont alignés avec le message et les objectifs de l'entreprise."
      }
    ]
  },
  {
    category: "Mise en Œuvre, Évaluation, et Gestion de l'Équipe",
    elements: [
      {
        title: "Mise en Œuvre et Suivi",
        description: "Lancer les campagnes de communication sur les différents canaux choisis et assurer un suivi régulier des performances."
      },
      {
        title: "Analyse des Résultats et Ajustements",
        description: "Évaluer l'efficacité des actions menées grâce aux indicateurs de performance (KPI) et ajuster la stratégie."
      },
      {
        title: "Gestion d'Équipe",
        description: "Coordonner et motiver les équipes de communication, en assurant une répartition efficace des tâches et un environnement de travail dynamique."
      }
    ]
  }
];

const Section3 = () => {
  return (
    <div className="flex flex-col items-center w-full py-48 bg-cover">
      {/* Titres */}
      <div className="text-center max-w-[80%] mb-12">
        <h1 className="text-[#474747] text-2xl md:text-5xl font-bold font-poppins">
          Votre Directeur de Communication
        </h1>
        <h2 className="text-[#474747] text-2xl md:text-5xl font-bold font-poppins mt-2 md:0">
          Dédié pour une Stratégie Web Réussie.
        </h2>
      </div>

      {/* Grille pour écrans moyens et grands */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-[70%]">
        {data.map((section, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-[#474747] font-poppins text-lg md:text-xl font-semibold text-center">
              {section.category}
            </h3>
            {section.elements.map((element, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-start bg-transparent py-10 px-4 rounded-[20px] shadow-xl min-h-[300px]" 
                style={{
                  backdropFilter: "blur(40px)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.67)"
                }}
              >
                <h4 className="font-poppins text-[#474747] text-md md:text-lg font-semibold mb-2">{element.title}</h4>
                <p className="text-[#474747] font-poppins text-sm md:text-base">{element.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Slider pour petits écrans */}
      <div className="md:hidden flex overflow-x-scroll snap-x snap-mandatory space-x-6 w-full px-4">
        {data.map((section, index) => (
          <div key={index} className="snap-center flex-shrink-0 flex flex-col justify-start items-start w-[90%] min-h-[400px] space-y-4">
            <h3 className="text-[#474747] font-poppins text-lg md:text-xl font-semibold text-center">
              {section.category}
            </h3>
            <div className="flex flex-col space-y-4">
              {section.elements.map((element, idx) => (
                <div 
                  key={idx} 
                  className="relative flex flex-col justify-start bg-transparent py-10 px-4 rounded-[20px] shadow-xl min-h-[300px]" 
                  style={{
                    backdropFilter: "blur(40px)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.67)"
                  }}
                >
                  <h4 className="font-poppins text-[#474747] text-md md:text-lg font-semibold mb-2">{element.title}</h4>
                  <p className="text-[#474747] font-poppins text-sm md:text-base">{element.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
