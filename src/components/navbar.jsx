"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/public/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <span className="font-bold text-white">Meniti Sarmi</span>
      </div>
      <ul className="hidden sm:flex w-[400px] p-1 text-white bg-[#D9D9D9] bg-opacity-25 gap-5 justify-center rounded-2xl border-white border">
        <li className="opacity-75">Atraksi</li>
        <li className="opacity-75">Aksesibilitas</li>
        <li className="opacity-75">Amenitas</li>
        <li className="opacity-75">Gallery</li>
      </ul>
      <div className="hidden sm:flex flex-col text-white font-semibold italic ">
        <p className="-mb-1 text-[11px]">MENITI RAJUTAN ASA</p>
        <p className="text-[9px]">MENJALIN SATUNYA RASA</p>
      </div>
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? "" : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-75 flex flex-col items-center justify-center gap-8">
          <button onClick={toggleMenu} className="text-white absolute top-14 right-10">
            <FaTimes size={24} />
          </button>

          <ul className="text-white text-lg">
            <li className="mb-4" onClick={toggleMenu}>
              Atraksi
            </li>
            <li className="mb-4" onClick={toggleMenu}>
              Aksesibilitas
            </li>
            <li className="mb-4" onClick={toggleMenu}>
              Amenitas
            </li>
            <li className="mb-4" onClick={toggleMenu}>
              Gallery
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
