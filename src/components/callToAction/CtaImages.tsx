import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const CtaImages = () => {
  const images = [];
  for (let i = 1; i <= 40; i++) {
    images.push(`/hero-images/Image-${i}.png`);
  }

  return (
    <div
      className={`w-[103%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-[20px] -z-20`}
    >
      <div className={`${styles.ctaBg} absolute -top-1 -left-1 -right-1 -bottom-1 w-full h-full`}></div>
      {images.map((src, index) => (
        <Image key={index} src={src} alt={`Hero Image ${index + 1}`} width={165} height={83.75} className="object-cover w-[137px] h-[158px] md:w-[165px] md:h-[83.75px]" />
      ))}
    </div>
  );
};

export default CtaImages;
