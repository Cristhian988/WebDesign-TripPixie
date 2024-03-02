// import React from 'react'
import { Link } from "react-scroll";
import Button from "../Layout/Button";
import heroImg from '../assets/hero.jpg'

export default function Home() {
    const backgroundColor = `bg-[#ffc400]`
  return (
    <div className=" min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5">
      <div className=" flex flex-col text-center lg:text-start gap-5">
        <h1 className=" font-bold text-5xl leading-tight">Descubre los Mejores Destinos</h1>
        <p>
          Con TripPixie puedes experimentar nuevos viajes y los mejores destinos turísticos que tenemos para ofrecer.
        </p>
        <div className=" lg:pl-24">
            <Link to="destination" spy={true} smooth={true} duration={500}>
                <Button title="Destinos" backgroundColor={backgroundColor} />
            </Link>
        </div>
      </div>
      <div className=" mt-14 lg:mt-0 w-full lg:w-4/5">
        <img src={heroImg} alt="img" />
      </div>
    </div>
  );
}
