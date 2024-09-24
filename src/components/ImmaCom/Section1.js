import React from "react";
import ImmaBg from "../../assets/ImmaBG.webp"; // Image principale
import ParoisseLogo from "../../assets/Paroisselogo.webp"; // Logo Paroisse

const Section3 = () => {
  return (
    <section className=" bg-[#FFFBED] flex items-center justify-start pt-32 md:pt-40">
      {/* Première image décalée sur la gauche avec position relative */}
      <div className="w-[80%] md:w-[50%] mx-auto h-auto md:ml-[15%] relative mb-32">
        <img
          src={ImmaBg}
          alt="ImaMissio"
          className="w-full h-auto object-cover"
        />

        {/* Deuxième image en absolute, relative à la première image */}
        <div className="ml-2 md:ml-0 absolute bottom-[-100px] md:bottom-[-100px] md:right-[-250px] w-[300px] h-[150px] md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[300px] border-8 md:border-[15px] border-[#FFFDF5]">
          <img
            src={ParoisseLogo}
            alt="Paroisse Logo"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
