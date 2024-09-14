/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import CategoriesCarousel from "./CategoriesCarousel";
import CategoriesTitle from "./CategoriesTitle";
import Buttons from "./Buttons";

const Categories = () => {
  const carouselRef = useRef<any>(null);

  return (
    <section className="w-full flex flex-col gap-20">
      <main className="w-full flex items-center justify-between">
        <CategoriesTitle />
        <Buttons CarouselApi={carouselRef} />
      </main>
      <CategoriesCarousel ref={carouselRef} />
    </section>
  );
};

export default Categories;
