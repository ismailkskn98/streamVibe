/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import CategoriesCarousel from "./CategoriesCarousel";
import CategoriesTitle from "./CategoriesTitle";
import styles from "./styles.module.css";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const Categories = () => {
  const carouselRef = useRef<any>(null);

  return (
    <section className="w-full flex flex-col gap-20 mb-10">
      <main className="w-full flex items-center justify-between">
        <CategoriesTitle />
        <article className="relative bg-black-06 flex items-center gap-4 p-4 rounded-xl">
          <div className={`${styles.buttonBg} absolute top-0 left-0 w-full h-full z-10 pointer-events-none rounded-xl`}></div>
          <span className="p-[14px] cursor-pointer bg-black-10 text-white rounded-lg group">
            <RiArrowLeftLine
              onClick={() => carouselRef.current?.goPrev()}
              className={`${styles.button} w-[28px] h-[28px] bg-black-10 text-white rounded-lg group-hover:text-grey-60 transition-all duration-300`}
            />
          </span>
          <span className="p-[14px] cursor-pointer bg-black-10 text-white rounded-lg group">
            <RiArrowRightLine
              onClick={() => carouselRef.current?.goNext()}
              className={`${styles.button} w-[28px] h-[28px] bg-black-10 text-white rounded-lg group-hover:text-grey-60 transition-all duration-300`}
            />
          </span>
        </article>
      </main>
      <CategoriesCarousel ref={carouselRef} />
    </section>
  );
};

export default Categories;
