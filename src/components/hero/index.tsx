import Image from "next/image";
import React from "react";
import desing from "@/../public/abstract-design.svg";

const Hero = () => {
  return (
    <section className="relative fluid grid-container h-[18.75rem] md:h-[37.5rem] 2xl:h-[46rem] flex items-center content-center place-content-center text-black-30 z-10">
      <div className="fluid absolute -top-1 -left-1 -right-1 -bottom-1 w-full h-full bg-black-08 bg-hero-background bg-cover bg-center opacity-5 -z-10"></div>
      <div className="row-start-1 row-end-4 lg:row-end-4 flex items-center justify-center">
        <Image
          src={desing}
          alt="asd"
          width={500}
          height={500}
          quality={100}
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] 2xl:w-[470px] 2xl:h-[470px] backdrop-blur-[2px]"
        />
      </div>
    </section>
  );
};

export default Hero;
