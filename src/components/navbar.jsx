import Image from "next/image";
import React from "react";
import Logo from "/public/images/Logo.png";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <span className="font-bold text-white">Meniti Sarmi</span>
      </div>
      <ul className="w-[400px] p-1 text-white bg-[#D9D9D9] bg-opacity-25 flex gap-5 justify-center rounded-2xl border-white border">
        <li className="opacity-75">Atraksi</li>
        <li className="opacity-75">Aksesibilitas</li>
        <li className="opacity-75">Amenitas</li>
        <li className="opacity-75">Gallery</li>
      </ul>
      <div className="flex flex-col text-white font-semibold italic ">
        <p className="-mb-1 text-[11px]">MENITI RAJUTAN ASA</p>
        <p className="text-[9px]">MENJALIN SATUNYA RASA</p>
      </div>
    </div>
  );
};

export default Navbar;
