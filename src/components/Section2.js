import React from "react";

const Section2 = () => {
    return (
        <div className="bg-black flex justify-center items-center w-full h-auto z-30">
            <div className="flex justify-center items-center space-x-8">
                <div className="flex flex-col items-center">
                    <p className="text-white relative pl-6">
                        <span
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-full"
                            style={{
                                background: "linear-gradient(to bottom, white, transparent)",
                                height: "100%",
                            }}
                        ></span>
                        100%
                    </p>
                    <p className="text-white">MADE IN FRANCE</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white relative pl-6">
                        <span
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-full"
                            style={{
                                background: "linear-gradient(to bottom, white, transparent)",
                                height: "100%",
                            }}
                        ></span>
                        100%
                    </p>
                    <p className="text-white">MADE IN FRANCE</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white relative pl-6">
                        <span
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-full"
                            style={{
                                background: "linear-gradient(to bottom, white, transparent)",
                                height: "100%",
                            }}
                        ></span>
                        100%
                    </p>
                    <p className="text-white">MADE IN FRANCE</p>
                </div>
            </div>
        </div>
    );
}

export default Section2;
