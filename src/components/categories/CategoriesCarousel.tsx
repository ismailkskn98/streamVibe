"use client";
import React, { useMemo } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
//
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { setScrollSnapList, setSelectedScrollSnap } from "@/store/features/categories/carouselSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import type { MovieDetailType, MoviesByGenres } from "@/types";
import { GoClockFill } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";

const CategoriesCarousel = ({
  api,
  setApi,
  moviesByGenre,
  moviesItems,
  id,
  home,
}: {
  api: CarouselApi | null;
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | null>>;
  moviesByGenre?: MoviesByGenres[];
  moviesItems?: MovieDetailType[];
  id: string;
  home?: boolean;
}) => {
  const carouselState = useSelector((state: RootState) => state.carousel);
  const dispatch = useDispatch();

  const progress = useMemo(() => {
    return carouselState[id]?.progress || 0;
  }, [carouselState, id]);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    dispatch(setScrollSnapList({ id, count: api.scrollSnapList().length }));
    dispatch(setSelectedScrollSnap({ id, current: api.selectedScrollSnap() + 1 }));

    api.on("select", () => {
      dispatch(setSelectedScrollSnap({ id, current: api.selectedScrollSnap() + 1 }));
    });
  }, [api, dispatch, id]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        dragFree: true,
      }}
      plugins={
        home
          ? [
              Autoplay({
                delay: 2000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]
          : []
      }
      setApi={setApi}
      className="w-full flex flex-col gap-6 relative"
    >
      {home && <div className={`${styles.categories} absolute -top-1 -left-1 -bottom-1 -right-1 min-w-full min-h-full z-20 pointer-events-none`}></div>}
      <CarouselContent className="w-full flex items-center justify-between gap-[30px] relative">
        {moviesByGenre &&
          moviesByGenre.map((item) => {
            if (item.movies.length >= 4) {
              return (
                <CarouselItem
                  key={item.id}
                  className="basis-1/2 lg:basis-1/4 max-w-48 lg:max-w-[300px] bg-black-10 flex flex-col items-center p-5 lg:p-[30px] rounded-xl group cursor-pointer"
                >
                  <div className="grid grid-cols-2 gap-1 relative">
                    {item.movies.map((movie, index) => (
                      <Image
                        key={index}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.original_title}
                        width={115}
                        height={123}
                        className="max-h-[67px] md:max-h-[103px] 2xl:max-h-[123px] object-cover rounded-[10px]"
                      />
                    ))}
                    <div className={`${styles.categoriesImages} absolute top-0 left-0 w-full h-full z-10`}></div>
                  </div>
                  <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
                    <span className="font-semibold text-sm lg:text-lg capitalize">{item.genre}</span>
                    <FiArrowRight className="w-5 h-5 lg:w-[30px] lg:h-[30px]" />
                  </div>
                </CarouselItem>
              );
            }
          })}
        {moviesItems &&
          moviesItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 lg:basis-1/4 max-w-48 lg:max-w-[300px] bg-black-10 flex flex-col items-center gap-5 p-5 rounded-xl group cursor-pointer"
            >
              <div className="w-full h-72 relative">
                <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} width={300} height={300} className="h-full w-full object-cover rounded-[10px]" />
              </div>
              <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
                <span className="flex items-center justify-between gap-1 bg-black-08 text-grey-60 border border-solid border-black-15 px-2 py-[6px] rounded-[51px]">
                  <GoClockFill className="max-w-6 max-h-6 text-grey-60" />
                  <span className="text-grey-60 font-medium text-sm">{`${Math.floor(item.runtime / 60) > 0 ? `${Math.floor(item.runtime / 60)}sa` : ""} ${
                    item.runtime % 60
                  }dk`}</span>
                </span>
                <span className="flex items-center justify-between gap-1 bg-black-08 text-grey-60 border border-solid border-black-15 px-2 py-[6px] rounded-[51px]">
                  <IoEyeSharp className="max-w-6 max-h-6 text-grey-60" />
                  <span className="text-grey-60 font-medium text-sm">{item.popularity}</span>
                </span>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <article className="w-full flex items-center justify-center">
        <div className="flex lg:hidden w-1/4 h-1 bg-black-10 overflow-hidden">
          <div className="h-full bg-red-45 transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
        </div>
      </article>
    </Carousel>
  );
};

export default CategoriesCarousel;
