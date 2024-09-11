import React from "react";
import eveque from "../../assets/Eveque.webp"; // Assurez-vous que le chemin est correct

const Section3 = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white "
      style={{
        backgroundImage: `url(${eveque})`,
      }}
    >
      {/* Le conteneur du texte prend toute la largeur */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay noir transparent pour le texte */}
      
      <div className="relative z-10 p-8 md:p-16 lg:p-24 text-center ">
        <h2 className="text-3xl md:text-5xl font-bold font-DmSerif text-[#FFFDF5] mb-6">
          Une équipe de missionnaires 2.0
        </h2>
        <p className="text-lg md:text-xl text-[#FFFDF5] leading-relaxed md:max-w-[60%] mx-auto">
          Notre équipe, profondément enracinée dans la foi catholique, est animée par le désir de faire la gloire de Dieu. 
          Chacun de nous s’efforce, par ses compétences et son dévouement, de servir l'Église en développant des outils numériques innovants. 
          Nous croyons fermement que la technologie peut être un puissant vecteur pour soutenir et enrichir la mission de l'Église dans le monde moderne.
        </p>
      </div>
    </section>
  );
};

export default Section3;
