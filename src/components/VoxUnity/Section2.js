import React from "react";
import LogoVox from "../../assets/PictoVox.svg";
import PictoDesign from "../../assets/picto design.webp";
import PictoWebDesign from "../../assets/picto webdesign.webp";

const Section2 = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-[#FFFFFF] text-center">
                Développez votre image
            </h1>

            {/* Carrousel for Small Screens */}
<div class="overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex space-x-6 w-full px-4 mt-12 xl:hidden">
                {/* Card 1 */}
                <div className="snap-center flex-shrink-0 flex flex-col justify-center items-start bg-[#262626] w-[85%] min-h-[400px] p-8 border-2 border-[#6BABFF]"
                    style={{ borderRadius: "20px" }}>
                    <div className="flex flex-row items-center space-x-1 mb-4">
                        <img src={LogoVox} alt="PictoVox" className="h-12 w-12" />
                        <div className="flex flex-col">
                            <h2 className="font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2"
                                style={{ fontSize: '20px' }}>
                                Un Logo
                            </h2>
                            <p className="font-poppins text-[#FFFFFF] text-base font-medium"
                                style={{ fontSize: '14px' }}>
                                à votre image
                            </p>
                        </div>
                    </div>
                    <p className="font-poppins text-[#FFFFFF] text-base mb-4 flex-grow text-start mt-2">
                        Votre entreprise est unique, et votre logo doit l'être aussi. Ensemble, concevons un logo sur mesure qui incarne votre vision et attire vos clients dès le premier regard.
                    </p>
                    <a href="/Logo" className="bg-white px-6 py-2 rounded-full self-center">
                        <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
                            En savoir plus
                        </h3>
                    </a>
                </div>

                {/* Card 2 */}
                <div className="snap-center flex-shrink-0 flex flex-col justify-center items-start bg-[#262626] w-[85%] min-h-[400px] p-8 border-2 border-[#6BABFF]"
                    style={{ borderRadius: "20px" }}>
                    <div className="flex flex-row items-center space-x-1 mb-4">
                        <img src={PictoDesign} alt="PictoDesign" className="h-12 w-12" />
                        <div className="flex flex-col">
                            <h2 className="font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2"
                                style={{ fontSize: '20px' }}>
                                Une Charte Graphique
                            </h2>
                            <p className="font-poppins text-[#FFFFFF] text-base font-medium"
                                style={{ fontSize: '14px' }}>
                                Authentique
                            </p>
                        </div>
                    </div>
                    <p className="font-poppins text-[#FFFFFF] text-base mb-4 flex-grow text-start mt-2">
                        Votre identité visuelle est essentielle. Nous vous aidons à concevoir une charte graphique sur mesure qui reflète parfaitement l'esprit et les valeurs de votre entreprise, pour un impact unique et mémorable.
                    </p>
                    <a href="/Logo" className="bg-white px-6 py-2 rounded-full self-center">
                        <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
                            En savoir plus
                        </h3>
                    </a>
                </div>

                {/* Card 3 */}
                <div className="snap-center flex-shrink-0 flex flex-col justify-center items-start bg-[#262626] w-[85%] min-h-[400px] p-8 border-2 border-[#6BABFF]"
                    style={{ borderRadius: "20px" }}>
                    <div className="flex flex-row items-center space-x-1 mb-4">
                        <img src={PictoWebDesign} alt="PictoWebDesign" className="h-12 w-12" />
                        <div className="flex flex-col">
                            <h2 className="font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2"
                                style={{ fontSize: '20px' }}>
                                Un Web Design
                            </h2>
                            <p className="font-poppins text-[#FFFFFF] text-base font-medium"
                                style={{ fontSize: '14px' }}>
                                Personnalisé
                            </p>
                        </div>
                    </div>
                    <p className="font-poppins text-[#FFFFFF] text-base mb-4 flex-grow text-start mt-2">
                        Votre site web doit refléter votre identité. Nous créons des designs sur mesure qui captivent vos visiteurs et mettent en valeur votre marque. Faites la différence avec un site unique, pensé pour vous.
                    </p>
                    <a href="/Logo" className="bg-white px-6 py-2 rounded-full self-center">
                        <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
                            En savoir plus
                        </h3>
                    </a>
                </div>
            </div>

            {/* Grid Layout for Medium and Larger Screens */}
            <div className="hidden xl:flex justify-center items-center gap-x-6 w-[70%] mt-20">
    {/* Card 1 */}
    <div className="flex flex-col justify-center items-start bg-[#262626] flex-1 border-2 border-[#6BABFF] min-h-[400px] p-8"
        style={{ borderRadius: "20px" }}>
        <div className="flex flex-row items-center space-x-1 mb-4">
            <img src={LogoVox} alt="PictoVox" className="h-12 w-12" />
            <div className="flex flex-col">
                <h2 className="font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2"
                    style={{ fontSize: '16px' }}>
                    Un Logo
                </h2>
                <p className="font-poppins text-[#FFFFFF] text-base font-medium"
                    style={{ fontSize: '14px' }}>
                    à votre image
                </p>
            </div>
        </div>
        <p className="font-poppins text-[#FFFFFF] text-base mb-4 flex-grow text-start mt-2">
            Votre entreprise est unique, et votre logo doit l'être aussi. Ensemble, concevons un logo sur mesure qui incarne votre vision et attire vos clients dès le premier regard.
        </p>
        <a href="/Logo" className="bg-white px-6 py-2 rounded-full self-center">
            <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
                En savoir plus
            </h3>
        </a>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col justify-center items-start bg-[#262626] flex-1 border-2 border-[#6BABFF] min-h-[400px] p-8"
        style={{ borderRadius: "20px" }}>
        <div className="flex flex-row items-center space-x-1 mb-4">
            <img src={PictoDesign} alt="PictoDesign" className="h-12 w-12" />
            <div className="flex flex-col">
                <h2 className="font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2"
                    style={{ fontSize: '16px' }}>
                    Une Charte Graphique
                </h2>
                <p className="font-poppins text-[#FFFFFF] text-base font-medium"
                    style={{ fontSize: '14px' }}>
                    Authentique
                </p>
            </div>
        </div>
        <p className="font-poppins text-[#FFFFFF] text-base mb-4 flex-grow text-start mt-2">
            Votre identité visuelle est essentielle. Nous vous aidons à concevoir une charte graphique sur mesure qui reflète parfaitement l'esprit et les valeurs de votre entreprise, pour un impact unique et mémorable.
        </p>
        <a href="/Logo" className="bg-white px-6 py-2 rounded-full self-center">
            <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
                En savoir plus
            </h3>
        </a>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col justify-center items-start bg-[#262626] flex-1 border-2 border-[#6BABFF] min-h-[400px] p-8"
        style={{ borderRadius: "20px" }}>
        <div className="flex flex-row items-center space-x-1 mb-4">
            <img src={PictoWebDesign} alt="PictoWebDesign" className="h-12 w-12" />
            <div className="flex flex-col">
                <h2 className="font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2"
                    style={{ fontSize: '16px' }}>
                    Un Web Design
                </h2>
                <p className="font-poppins text-[#FFFFFF] text-base font-medium"
                    style={{ fontSize: '14px' }}>
                    Personnalisé
                </p>
            </div>
        </div>
        <p className="font-poppins text-[#FFFFFF] text-base mb-4 flex-grow text-start mt-2">
            Votre site web doit refléter votre identité. Nous créons des designs sur mesure qui captivent vos visiteurs et mettent en valeur votre marque. Faites la différence avec un site unique, pensé pour vous.
        </p>
        <a href="/Logo" className="bg-white px-6 py-2 rounded-full self-center">
            <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text1 to-text2">
                En savoir plus
            </h3>
        </a>
    </div>
</div>
</div>
    );
};

export default Section2;
