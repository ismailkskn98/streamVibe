"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
//
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { forwardRef, useImperativeHandle, useRef } from "react";

const CategoriesCarousel = forwardRef((props, ref) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  // useImperativeHandle ile dışarıya kontrol mekanizmasını açıyoruz
  useImperativeHandle(ref, () => ({
    goNext: () => {
      if (nextRef.current) {
        (nextRef.current as HTMLElement).click();
      }
    },
    goPrev: () => {
      if (prevRef.current) {
        (prevRef.current as HTMLElement).click();
      }
    },
  }));

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full flex items-center justify-between relative"
    >
      <div className={`${styles.categories} absolute top-0 left-0 w-full h-full z-10 pointer-events-none`}></div>
      <CarouselContent className="w-full flex items-center justify-between gap-[30px] relative">
        <CarouselItem className="basis-1/4 max-w-[300px] bg-black-10 flex flex-col items-center p-[30px] rounded-xl group cursor-pointer">
          <div className="grid grid-cols-2 gap-1 relative">
            <Image src="/hero-images/Image-1.png" alt="action" width={115} height={123} />
            <Image src="/hero-images/Image-2.png" alt="adventure" width={115} height={123} />
            <Image src="/hero-images/Image-3.png" alt="animation" width={115} height={123} />
            <Image src="/hero-images/Image-4.png" alt="comedy" width={115} height={123} />
            <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
          </div>
          <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
            <span className="font-semibold text-lg capitalize">Aksiyon</span>
            <FiArrowRight className="w-[30px] h-[30px]" />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4 max-w-[300px] bg-black-10 flex flex-col items-center p-[30px] rounded-xl group cursor-pointer">
          <div className="grid grid-cols-2 gap-1 relative">
            <Image src="/hero-images/Image-5.png" alt="drama" width={115} height={123} />
            <Image src="/hero-images/Image-6.png" alt="fantasy" width={115} height={123} />
            <Image src="/hero-images/Image-7.png" alt="horror" width={115} height={123} />
            <Image src="/hero-images/Image-8.png" alt="romance" width={115} height={123} />
            <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
          </div>
          <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
            <span className="font-semibold text-lg capitalize">Drama</span>
            <FiArrowRight className="w-[30px] h-[30px]" />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4 max-w-[300px] bg-black-10 flex flex-col items-center p-[30px] rounded-xl group cursor-pointer">
          <div className="grid grid-cols-2 gap-1 relative">
            <Image src="/hero-images/Image-9.png" alt="sci-fi" width={115} height={123} />
            <Image src="/hero-images/Image-10.png" alt="thriller" width={115} height={123} />
            <Image src="/hero-images/Image-11.png" alt="mystery" width={115} height={123} />
            <Image src="/hero-images/Image-12.png" alt="documentary" width={115} height={123} />
            <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
          </div>
          <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
            <span className="font-semibold text-lg capitalize">Bilim Kurgu</span>
            <FiArrowRight className="w-[30px] h-[30px]" />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4 max-w-[300px] bg-black-10 flex flex-col items-center p-[30px] rounded-xl group cursor-pointer">
          <div className="grid grid-cols-2 gap-1 relative">
            <Image src="/hero-images/Image-13.png" alt="biography" width={115} height={123} />
            <Image src="/hero-images/Image-14.png" alt="history" width={115} height={123} />
            <Image src="/hero-images/Image-15.png" alt="musical" width={115} height={123} />
            <Image src="/hero-images/Image-16.png" alt="war" width={115} height={123} />
            <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
          </div>
          <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
            <span className="font-semibold text-lg capitalize">Biyografi</span>
            <FiArrowRight className="w-[30px] h-[30px]" />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4 max-w-[300px] bg-black-10 flex flex-col items-center p-[30px] rounded-xl group cursor-pointer">
          <div className="grid grid-cols-2 gap-1 relative">
            <Image src="/hero-images/Image-17.png" alt="western" width={115} height={123} />
            <Image src="/hero-images/Image-18.png" alt="crime" width={115} height={123} />
            <Image src="/hero-images/Image-19.png" alt="family" width={115} height={123} />
            <Image src="/hero-images/Image-20.png" alt="sport" width={115} height={123} />
            <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
          </div>
          <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
            <span className="font-semibold text-lg capitalize">Western</span>
            <FiArrowRight className="w-[30px] h-[30px]" />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4 max-w-[300px] bg-black-10 flex flex-col items-center p-[30px] rounded-xl group cursor-pointer">
          <div className="grid grid-cols-2 gap-1 relative">
            <Image src="/hero-images/Image-17.png" alt="western" width={115} height={123} />
            <Image src="/hero-images/Image-18.png" alt="crime" width={115} height={123} />
            <Image src="/hero-images/Image-19.png" alt="family" width={115} height={123} />
            <Image src="/hero-images/Image-20.png" alt="sport" width={115} height={123} />
            <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
          </div>
          <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
            <span className="font-semibold text-lg capitalize">Western</span>
            <FiArrowRight className="w-[30px] h-[30px]" />
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/4 max-w-[300px] bg-black-10 flex flex-col items-center p-[30px] rounded-xl group cursor-pointer">
          <div className="grid grid-cols-2 gap-1 relative">
            <Image src="/hero-images/Image-17.png" alt="western" width={115} height={123} />
            <Image src="/hero-images/Image-18.png" alt="crime" width={115} height={123} />
            <Image src="/hero-images/Image-19.png" alt="family" width={115} height={123} />
            <Image src="/hero-images/Image-20.png" alt="sport" width={115} height={123} />
            <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
          </div>
          <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
            <span className="font-semibold text-lg capitalize">Western</span>
            <FiArrowRight className="w-[30px] h-[30px]" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious ref={prevRef} className="hidden" />
      <CarouselNext ref={nextRef} className="hidden" />
    </Carousel>
  );
});

CategoriesCarousel.displayName = "CategoriesCarousel";
export default CategoriesCarousel;
