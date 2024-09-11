import React from "react";
import BG from "../../assets/bgCharteImma.webp"; // Assurez-vous que le chemin est correct

const Section1 = () => {
  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center justify-start pt-32 md:pt-40">
      {/* Overlay pour l'image d'arrière-plan avec opacité */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7, // Applique l'opacité ici directement
        }}
      ></div>

      {/* Contenu avec opacité non affectée */}
      <div className="relative z-10 bg-white p-6 min-h-[200px] md:min-h-[270px] md:max-w-3xl shadow-lg w-full max-w-[90%]">
        <h1 className="text-4xl md:text-6xl font-medium font-DmSerif text-[#474747] md:px-8 md:max-w-[80%] ">
          Un Visuel Unique Pour Votre Paroisse
        </h1>

      </div>
    </section>
  );
};

export default Section1;
