"use client";
import React from "react";
import TrailerCarousel from "./TrailerCarousel";
import type { CarouselApi } from "../ui/carousel";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import TrailerButtons from "./TrailerButtons";
import TrailerText from "./TrailerText";
import type { Movies } from "@/types";
import styles from "./styles.module.css";

const Trailer = ({ movies }: { movies: Movies[] }) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const { selectedIndex, progress } = useSelector((state: RootState) => state.trailer);

  return (
    <section
      onMouseEnter={() => api?.plugins().autoplay?.stop()}
      onMouseLeave={() => api?.plugins().autoplay?.play()}
      className="relative w-full h-[770px] overflow-hidden rounded-xl border border-solid border-black-12 z-20"
    >
      <div className={`${styles.trailer_linear} min-w-full min-h-full absolute -top-1 -left-1 -right-1 -bottom-1 z-10`}></div>
      <main className="w-full absolute z-10 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-10 pb-5 px-12">
        <TrailerText trailerItems={movies} selectedIndex={selectedIndex} />
        <TrailerButtons progress={progress} api={api} />
      </main>
      <TrailerCarousel api={api} setApi={setApi} trailerItems={movies} />
    </section>
  );
};

export default Trailer;
