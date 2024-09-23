import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import type { Movies } from "@/types";

const HeroImages = ({ movies }: { movies: Movies[] }) => {
  return (
    <section
      className={`w-full max-h-[500px] md:max-h-[700px] 2xl:max-h-[858px] fluid absolute top-0 left-0 -z-20 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9 3xl:grid-cols-10 gap-[10px] 2xl:gap-[20px] overflow-hidden`}
    >
      <div className={`${styles.hero} w-full h-full absolute top-0 left-0 bottom-0 right-0 z-10`}></div>
      {movies.slice(0, 40).map((movie, index) => (
        <Image
          key={index}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`${movie.title}`}
          className={`object-cover ${styles.imageAnimation} ${styles[`imageAnimation-${(index % 5) + 1}`]} w-[193px] h-[196px] rounded-xl`}
          width={200}
          height={220}
        />
      ))}
    </section>
  );
};

export default HeroImages;
