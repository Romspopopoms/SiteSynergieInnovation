import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Section3 = () => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleOpen = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    const toggleVariants = {
        open: {
            height: "auto",
            opacity: 1,
            transition: { duration: 0.3 },
        },
        closed: {
            height: 0,
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    const services = [
        { title: "Gestion des Réseaux Sociaux", description: "Nous créons et gérons vos comptes sur les réseaux sociaux, en publiant régulièrement du contenu engageant pour attirer et fidéliser votre audience." },
        { title: "Animation de la Communauté", description: "Nous animons et dynamisons votre communauté en répondant aux commentaires, messages et en initiant des discussions pour renforcer les liens avec vos clients." },
        { title: "Création de Contenu Attractif", description: "Nous produisons du contenu créatif et pertinent (textes, images, vidéos) adapté à chaque plateforme pour maximiser l’engagement de votre audience." },
        { title: "Veille et Analyse des Tendances", description: "Nous surveillons les tendances du marché et les activités des concurrents pour ajuster votre stratégie et rester à la pointe de l’actualité." },
        { title: "Gestion de la Réputation en Ligne", description: "Nous surveillons les mentions de votre marque et gérons les avis et commentaires pour maintenir une image positive et réactive." },
        { title: "Stratégie d'Engagement", description: "Nous développons des stratégies pour stimuler l’interaction et augmenter le taux d’engagement, en utilisant des concours, sondages et autres outils interactifs." },
        { title: "Suivi et Reporting des Performances", description: "Nous analysons les performances de vos réseaux sociaux grâce à des indicateurs clés (KPI) et fournissons des rapports réguliers pour optimiser les résultats." },
        { title: "Collaboration avec les Équipes de Marketing", description: "Nous travaillons en étroite collaboration avec votre équipe de marketing pour garantir une stratégie cohérente et efficace." },
    ];

    return (
        <div className="grid grid-cols-1 relative mt-24 md:max-w-[80%] mx-auto">
            <div className="flex flex-col py-8 px-8 space-y-8 items-center">
                <h2 className=" text-2xl md:text-5xl font-bold font-poppins mb-12 text-center text-[#474747]">
                Optimisez Votre Présence en Ligne avec unCommunity Manager Dédié.
                </h2>
                <div className="flex flex-col gap-4 items-start w-full">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col w-full">
                            <div
                                className="flex space-x-6 items-start cursor-pointer"
                                onClick={() => toggleOpen(index)}
                            >
                                <FontAwesomeIcon icon={openIndexes.includes(index) ? faTimes : faPlus} className="size-6 text-[#474747] mt-1" />
                                <h3 className="font-poppins text-[#474747] font-semibold text-xl">{service.title}</h3>
                            </div>
                            <motion.div
                                initial={false}
                                animate={openIndexes.includes(index) ? "open" : "closed"}
                                variants={toggleVariants}
                                style={{ overflow: "hidden" }}
                                className="mt-2 ml-10"
                            >
                                <p className="ml-2 text-[#474747] text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                            <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#474747] to-transparent my-0 mt-8" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section3;
