import Image from "next/image";
import React from "react";
import desing from "@/../public/abstract-design.svg";

const Hero = () => {
  return (
    <section className="relative fluid grid-container min-h-[44rem] flex items-center justify-center text-black-30 z-10">
      <div className="fluid absolute top-0 left-0 w-full h-full bg-hero-background bg-cover bg-center opacity-5 -z-10"></div>

      <div className="row-span-3 flex items-center justify-center">
        <Image src={desing} alt="asd" width={450} height={450} quality={100} className="backdrop-blur-[2px]" />
      </div>
    </section>
  );
};

export default Hero;
