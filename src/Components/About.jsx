// import React from "react";

import { Link } from "react-scroll";
import Button from "../Layout/Button";
import aboutImg from "../assets/about.jpg";

export default function About() {
    const backgroundColor = `bg-[#ffc400]`
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 bg-[#000524] gap-10">
      <div className=" w-full lg:w-2/4 space-y-5">
        <h1 className=" font-semibold text-4xl text-white leading-tight">
          ¡En TripPixie, estamos listos para brindarte el mejor viaje de tu vida!
        </h1>
        <p className=" text-[#bdbdbd] pb-5">Las vacaciones de tus sueños te esperan y estamos aquí para hacerlas realidad.</p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contáctanos" backgroundColor={backgroundColor} />
        </Link>
      </div>
      <div className=" w-full lg:w-2/4">
        <img className=" rounded-2xl" src={aboutImg} alt="img" />
      </div>
    </div>
  );
}
