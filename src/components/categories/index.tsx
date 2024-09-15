"use client";
import React from "react";
import CategoriesCarousel from "./CategoriesCarousel";
import CategoriesTitle from "./CategoriesTitle";
import Buttons from "./Buttons";
import type { CarouselApi } from "../ui/carousel";

const Categories = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  return (
    <section className="w-full flex flex-col gap-10 md:gap-14 2xl:gap-20">
      <main className="w-full flex items-center justify-between">
        <CategoriesTitle />
        <Buttons api={api} />
      </main>
      <CategoriesCarousel api={api} setApi={setApi} />
    </section>
  );
};

export default Categories;
