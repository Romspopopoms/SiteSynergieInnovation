import React from "react"
import Site1 from "../../assets/site1.webp"
import Site2 from "../../assets/paroisse.webp"
import Site3 from "../../assets/boulangerie.webp"

import { FaArrowRight } from "react-icons/fa"

const Section4 = () => {
    return (
    <div className="flex flex-col justify-center items-center px-4 md:px-0">
        <h1 className="font-poppins font-bold text-4xl md:text-6xl text-center text-white">Quelques exemples<span className='text-[#8D1257]'>.</span></h1>

        <div className="flex flex-col justify-center items-center max-w-[90%] space-y-8 mt-12 mb-12" >
            
            <img src={Site1} alt="Site1" className="w-full object-cover" style={{borderRadius: '35px'}}></img>
            <a href="/VoxUnity" target="blank" className="flex w-full justify-between items-center">
            <h2 className="font-poppins font-bold text-xl md:text-2xl text-white w-full mb-2">Modèle VoxUnity</h2>
            <div className="flex w-full justify-end items-center space-x-2">
            <p className="text-white">Découvrir</p>
            <FaArrowRight className="text-white "/>
            </div>
            </a>

            <img src={Site2} alt="Site1" className="w-full object-cover" style={{borderRadius: '35px'}}></img>
            <a href="https://template-paroisse.vercel.app/" target="blank" className="flex w-full justify-between items-center">
            <h2 className="font-poppins font-bold text-xl md:text-2xl text-white w-full mb-2">Modèle Saint Athanase</h2>
            <div className="flex w-full justify-end items-center space-x-2">
            <p className="text-white">Découvrir</p>
            <FaArrowRight className="text-white "/>
            </div>
            </a>

            <img src={Site3} alt="Site1" className="w-full object-cover" style={{borderRadius: '35px'}}></img>
            <a href="https://template-boulangerie.vercel.app/" target="blank" className="flex w-full justify-between items-center">
            <h2 className="font-poppins font-bold text-xl md:text-2xl text-white w-full mb-2">Modèle Pain</h2>
            <div className="flex w-full justify-end items-center space-x-2">
            <p className="text-white">Découvrir</p>
            <FaArrowRight className="text-white "/>
            </div>
            </a>

        </div>
    </div>
        )
}

export default Section4