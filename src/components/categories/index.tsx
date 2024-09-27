"use client";
import React from "react";
import CategoriesCarousel from "./CategoriesCarousel";
import CategoriesTitle from "./CategoriesTitle";
import Buttons from "./CategoryButtons";
import type { MoviesByGenres } from "@/types";
import type { CarouselApi } from "@/components/ui/carousel";

const Categories = ({ moviesByGenre, id, title, description }: { moviesByGenre: MoviesByGenres[]; id: string; title: string; description?: string }) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  return (
    <section className="w-full flex flex-col gap-10 md:gap-14 2xl:gap-16">
      <main className="w-full flex items-center justify-between gap-20">
        <CategoriesTitle title={title} description={description} />
        <Buttons api={api} id={id} />
      </main>
      <CategoriesCarousel id={id} api={api} setApi={setApi} moviesByGenre={moviesByGenre} />
    </section>
  );
};

export default Categories;
