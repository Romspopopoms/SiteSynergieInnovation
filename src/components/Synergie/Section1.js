import React from "react";
import { motion, easeInOut } from "framer-motion";
import BG from "../../assets/Bglandinghome.webp";
import { HiPaintBrush } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import Square from "../../assets/Square+.svg";
import { MdGroups } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import Navbar from "./Navbar";

const Section1 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] md:min-h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${BG})` }}>
            <Navbar />
            <div className="flex flex-col items-center text-center">
                <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: easeInOut }}
                className="text-white text-4xl sm:text-6xl font-bold font-afacad">
                    Innovons ensemble
                </motion.h1>
                <div className="mt-4">
                    <p className="text-white text-2xl sm:text-4xl font-thin font-afacad">
                        Pour maîtriser votre avenir
                    </p>
                    <p className="text-white text-2xl sm:text-4xl font-thin font-afacad">
                        numérique
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-16 gap-x-4 gap-y-4">
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <HiPaintBrush className="text-white size-6" />
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">Design</p>
                    </div>
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <RiComputerLine className="text-white size-6" />
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">Site Web</p>
                    </div>
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <img src={Square} alt="Square" className=" size-6" />
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">CRM</p>
                    </div>
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <MdGroups className="text-white size-6" />
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">Communication</p>
                    </div>
                    <div className="flex gap-x-2 rounded-xl border-2 border-white p-2 hover:scale-110 ease-in-out duration-300">
                        <BsStars className="text-white size-6" />
                        <p className="text-white text-lg sm:text-xl font-thin font-abeezee">Outils API</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
