import React from "react";

const Footer = () => {
    return (
    <div className="min-h-24 w-full flex flex-col space-y-4 md:space-y-0 md:my-0 justify-center items-center md:grid md:grid-cols-2 ">
        <div className="flex justify-center md:justify-start items-center ml-16">
        <h1 className="font-inter text-white text-center">© Synergie Innovation 2024</h1>
        </div>
        <div className="max-w-[80%] flex justify-center md:justify-end items-center">
            <a href="/">
        <h1 className="font-inter text-white">Instagram</h1>
            </a>
            <a href="/">
        <h2 className="font-inter text-white ml-8">Email</h2>
            </a>
        </div>
       

    </div>
    )
}

export default Footer