import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

const HeroImages = () => {
  const images = [];
  for (let i = 1; i <= 45; i++) {
    images.push(`/hero-images/Image-${i}.png`);
  }

  return (
    <section
      className={`w-full max-h-[500px] md:max-h-[700px] 2xl:max-h-[858px] fluid absolute top-0 left-0 -z-20 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9 3xl:grid-cols-10 gap-[10px] 2xl:gap-[20px] overflow-hidden`}
    >
      <div className={`${styles.hero} w-full h-full absolute top-0 left-0 bottom-0 right-0`}></div>
      {images.map((src, index) => (
        <Image key={index} src={src} alt={`Hero Image ${index + 1}`} className="object-cover" width={200} height={220} />
      ))}
    </section>
  );
};

export default HeroImages;
