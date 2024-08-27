import React from "react";


const Section2 = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 w-auto bg-black z-0 mt-12 lg:mt-40 h-full gap-y-24 sm:gap-y-0">
            <div className="flex flex-col items-center justify-center gap-y-4 ">
                <img src={''} alt="Pate" className="w-[80%] h-[80%] object-cover rounded-lg md:mt-32"></img>
                <h1 className="font-jost text-primary font-bold text-4xl">Notre savoir-faire</h1>
                <p className="text-accent text-center font-jost font-semibold text-xl max-w-[60%]">Chez nous, la boulangerie est un art. Chaque pain et viennoiserie est préparé avec des ingrédients de qualité, pétris avec soin et cuits à la perfection. Notre savoir-faire se transmet de génération en génération, mêlant tradition et passion pour offrir des produits d'exception. Découvrez l'authenticité et le goût unique de notre boulangerie française.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4 md:mt-32">
                <img src={''} alt="boulanger" className=" rounded-lg w-[80%] h-[80%] object-cover "></img>
                <h1 className="font-jost text-primary font-bold text-4xl">Notre passion</h1>
                <p className="text-accent text-center font-jost font-semibold text-xl max-w-[60%]">Notre boulangerie est le fruit d'une passion inébranlable pour l'art de la boulangerie. Chaque jour, notre boulanger met son cœur dans chaque pâte pétrie, dans chaque fournée sortie. Cette passion se reflète dans chaque pain et viennoiserie, offrant des saveurs authentiques et une qualité incomparable. Découvrez l'amour du métier dans chaque bouchée.</p>
            </div>
        </div>
    )
}

export default Section2