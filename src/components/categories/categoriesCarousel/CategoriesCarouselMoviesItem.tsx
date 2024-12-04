import Image from "next/image";
import React from "react";
import { CarouselItem } from "../../ui/carousel";
import type { MoviesByGenres } from "@/types";
import { FiArrowRight } from "react-icons/fi";
import styles from "../styles.module.css";
import Link from "next/link";

const CategoriesCarouselMoviesItem = ({ genres }: { genres: MoviesByGenres }) => {
  return (
    <CarouselItem
      key={genres.id}
      className="basis-1/2 lg:basis-1/4 max-w-48 lg:max-w-[300px] bg-black-10 flex flex-col items-center p-5 lg:p-[30px] rounded-xl group cursor-pointer"
    >
      <Link href={`/kategoriler/${genres.id}`}>
        <div className="grid grid-cols-2 gap-1 relative">
          {genres.movies.map((movie, index) => (
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
          <span className="font-semibold text-sm lg:text-lg capitalize">{genres.genre}</span>
          <FiArrowRight className="w-5 h-5 lg:w-[30px] lg:h-[30px]" />
        </div>
      </Link>
    </CarouselItem>
  );
};

export default CategoriesCarouselMoviesItem;
