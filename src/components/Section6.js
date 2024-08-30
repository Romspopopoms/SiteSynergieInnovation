import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedTitle from "../components/Animated"; // Assurez-vous que le composant AnimatedTitle est importé
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const Section6 = () => {
    const [Open, SetOpen] = useState(false);
    const [Open2, SetOpen2] = useState(false);
    const [Open3, SetOpen3] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="grid grid-cols-1 relative mt-36 md:max-w-[80%] mx-auto">
            <div className="mt-8 flex flex-col py-8 px-8 space-y-8 items-center">
                <AnimatedTitle
                    text="Des questions?"
                    className="font-inter text-[#FFFFFF] font-bold text-4xl md:text-7xl text-center md:mb-12"
                    isInView={isInView}
                />
                <div className="flex flex-col gap-4 items-start w-full">
                    <div className="flex flex-col w-full mt-12">
                        <div
                            className="flex min-w-[70%] space-x-6 items-start ml-8 cursor-pointer"
                            onClick={() => SetOpen(!Open)}
                        >
                            <FontAwesomeIcon icon={Open ? faTimes : faPlus} className="size-6 text-[#394040] mt-1" />
                            <h3 className="font-afacad text-[#FFFFFF] font-semibold text-2xl">Quels types de solutions numériques ?</h3>
                        </div>
                        {Open && (
                            <div className="mt-4 ml-20 max-w-[80%]">
                                <p className="text-left font-afacad text-xl text-[#FFFFFF]">
                                    Nous proposons des solutions personnalisées incluant la création de site web vitrine, e-commerce, CRM, ainsi que des services de design graphique, de SEO, et de développement d'applications web.
                                </p>
                            </div>
                        )}
                        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent my-0 mt-8" />
                    </div>

                    <div className="flex flex-col w-full">
                        <div
                            className="flex min-w-[70%] space-x-6 items-start ml-8 cursor-pointer"
                            onClick={() => SetOpen2(!Open2)}
                        >
                            <FontAwesomeIcon icon={Open2 ? faTimes : faPlus} className="size-6 text-[#394040] mt-1" />
                            <h4 className="font-afacad text-[#FFFFFF] font-semibold text-2xl">Quels sont vos tarifs pour les services de développement web et de design graphique ?</h4>
                        </div>
                        {Open2 && (
                            <div className="mt-4 ml-20 max-w-[80%] text-[#394040]">
                                <p className="text-left font-afacad text-xl text-[#FFFFFF]">
                                    Nos tarifs sont compétitifs et adaptés aux besoins spécifiques de chaque client. Contactez-nous pour obtenir un devis personnalisé en fonction de votre projet.
                                </p>
                            </div>
                        )}
                        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent my-0 mt-8" />
                    </div>

                    <div className="flex flex-col w-full z-10 relative">
                        <div
                            className="flex min-w-[70%] space-x-6 items-start ml-8 cursor-pointer"
                            onClick={() => SetOpen3(!Open3)}
                        >
                            <FontAwesomeIcon icon={Open3 ? faTimes : faPlus} className="size-6 text-[#394040] mt-1" />
                            <h5 className="font-afacad text-[#FFFFFF] font-semibold text-2xl">Comment garantir la visibilité de mon site web?</h5>
                        </div>
                        {Open3 && (
                            <div className="mt-4 ml-20 max-w-[80%]">
                                <p className="text-left font-afacad text-xl text-[#FFFFFF]">
                                    Nous offrons des services de SEO pour améliorer le classement de votre site sur les moteurs de recherche et augmenter sa visibilité en ligne. Nous adaptons nos stratégies pour maximiser votre présence digitale.
                                </p>
                            </div>
                        )}
                        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent my-0 mt-8" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section6;
