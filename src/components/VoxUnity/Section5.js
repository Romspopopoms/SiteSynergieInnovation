import React from "react"
import Branding from "../../assets/Branding carte.webp"
const Section5 = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-[#FFFFFF] text-center">Branding</h1>
            <div className="max-w-[90%] flex justify-items-center mt-8">
            <img src={Branding} alt='Branding' className=" md:h-[500px] md:w-[1000px] mx-auto h-auto rounded object-cover object-left-top"
            style={{borderRadius: "20px"}}
            ></img>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[80%] gap-y-6">
            <p className="font-poppins text-[#FFFFFF] text-xl font-medium text-left md:max-w-[80%] mb-12 mt-12">Nous préparons des designs uniques pour tous vos supports de communication : flyers, affiches, pulls, t-shirts, et plus encore. Faites briller votre entreprise avec une identité visuelle forte et cohérente, prête à marquer les esprits !</p>
            </div>
        </div>
    )
}

export default Section5