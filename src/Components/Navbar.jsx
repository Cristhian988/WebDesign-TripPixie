// import React from 'react'
import { Link } from "react-scroll";
import Button from "../Layout/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const backgroundColor = `bg-white`;

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="flex flex-row justify-between gap-6 p-5 md:px-32 px-5 bg-black text-white">
        <div className="flex items-center">
          <Link to="/" spy={true} smooth={true} duration={500}>
            <h1 className="font-semibold text-xl cursor-pointer">TripPixie</h1>
          </Link>
        </div>
        <nav className="hidden md:flex flex-row items-center gap-6">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-amber-300 transition-all cursor-pointer"
          >
            Inicio
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-amber-300 transition-all cursor-pointer"
          >
            Características
          </Link>
          <Link
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-amber-300 transition-all cursor-pointer"
          >
            Destinos
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-amber-300 transition-all cursor-pointer"
          >
            Nosotros
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-amber-300 transition-all cursor-pointer"
          >
            Contactos
          </Link>
        </nav>
        <div className="hidden lg:flex flex-row items-center gap-4">
          <h1 className="hover:text-amber-400 transition-all cursor-pointer">
            Registrar
          </h1>
          <Button title="Acceder" backgroundColor={backgroundColor} />
        </div>
        <div className="md:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-full transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-amber-300 transition-all cursor-pointer"
        >
          Inicio
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-amber-300 transition-all cursor-pointer"
        >
          Características
        </Link>
        <Link
          to="destination"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-amber-300 transition-all cursor-pointer"
        >
          Destinos
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-amber-300 transition-all cursor-pointer"
        >
          Nosotros
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-amber-300 transition-all cursor-pointer"
        >
          Contactos
        </Link>
        <div className="flex flex-col lg:hidden lg:flex-row items-center gap-4">
          <h1 className="hover:text-amber-400 transition-all cursor-pointer">
            Registrar
          </h1>
          <Button title="Acceder" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
}
