// import React from 'react'
import contactImg from "../assets/contact.jpg";

import Button from "../Layout/Button";

export default function Contact() {
  const backgroundColor = `bg-[#ffc400]`;
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <form className=" w-full lg:w-2/5 space-y-5 bg-[#F2F2F2] p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center">Contactos</h1>
          <div className=" flex flex-col">
            <label htmlFor="userName">Nombre completo:</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Email:</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userMessage">Mensaje:</label>
            <textarea
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="userMessage"
              id="userMessage"
              cols="30"
              rows="3"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Enviar" backgroundColor={backgroundColor} />
          </div>
        </form>
        <div className=" flex flex-col items-center w-full lg:w-2/4 my-5">
          <img className=" rounded-lg" src={contactImg} alt="img" />
          <p className=" text-center text-sm pt-4 text-[#898888]">
            ¡Nos encantaría saber de usted! Si tiene preguntas, comentarios o
            necesita ayuda con sus planes de viaje, no dude en comunicarse.
            Nuestro equipo está aquí para ayudarle en cada paso del camino.
            Simplemente complete el formulario a continuación y nos
            comunicaremos en breve.
          </p>
        </div>
      </div>
    </div>
  );
}
