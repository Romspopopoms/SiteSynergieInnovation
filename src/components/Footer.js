import React from "react";

const Footer = () => {
  return (
    <div className="min-h-24 w-full flex flex-col space-y-4 md:space-y-0 md:my-0 justify-center items-center md:grid md:grid-cols-2 bg-[#FFFFFF]">
      <div className="flex justify-center md:justify-start items-center ml-8">
        <h1 className="font-inter text-black text-center">
          © Synergie Innovation 2024
        </h1>
      </div>
      <div className="max-w-[80%] flex justify-center md:justify-end items-center">
        <a
          href="https://www.instagram.com/synergie_innovation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="font-inter text-black">Instagram</h1>
        </a>
        <a href="mailto:contact@synergieinnovation.fr">
          <h2 className="font-inter text-black ml-8">Email</h2>
        </a>
      </div>
    </div>
  );
};

export default Footer;
