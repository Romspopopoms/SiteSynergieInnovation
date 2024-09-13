import React from "react"
import Site1 from "../../assets/site1.webp"
import Site2 from "../../assets/paroisse.webp"
import Site3 from "../../assets/boulangerie.webp"

import { FaArrowRight } from "react-icons/fa"

const Section4 = () => {
    return (
    <div className="flex flex-col justify-center items-center px-4 md:px-0">
        <h1 className="font-dmserif font-medium text-4xl md:text-6xl text-center text-[#474747]">Quelques exemples</h1>

        <div className="flex flex-col justify-center items-center max-w-[90%] space-y-10 mt-12" >
            
            <img src={Site1} alt="Site1" className="w-full object-cover" style={{borderRadius: '10px'}}></img>
            <a href="/VoxUnity" target="blank" className="flex w-full justify-between items-start">
            <h2 className="font-dmserif font-medium text-xl md:text-2xl text-[#474747] w-full mt-[-25px]">Modèle VoxUnity</h2>
            <div className="flex w-full justify-end items-center space-x-2">
            <p className="text-[#474747] mt-[-25px] font-dmserif font-medium">Découvrir</p>
            <FaArrowRight className="text-[#474747] mt-[-25px]"/>
            </div>
            </a>

            <img src={Site2} alt="Site1" className="w-full object-cover" style={{borderRadius: '10px'}}></img>
            <a href="https://template-paroisse.vercel.app/" target="blank" className="flex w-full justify-between items-center">
            <h2 className="font-dmserif font-medium text-xl md:text-2xl text-[#474747] w-full mb-2 mt-[-25px]">Modèle Saint Athanase</h2>
            <div className="flex w-full justify-end items-center space-x-2">
            <p className="text-[#474747] mt-[-25px] font-dmserif font-medium">Découvrir</p>
            <FaArrowRight className="text-[#474747] mt-[-25px] "/>
            </div>
            </a>

            <img src={Site3} alt="Site1" className="w-full object-cover" style={{borderRadius: '10px'}}></img>
            <a href="https://template-boulangerie.vercel.app/" target="blank" className="flex w-full justify-between items-center">
            <h2 className="font-dmserif font-medium text-xl md:text-2xl text-[#474747] w-full mb-2 mt-[-25px]">Modèle Pain</h2>
            <div className="flex w-full justify-end items-center space-x-2">
            <p className="text-[#474747] mt-[-25px] font-dmserif font-medium">Découvrir</p>
            <FaArrowRight className="text-[#474747] mt-[-25px] "/>
            </div>
            </a>

        </div>
    </div>
        )
}

export default Section4