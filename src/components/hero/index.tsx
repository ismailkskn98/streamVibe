import Image from "next/image";
import React from "react";
import desing from "@/../public/abstract-design.svg";
import Entry from "../entry";

const Hero = () => {
  return (
    <section className="fluid grid-container">
      <div className="fluid absolute -top-1 -left-1 -right-1 -bottom-1 w-full h-full bg-black-08 bg-hero-background bg-cover bg-center opacity-5 -z-10"></div>
      <main className="relative flex items-start justify-center w-full row-start-1 row-end-3 col-start-1 col-end-3 h-[18.75rem] md:h-[37.5rem] 2xl:h-[43rem] text-black-30 z-10 pt-2 md:pt-16">
        <div className="relative row-start-1 row-end-4 flex items-center justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px] 2xl:w-[470px] 2xl:h-[470px]">
          <Image src={desing} alt="logo" fill className="backdrop-blur-[2px]" />
        </div>
      </main>
      <Entry />
    </section>
  );
};

export default Hero;
