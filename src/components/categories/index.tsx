"use client";
import React from "react";
import CategoriesCarousel from "./categoriesCarousel";
import CategoriesTitle from "./categoriesCarousel/CategoriesTitle";
import Buttons from "./categoriesCarousel/CategoryButtons";
import type { MovieDetailType, MoviesByGenres } from "@/types";
import type { CarouselApi } from "@/components/ui/carousel";

const Categories = ({
  moviesByGenre,
  moviesItems,
  id,
  title,
  description,
  home = false,
}: {
  moviesByGenre?: MoviesByGenres[];
  moviesItems?: MovieDetailType[];
  id: string;
  title: string;
  description?: string;
  home?: boolean;
}) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  return (
    <section className="w-full flex flex-col gap-10 md:gap-14 2xl:gap-16">
      <main className="w-full flex items-center justify-between gap-20">
        <CategoriesTitle title={title} description={description} />
        <Buttons api={api} id={id} />
      </main>
      <CategoriesCarousel id={id} api={api} setApi={setApi} moviesByGenre={moviesByGenre} moviesItems={moviesItems} home={home} />
    </section>
  );
};

export default Categories;
