import React from "react"

const Section5 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-0">
            <h1 className="font-dmserif font-medium text-3xl md:text-6xl text-[#474747] text-center mb-8">
                Conception de la charte graphique
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-5 space-y-16 md:space-y-0 w-full max-w-6xl mx-auto mt-12">
                
                {/* Bloc Couleurs - Colonne 1 à 2 */}
                <div className="flex flex-col justify-center items-center col-span-2">
                    {/* Élément graphique : Carré */}
                    <div className="w-full max-w-[90%] md:max-w-[320px] h-[320px] grid grid-rows-2 overflow-hidden mx-auto">
                        <div className="bg-[#FFFDF5] w-full h-full"></div>
                        <div className="bg-[#474747] w-full h-full"></div>
                    </div>

                    {/* Titre et texte sous le carré */}
                    <div className="text-center md:text-left max-w-[90%] md:max-w-[320px] mt-6 mx-auto">
                        <h2 className="font-medium font-dmserif text-2xl md:text-4xl text-[#474747] mb-4">Couleurs</h2>
                        <p className="font-light font-jost text-[#474747] text-lg md:text-base">
                            La palette de couleurs définit les teintes principales et secondaires qui représentent votre marque. Elle inclut les codes couleurs spécifiques (RGB, CMYK, HEX, Pantone) pour assurer une utilisation cohérente sur tous les supports, garantissant ainsi une identité visuelle forte et reconnaissable.
                        </p>
                    </div>
                </div>

                {/* Bloc Typographie - Colonne 3 à 5 */}
                <div className="flex flex-col justify-start items-center col-span-3 max-w-[90%]">
                    {/* Élément graphique : Boîte avec la typographie */}
                    <div className="bg-white p-8 shadow-lg w-full h-[320px] flex flex-col justify-center max-w-[90%] md:max-w-[700px] space-y-4">
                        <h3 className="font-dmserif font-medium text-3xl md:text-5xl">Titre (bold)</h3>
                        <h4 className="font-dmserif font-medium text-xl md:text-3xl">Sous-titre (semi-bold)</h4>
                        <p className="font-jost font-light text-lg md:text-xl">text (regular)</p>
                        <p className="font-jost font-light text-sm md:text-md">sous-texte (light)</p>
                    </div>

                    {/* Titre et texte sous la boîte */}
                    <div className="text-center md:text-left w-full max-w-[90%] md:max-w-[700px] mt-6">
                        <h2 className="font-dmserif font-medium text-2xl md:text-4xl text-[#474747] mb-4">Typographie</h2>
                        <p className="font-jost font-light text-[#474747] text-sm md:text-base">
                            Les choix typographiques définissent les polices de caractère à utiliser pour les titres, sous-titres, et textes. Ils précisent également les tailles, styles (gras, italique, etc.), et l'utilisation recommandée des polices, assurant une lisibilité optimale et une esthétique cohérente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5