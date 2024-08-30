import React from "react";
import { FaRegWindowMaximize } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";


const Section5 = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full ">
            <h1 className="text-white text-4xl sm:text-6xl font-bold font-afacad">La mission de</h1>
            <h2 className="text-white text-4xl sm:text-6xl font-bold font-afacad ">Synergie Innovation</h2>
            <p className="text-white text-lg sm:text-2xl font-afacad max-w-[60%] mx-auto text-center mt-12">
            Depuis décembre 2023, Synergie Innovation s'efforce de rendre les outils numériques accessibles à l'ensemble du monde ecclésial à des tarifs abordables. Nous travaillons également avec des entreprises, offrant des services à des tarifs raisonnables.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[80%] space-y-12 md:space-x-24 mt-24">
                <div className="flex flex-col items-start justify-center">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold font-antonio">Nos services</h3>
                    <div className="flex flex-col justify-center items-start space-y-6">
                    <div className="flex space-x-8 mt-8 justify-center items-center">
                    <div className="bg-[#BEBAF7] border-4 border-white rounded-lg min-h-16 min-w-16 flex justify-center items-center">
                        <FaRegWindowMaximize className="size-8"/>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                    <h4 className="text-white text-xl sm:text-2xl font-bold font-antonio ">Developpement de site Internet</h4>
                    <p className="text-white text-md sm:text-lg font-antonio">Site vitrine ou e-commerce entièrement personnalisé</p>
                    </div>
                    </div>
                    <div className="flex space-x-8 mt-8 justify-center items-center">
                    <div className="bg-[#BEBAF7] border-4 border-white rounded-lg min-h-16 min-w-16 flex justify-center items-center">
                        <MdWindow className="size-8"/>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                    <h4 className="text-white text-xl sm:text-2xl font-bold font-antonio ">Création d'interfaces CRM et SIA</h4>
                    <p className="text-white text-md sm:text-lg font-antonio">Inscriptions, Devis...</p>
                    </div>
                    </div>
                    </div>   
                </div>   
                <div className="flex flex-col justify-center items-start">
                <h3 className="text-white text-2xl sm:text-3xl font-bold font-antonio text-start">Nos compétences</h3>
                    <div className="flex justify-center items-center space-x-4 mt-5">
                    <FaCircle className="size-4 text-white"/>
                    <p className="text-white text-md sm:text-lg font-antonio">Frontend</p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-5">
                    <FaCircle className="size-4 text-white"/>
                    <p className="text-white text-md sm:text-lg font-antonio">Backend</p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-5">
                    <FaCircle className="size-4 text-white"/>
                    <p className="text-white text-md sm:text-lg font-antonio">Design UI/UX</p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-5">
                    <FaCircle className="size-4 text-white"/>
                    <p className="text-white text-md sm:text-lg font-antonio">Communication</p>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Section5;
