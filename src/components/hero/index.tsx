import Image from 'next/image';
import React from 'react';
import desing from '@/../public/abstract-design.svg';

const Hero = () => {
    return (
<section className="fluid grid-container relative h-[44rem] flex items-center justify-center text-black-30 z-10">
    {/* Opaklık uygulanan arka plan */}
    <div className="fluid bg-hero-background bg-cover bg-center opacity-5 pointer-events-none"></div>
    
    {/* İçerik kısmı */}
    <div className='flex items-center justify-center'>
        <Image src={desing} alt="asd" width={370} height={370} quality={100} className='backdrop-blur-[2px]' />
    </div>
</section>
    );
  };
  
  export default Hero;