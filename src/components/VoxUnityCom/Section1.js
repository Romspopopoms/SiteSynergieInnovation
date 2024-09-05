import React from "react"
import Tel from "../../assets/Tel.webp"

const Section1 = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-screen">
         <div className="grid grid-cols-1 md:grid-cols-2 max-w-[80%] mx-auto ">

            <div className="flex flex-col justify-center items-center">
            <img src={Tel} alt="PostInsta" className="object-cover md:max-w-[50%] max-w-[70%] "></img>
            </div>

            <div className="flex flex-col items-start justify-center w-full mt-12 md:mt-0">
            <h1 className="text-white text-2xl md:text-4xl font-bold font-poppins text-center md:text-start md:max-w-[70%] max-w-[90%] mx-auto">Une Communication Efficaces<span className="text-[#8D1257]">.</span></h1>
            <p className="text-white font-poppins font-medium text-lg md:text-xl text-center md:text-start md:max-w-[70%] max-w-[90%] mt-6 mx-auto">
            Augmentez Votre Visibilité et Engagez Vos Clients avec des Solutions Personnalisées
            </p>

            </div>
         </div>
        </div>
    )
}

export default Section1