import React from "react";
import Colonne from "../../assets/Colonnes.webp"; // Assurez-vous que le chemin est correct

const Section1 = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${Colonne})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 md:p-16 lg:p-24 max-w-4xl mx-auto rounded-lg shadow-lg my-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          La mission d'ImaMissio
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
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
