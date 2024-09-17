import React from "react";
import Tel from "../../assets/Post.webp";

const Section3 = () => {
    return (
        <div className="flex justify-center items-center w-full px-8 md:px-0 ">
            <div className="flex flex-col justify-center items-center mb-12">
            <div className="md:max-w-[40%] flex md:mr-[50%] lg:mr-[40%] xl:mr-[15%]">
            <div className="flex flex-col justify-center items-end mr-2 mb-12">
            <img src={Tel} alt="PostInsta" className="md:hidden h-96 w-48 rounded-xl border-8 border-[#FFFFFF] self-center mb-12"
            style={{borderRadius: '32px'}}></img>
                <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white text-end mb-4">Booster votre communication</h1>
               <p className="font-poppins text-[#FFFFFF]  font-medium text-end md:max-w-[70%]"
               style={{FontSize:'25px'}}>Nous vous aidons à développer la visibilité de votre entreprise sur le web avec des plans de communication personnalisés. Que ce soit pour un accompagnement stratégique, un service de directeur de communication, ou un community manager, nous sommes là pour vous guider à chaque étape.</p>  
            </div>
            <img src={Tel} alt="PostInsta" className="hidden md:block h-96 w-48 rounded-xl border-8 border-[#FFFFFF] mb-12"
            style={{borderRadius: '32px'}}></img>
            </div>
            <a href="/VoxUnityCom" className="bg-white px-8 py-3 rounded-full self-center">
            <h2 className="font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
                Communiquons maintenant !
            </h2>
        </a>
            </div>
            </div>
    );
}

export default Section3;
