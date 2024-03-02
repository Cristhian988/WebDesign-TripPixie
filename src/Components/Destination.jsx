// import React from 'react'
import img1 from "../assets/dest1.jpg";
import img2 from "../assets/dest2.jpg";
import img3 from "../assets/dest3.jpg";

import DestinationCard from "../Layout/DestinationCard";

export default function Destination() {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-bold text-center text-4xl lg:mt-0 mt-16">
        Destinos más populares
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img={img1}
          title="Paris, Francia"
          para="París ofrece lugares emblemáticos como la Torre Eiffel y arte de talla mundial en el Museo del Louvre."
        />
        <DestinationCard
          img={img2}
          title="Dubai, UAE"
          para="Dubái, una ciudad superlativa, cuenta con imponentes rascacielos, tiendas de lujo y aventuras en el desierto."
        />
        <DestinationCard
          img={img3}
          title="Venecia, Italia"
          para="Explore los románticos canales y la arquitectura histórica de Venecia, una ciudad construida sobre el agua."
        />
      </div>
    </div>
  );
}
