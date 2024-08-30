import React from "react";


const Section2 = () => {
    return (
        <div className=" flex justify-center items-center w-full h-auto z-30 relative">
                <div className="md:max-w-[80%] md:mx-auto grid grid-cols-1 md:flex md:justify-center md:items-center md:space-x-24 my-12 space-y-12 md:space-y-0">
                        <div className="flex flex-col relative">
                            <div className="absolute top-0 -left-4 h-16 w-[5px] bg-gradient-to-t bg-[#605DF5] from-[#F0698D] rounded-full"></div>
                        <p className="text-white text-4xl font-bold font-afacad">100%</p>
                        <p className="text-white text-xl font-afacad">Made in France</p>
                        </div>
                        <div className="flex flex-col relative">
                        <div className="absolute top-0 -left-4 h-16 w-[5px] bg-gradient-to-t bg-[#605DF5] from-[#F0698D] rounded-full"></div>
                        <p className="text-white text-4xl font-bold font-afacad">100%</p>
                        <p className="text-white text-xl font-afacad">De personnalisations</p>
                        </div>
                        <div className="flex flex-col relative">
                        <div className="absolute top-0 -left-4 h-16 w-[5px] bg-gradient-to-t bg-[#605DF5] from-[#F0698D] rounded-full"></div>
                        <p className="text-white text-4xl font-bold font-afacad">100%</p>
                        <p className="text-white text-xl font-afacad">D'innovations</p>
                        </div>
                    </div>
            </div>
    )
}

export default Section2