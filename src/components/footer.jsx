import Image from "next/image";
import React from "react";
import LogoWarna from "/public/images/LogoWarna.png";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-black text-white h-auto sm:h-[200px] gap-8 sm:gap-20 py-7 px-4 sm:px-12 justify-center">
      <div className="flex font-semibold gap-2 justify-center items-center">
        <Image src={LogoWarna} alt="Logo" className="w-20 h-14 mt-3 sm:mt-0" />
        <div className="flex flex-col items-center sm:items-start">
          <span>Meniti</span>
          <span className="text-[20px]"> Sarmi </span>
        </div>
      </div>

      <div className="text-center sm:text-left">
        <h1 className="font-semibold mb-2">Kabupaten Sarmi</h1>
        <ul>
          <li>Website Kabupaten Sarmi</li>
          <li>Instagram</li>
          <li>Tiktok</li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <h1 className="font-semibold mb-2">Meniti Sarmi</h1>
        <ul>
          <li>Instagram</li>
          <li>Tiktok</li>
          <li>Youtube</li>
          <li>Medium</li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <h1 className="font-semibold mb-2">About</h1>
        <ul>
          <li>About Us</li>
          <li>Galerry</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
