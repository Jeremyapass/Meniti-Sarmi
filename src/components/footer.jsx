import Image from "next/image";
import React from "react";
import LogoWarna from "/public/images/LogoWarna.png";

const Footer = () => {
  return (
    <div className="flex w-full bg-black text-white h-[200px] gap-20 py-7 justify-center">
      <div className="flex font-semibold gap-2">
        <Image src={LogoWarna} alt="Logo" className="w-20 h-14 mt-3" />
        <div className="flex flex-col">
          <span className="">Meniti</span>
          <span className="text-[20px]"> Sarmi </span>
        </div>
      </div>

      <div>
        <h1 className="font-semibold mb-2">Kabupaten Sarmi</h1>
        <ul>
          <li>Website Kabupaten Sarmi</li>
          <li>Instagram</li>
          <li>Tiktok</li>
        </ul>
      </div>

      <div>
        <h1 className="font-semibold mb-2">Meniti Sarmi</h1>
        <ul>
          <li>Instagram</li>
          <li>Tiktok</li>
          <li>Youtube</li>
          <li>Medium</li>
        </ul>
      </div>

      <div className="">
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
