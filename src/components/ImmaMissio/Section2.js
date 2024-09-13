import React from "react";
import Flou from "../../assets/flou.webp"; // Assurez-vous que le chemin est correct

const Section2 = () => {
  return (
    <section className="relative w-full">
      {/* Arrière-plan haut */}
      <div className="bg-[#FFFBED] h-60 w-full"></div>

      {/* Contenu de la section avec l'image centrale floue */}
      <div
        className="relative w-full min-h-[500px] flex justify-center items-center"
        style={{
          backgroundImage: `url(${Flou})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Premier bloc de contenu en absolute */}
        <div className="absolute flex flex-col items-center justify-center top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 shadow-lg p-4 md:p-8 mb-12 min-w-[90%] lg:min-w-[55%] md:max-w-[80%] lg:max-w-[50%] z-20 min-h-[320px] md:min-h-[370px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-dmserif text-center text-[#474747] md:mb-8 mb-4 ">
            Nos compétences au service de l'Eglise
          </h2>
          <p className="text-[#474747] text-center text-base sm:text-lg md:text-xl font-jost leading-relaxed max-w-[90%] md:max-w-[70%] mx-auto">
            Nous concevons et programmons nous-mêmes nos sites web pour vous garantir une qualité irréprochable, 
            100% made in France. Grâce à notre expertise en développement sur mesure, nous créons des sites 
            performants et adaptés à vos besoins, tout en respectant les standards de qualité.
          </p>
        </div>

        {/* Deuxième bloc de contenu en absolute */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg p-4 md:p-8 min-w-[90%] lg:min-w-[55%] md:max-w-[80%] lg:max-w-[60%] z-20 min-h-[320px] md:min-h-[370px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-dmserif text-center text-[#474747] mb-4 md:mb-8">
            Une expertise éprouvée
          </h2>
          <p className="text-[#474747] text-center text-base sm:text-lg md:text-xl leading-relaxed max-w-[90%] md:max-w-[70%] mx-auto font-jost">
            Les membres fondateurs de Synergie Innovation sont des fidèles catholiques. 
            Cette expérience nous permet de bien comprendre les contraintes et les besoins spécifiques 
            des prêtres et directeurs de patronage. En tant qu’équipe catholique, nous mettons à profit 
            cette connaissance pour créer des solutions numériques adaptées et efficaces, tout en respectant 
            les emplois du temps chargés de nos clients et en soutenant leur mission pastorale.
          </p>
        </div>
      </div>

      {/* Arrière-plan bas */}
      <div className="bg-[#FFFBED] h-60 w-full"></div>
    </section>
  );
};

export default Section2;
