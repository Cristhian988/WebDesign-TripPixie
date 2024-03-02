// import React from 'react'
import featuresImg from "../assets/feature.jpg";
import pic1 from "../assets/service.png";
import pic2 from "../assets/user.png";
import pic3 from "../assets/wallet.png";

export default function Features() {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14">
      <div className=" w-full lg:w-2/4">
        <div className=" space-y-4">
          <h1 className=" text-4xl font-bold text-center md:text-start leading-tight">
            ¡Prepárate para explorar, prepárate para experimentar!
          </h1>
          <p>
            ¡Descubre las mejores experiencias vacacionales con TripPixie! Nos
            dedicamos a seleccionar los destinos más recientes y mejores de todo
            el mundo, asegurándonos de que siempre obtenga la mejor experiencia
            de viaje.
          </p>
        </div>
        <div className="w-full lg:w-3/5 mt-10 lg:ml-14">
          <img
            className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            src={featuresImg}
            alt="img"
          />
        </div>
      </div>
      <div className=" w-full lg:w-2/4 space-y-10 bg-[#8593a3] text-black p-8 rounded-2xl">
        <div className=" flex flex-row gap-5 bg-white p-4 rounded-2xl">
          <div className=" flex flex-row items-center w-24">
            <img src={pic1} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Servicio amigable</h1>
            <p className=" text-[#898888]">
              Brindaremos un servicio excelente y amigable por el bien de
              nuestros clientes.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5 bg-white p-4 rounded-2xl">
          <div className=" flex flex-row items-center w-24">
            <img src={pic2} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Experiencia inolvidable</h1>
            <p className=" text-[#898888]">
              Brindaremos un servicio excelente y amigable por el bien de
              nuestros clientes.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5 bg-white p-4 rounded-2xl">
          <div className=" flex flex-row items-center w-24">
            <img src={pic3} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Precios accesibles</h1>
            <p className=" text-[#898888]">
              Brindaremos un servicio excelente y amigable por el bien de
              nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
