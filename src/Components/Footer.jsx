// import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">TripPixie</h1>
          <p className=" text-sm">
            Con TripPixie puedes experimentar nuevos viajes y los mejores destinos turísticos que tenemos para ofrecer.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Destinos
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-[#ffc400] transition-all cursor-pointer"
              href="/"
            >
              Paris, Francia
            </a>
            <a
              className=" hover:text-[#ffc400] transition-all cursor-pointer"
              href="/"
            >
              Dubai, UAE
            </a>
            <a
              className=" hover:text-[#ffc400] transition-all cursor-pointer"
              href="/"
            >
              Venecia, Italia
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Nosotros</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-[#ffc400] transition-all cursor-pointer"
              href="/"
            >
              Contactanos
            </a>
            <a
              className=" hover:text-[#ffc400] transition-all cursor-pointer"
              href="/"
            >
              Testimonios
            </a>
            <a
              className=" hover:text-[#ffc400] transition-all cursor-pointer"
              href="/"
            >
              Clasificación
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Síguenos</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <BsFacebook
              size={25}
              className="hover:text-[#ffc400] transition-all cursor-pointer"
            />
            <RiTwitterXFill
              size={25}
              className=" hover:text-[#ffc400] transition-all cursor-pointer"
            />
            <BsInstagram
              size={25}
              className=" hover:text-[#ffc400] transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Criss</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
}
