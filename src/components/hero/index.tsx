import Image from "next/image";
import React from "react";
import desing from "@/../public/abstract-design.svg";
import Entry from "./entry";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 sm:gap-10 md:gap-5 lg:gap-20 xl:gap-10">
      <div className="fluid absolute -top-1 -left-1 -right-1 -bottom-1 w-full h-full bg-black-08 bg-hero-background bg-cover bg-center opacity-5 -z-10"></div>
      <main className="relative flex items-center justify-center w-full row-start-1 row-end-3 h-[18.75rem] md:h-[32.5rem] 2xl:h-[43rem] text-black-30 z-10 pt-2 md:pt-16">
        <div className="relative row-start-1 row-end-4 flex items-center justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[470px] lg:h-[470px]">
          <Image src={desing} alt="logo" fill className="backdrop-blur-[2px]" />
        </div>
      </main>
      <Entry />
    </section>
  );
};

export default Hero;
