import React from "react"
import Feu from "../../assets/_DSC0766.webp"
import Drone from "../../assets/DJI_0105.webp"

const Section4 = () => {
    return (
        
        <div className="flex flex-col justify-center items-center w-full h-auto  space-y-12">
            <div className=" h-auto flex flex-col md:flex-row justify-center items-center w-[80%] mx-auto space-y-12 md:space-x-12">
                <div className="flex justify-center md:justify-end md:max-w-[50%]">
            <img src={Feu} alt="Artifice" className="object-cover md:w-[60%]"
            style={{borderRadius: "20px"}}></img>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start md:max-w-[50%] ">
                <div className="flex flex-col justify-center items-center md:items-start md:max-w-[50%] ">
            <h1 className="font-poppins font-bold text-4xl md:text-2xl text-white text-center md:text-start mb-4">Photographie</h1>
               <p className="font-poppins text-[#FFFFFF]  font-medium text-center md:text-start  "
               style={{FontSize:'25px'}}>Capturez vos événements et valorisez votre entreprise grâce à des visuels percutants qui enrichissent votre communication et captivent vos clients avec une prestation photographique.</p>  
            </div>
            <a href="/Communication" className="bg-white px-8 py-2 rounded-full self-center md:self-start mt-8">
            <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
            Vos photos aujourd'hui
            </h2>
        </a>
            </div>    
        </div>


        <div className=" h-auto flex flex-col md:flex-row justify-center items-center w-[80%]  space-x-12 mx-auto">
            <div className="flex flex-col justify-center items-center md:items-end md:max-w-[50%] ">
                <div className="flex flex-col justify-center items-center md:items-end md:max-w-[50%]">
                <div className="flex justify-center md:justify-end md:max-w-[50%] md:hidden mb-12 md:mb-0">
            <img src={Drone} alt="Artifice" className="object-cover md:w-[60%]"
            style={{borderRadius: "20px"}}></img>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-2xl text-white text-center md:text-end mb-4">Télépilote drone</h1>
               <p className="font-poppins text-[#FFFFFF]  font-medium text-center md:text-end "
               style={{FontSize:'25px'}}>Capturez des images uniques et impressionnantes pour valoriser votre entreprise. Nos drones offrent une perspective inédite pour booster votre communication visuelle.</p>  
            </div>
            <a href="/Communication" className="bg-white px-8 py-2 rounded-full self-center md:self-end mt-8">
            <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
            Décollage de votre visibilité</h2>
        </a>
            </div>    
            <div className="hidden md:flex justify-center md:justify-start md:max-w-[50%]">
            <img src={Drone} alt="Artifice" className="object-cover md:w-[60%]"
            style={{borderRadius: "20px"}}></img>
            </div>
        </div>
        </div>
        
    )
}

export default Section4