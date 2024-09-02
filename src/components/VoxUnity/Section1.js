import React from "react";
import LogoVox from "../../assets/Logo vox W.svg";

const Section1 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <img src={LogoVox} alt="LogoVoxUnity" className="object-cover w-[60%] sm:w-[40%] xl:w-[26%]" />
            <div className="flex justify-between items-center h-auto w-[80%] sm:w-[60%] xl:w-[35%] mx-auto rounded-full bg-[#FFFFFF]/25 mt-8 py-2 px-3">
                <h1 className="font-poppins text-[#FFFFFF] text-sm sm:text-lg md:text-xl font-bold ml-2">Votre visuel unique</h1>
                <h2 className="bg-white text-[#8D1257] font-poppins font-bold rounded-full py-2 px-4 text-xs sm:text-sm md:text-base">Dès Aujourd'hui</h2>
            </div>
        </div>
    );
};

export default Section1;
