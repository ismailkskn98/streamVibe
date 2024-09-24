"use client";
import React from "react";
import TrailerCarousel from "./TrailerCarousel";
import type { CarouselApi } from "../ui/carousel";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import TrailerButtons from "./TrailerButtons";
import TrailerText from "./TrailerText";
import type { Movies } from "@/types";

const Trailer = ({ movies }: { movies: Movies[] }) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const { selectedIndex, progress } = useSelector((state: RootState) => state.trailer);

  return (
    <section className="relative w-full h-[770px] overflow-hidden rounded-xl border border-solid border-black-12">
      <main className="w-full absolute z-20 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-8 pb-5 px-12">
        <TrailerText trailerItems={movies} selectedIndex={selectedIndex} />
        <TrailerButtons progress={progress} api={api} />
      </main>
      <TrailerCarousel api={api} setApi={setApi} trailerItems={movies} />
    </section>
  );
};

export default Trailer;
 