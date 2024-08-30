import React from "react";

const Footer = () => {
    return (
    <div className="min-h-24 w-full grid grid-cols-2 bg-[#FFFFFF]">
        <div className="flex justify-center md:justify-start items-center ml-8">
        <h1 className="font-inter text-black text-center">© Synergie Innovation 2024</h1>
        </div>
        <div className="max-w-[80%] flex justify-center md:justify-end items-center">
            <a href="/">
        <h1 className="font-inter text-black">Instagram</h1>
            </a>
            <a href="/">
        <h2 className="font-inter text-black ml-8">Email</h2>
            </a>
        </div>
       

    </div>
    )
}

export default Footer