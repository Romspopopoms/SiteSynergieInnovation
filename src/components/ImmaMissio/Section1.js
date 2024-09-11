import React from "react";
import Colonne from "../../assets/Colonnes.webp"; // Assurez-vous que le chemin est correct

const Section1 = () => {
  return (
    <section
      className="relative bg-cover bg-center pt-32 md:pt-40 min-h-screen" // Ajoute un padding-top pour compenser la hauteur de la navbar
      style={{ backgroundImage: `url(${Colonne})` }}
    >
      <div className="bg-white p-8 min-h-[400px] max-w-4xl shadow-lg w-full">
        <h1 className="text-3xl md:text-6xl font-bold font-DmSerif text-[#474747] mb-8 md:px-8 md:text-center ">
          La mission d'ImaMissio
        </h1>
        <p className="text-lg md:text-xl text-[#474747] font-jost font-medium leading-relaxed">
          Depuis décembre 2023, Synergie Innovation, à travers sa branche
          ImaMissio, s'engage à rendre les outils numériques accessibles à
          l’ensemble du monde ecclésial à des tarifs abordables. Nous
          développons des solutions web missionnaires pour l'Église tout en
          offrant nos services aux entreprises à des prix raisonnables, afin de
          soutenir leur présence en ligne et leur mission d'évangélisation.
        </p>
      </div>
    </section>
  );
};

export default Section1;
