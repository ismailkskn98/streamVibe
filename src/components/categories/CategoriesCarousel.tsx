"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
//
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { forwardRef, useImperativeHandle, useRef } from "react";

type CategoryImage = {
  id: number;
  src: string;
  alt: string;
};

type Category = {
  id: number;
  name: string;
  image: CategoryImage[];
};

const CategoriesCarousel = forwardRef((props, ref) => {
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

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

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const progress = count > 0 ? current / count : 0;

  const categories: Category[] = [
    {
      id: 1,
      name: "Aksiyon",
      image: [
        { id: 1, src: "/hero-images/Image-1.png", alt: "action" },
        { id: 2, src: "/hero-images/Image-2.png", alt: "adventure" },
        { id: 3, src: "/hero-images/Image-3.png", alt: "animation" },
        { id: 4, src: "/hero-images/Image-4.png", alt: "comedy" },
      ],
    },
    {
      id: 2,
      name: "Aksiyon",
      image: [
        { id: 1, src: "/hero-images/Image-3.png", alt: "action" },
        { id: 2, src: "/hero-images/Image-4.png", alt: "adventure" },
        { id: 3, src: "/hero-images/Image-5.png", alt: "animation" },
        { id: 4, src: "/hero-images/Image-6.png", alt: "comedy" },
      ],
    },
    {
      id: 3,
      name: "Aksiyon",
      image: [
        { id: 1, src: "/hero-images/Image-7.png", alt: "action" },
        { id: 2, src: "/hero-images/Image-8.png", alt: "adventure" },
        { id: 3, src: "/hero-images/Image-9.png", alt: "animation" },
        { id: 4, src: "/hero-images/Image-10.png", alt: "comedy" },
      ],
    },
    {
      id: 4,
      name: "Aksiyon",
      image: [
        { id: 1, src: "/hero-images/Image-11.png", alt: "action" },
        { id: 2, src: "/hero-images/Image-12.png", alt: "adventure" },
        { id: 3, src: "/hero-images/Image-13.png", alt: "animation" },
        { id: 4, src: "/hero-images/Image-14.png", alt: "comedy" },
      ],
    },
    {
      id: 5,
      name: "Aksiyon",
      image: [
        { id: 1, src: "/hero-images/Image-15.png", alt: "action" },
        { id: 2, src: "/hero-images/Image-16.png", alt: "adventure" },
        { id: 3, src: "/hero-images/Image-17.png", alt: "animation" },
        { id: 4, src: "/hero-images/Image-18.png", alt: "comedy" },
      ],
    },
    {
      id: 6,
      name: "Aksiyon",
      image: [
        { id: 1, src: "/hero-images/Image-19.png", alt: "action" },
        { id: 2, src: "/hero-images/Image-20.png", alt: "adventure" },
        { id: 3, src: "/hero-images/Image-21.png", alt: "animation" },
        { id: 4, src: "/hero-images/Image-22.png", alt: "comedy" },
      ],
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      setApi={setApi}
      className="w-full flex flex-col gap-6 relative"
    >
      <div className={`${styles.categories} absolute -top-1 -left-1 -bottom-1 -right-1 min-w-full min-h-full z-20 pointer-events-none`}></div>
      <CarouselContent className="w-full flex items-center justify-between gap-[30px] relative">
        {categories.map((category) => (
          <CarouselItem
            key={category.id}
            className="basis-1/2 lg:basis-1/4 max-w-48 lg:max-w-[300px] bg-black-10 flex flex-col items-center p-5 lg:p-[30px] rounded-xl group cursor-pointer"
          >
            <div className="grid grid-cols-2 gap-1 relative">
              <Image src={category.image[0].src} alt={category.image[0].alt} width={115} height={123} style={{ width: "auto", height: "auto" }} />
              <Image src={category.image[1].src} alt={category.image[1].alt} width={115} height={123} style={{ width: "auto", height: "auto" }} />
              <Image src={category.image[2].src} alt={category.image[2].alt} width={115} height={123} style={{ width: "auto", height: "auto" }} />
              <Image src={category.image[3].src} alt={category.image[3].alt} width={115} height={123} style={{ width: "auto", height: "auto" }} />
              <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
            </div>
            <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
              <span className="font-semibold text-sm lg:text-lg capitalize">{category.name}</span>
              <FiArrowRight className=" w-5 h-5 lg:w-[30px] lg:h-[30px]" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious ref={prevRef} className="hidden" />
      <CarouselNext ref={nextRef} className="hidden" />
      <article className="w-full flex items-center justify-center">
        <div className="flex lg:hidden w-1/4 h-1 bg-black-10 overflow-hidden">
          <div className="h-full bg-red-45 transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
        </div>
      </article>
    </Carousel>
  );
});

CategoriesCarousel.displayName = "CategoriesCarousel";
export default CategoriesCarousel;
