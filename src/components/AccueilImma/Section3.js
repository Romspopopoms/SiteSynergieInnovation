import React from "react"

const Section3 = () => {
    return (
        <div className="flex flex-col bg-[#FFFBED] w-full py-16">
            <div className="text-center mb-12">
                <h2 className="text-6xl font-dmserif font-medium text-[#474747] max-w-[80%] mx-auto">Développez votre image</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 w-full px-8">
                
                {/* Card 1 */}
                <div className="relative shadow-lg w-full md:w-1/3 max-w-[290px] min-h-[450px] flex flex-col justify-between p-6">
                    {/* Background layer with opacity */}
                    <div className="absolute inset-0 bg-[#FFFFFF] opacity-[46%]"></div>
                    {/* Content layer */}
                    <div className="relative flex flex-col h-full">
                        <div className="text-left">
                            <h3 className="text-2xl font-dmserif text-[#474747]">Un Logo</h3>
                            <p className="text-sm font-light text-[#474747] italic mb-8">À votre image</p>
                        </div>
                        <div className="text-left flex-grow">
                            <p className="text-md font-jost text-[#474747] mb-8 max-w-[90%]">
                                Votre institution est unique, et votre logo doit l’être également. Ensemble, créons un logo sur mesure qui incarne votre mission et attire l’attention de votre communauté dès le premier regard.
                            </p>
                        </div>
                        <a href='/ImmaMissioCharteGraphique'className="mt-20 flex justify-center items-center">
                            <button className="border-2 border-black px-4 py-1  font-jost">En savoir plus</button>
                        </a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative shadow-lg w-full md:w-1/3 max-w-[290px] min-h-[450px] flex flex-col justify-between p-6">
                    {/* Background layer with opacity */}
                    <div className="absolute inset-0 bg-[#FFFFFF] opacity-[46%]"></div>
                    {/* Content layer */}
                    <div className="relative flex flex-col h-full">
                        <div className="text-left">
                            <h3 className="text-2xl font-dmserif text-[#474747]">Une Charte Graphique</h3>
                            <p className="text-sm font-light text-[#474747] italic mb-8">Authentique</p>
                        </div>
                        <div className="text-left flex-grow">
                            <p className="text-md font-jost text-[#474747] mb-8 max-w-[90%]">
                                Votre identité visuelle est primordiale. Nous vous accompagnons dans la création d’une charte graphique sur mesure qui reflète parfaitement l’esprit et les valeurs de votre institution catholique, pour un impact fort et inoubliable.
                            </p>
                        </div>
                        <a href='/ImmaMissioCharteGraphique' className="mt-14 flex justify-center items-center">
                            <button className="border-2 border-black px-4 py-1 font-jost">En savoir plus</button>
                        </a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative shadow-lg w-full md:w-1/3 max-w-[290px] min-h-[450px] flex flex-col justify-between p-6">
                    {/* Background layer with opacity */}
                    <div className="absolute inset-0 bg-[#FFFFFF] opacity-[46%]"></div>
                    {/* Content layer */}
                    <div className="relative flex flex-col h-full">
                        <div className="text-left">
                            <h3 className="text-2xl font-dmserif text-[#474747]">Un Web Design</h3>
                            <p className="text-sm font-light text-[#474747] italic mb-8">Personnalisé</p>
                        </div>
                        <div className="text-left flex-grow">
                            <p className="text-md font-jost text-[#474747] mb-8 max-w-[90%]">
                                Votre site web doit refléter votre mission. Nous créons des designs personnalisés qui captivent vos visiteurs et mettent en lumière l’essence de votre institution catholique. Optez pour un site unique, conçu spécialement pour vous.
                            </p>
                        </div>
                        <a href='/ImmaMissioWebDesign' className="mt-14 flex justify-center items-center">
                            <button className="border-2 border-black px-4 py-1 font-jost">En savoir plus</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section3
