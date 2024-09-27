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
    <section className="relative w-full h-[770px] overflow-hidden rounded-xl border border-solid border-black-12 border-b-0">
      <div className={`${styles.trailer_linear} min-w-full min-h-full absolute top-0 left-0 right-0 bottom-0 z-10`}></div>
      <main className="w-full absolute z-20 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-10 pb-5 px-12">
        <TrailerText trailerItems={movies} selectedIndex={selectedIndex} />
        <TrailerButtons progress={progress} api={api} />
      </main>
      <TrailerCarousel api={api} setApi={setApi} trailerItems={movies} />
    </section>
  );
};

export default Trailer;
