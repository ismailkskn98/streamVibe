import React from "react";
import { CarouselItem } from "../ui/carousel";
import type { MovieDetailType } from "@/types";
import Image from "next/image";
import { GoClockFill } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";

const CategoriesCarouselMovieItem = ({ movie }: { movie: MovieDetailType }) => {
  return (
    <CarouselItem key={movie.id} className="basis-1/2 lg:basis-1/4 max-w-48 lg:max-w-[300px] bg-black-10 flex flex-col items-center gap-5 p-5 rounded-xl group cursor-pointer">
      <div className="w-full h-72 relative">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={300} height={300} className="h-full w-full object-cover rounded-[10px]" />
      </div>
      <div className="w-full flex items-center justify-between text-white group-hover:text-grey-60 transition-all duration-300">
        <span className="flex items-center justify-between gap-1 bg-black-08 text-grey-60 border border-solid border-black-15 px-2 py-[6px] rounded-[51px]">
          <GoClockFill className="max-w-6 max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-sm">{`${Math.floor(movie.runtime / 60) > 0 ? `${Math.floor(movie.runtime / 60)}sa` : ""} ${movie.runtime % 60}dk`}</span>
        </span>
        <span className="flex items-center justify-between gap-1 bg-black-08 text-grey-60 border border-solid border-black-15 px-2 py-[6px] rounded-[51px]">
          <IoEyeSharp className="max-w-6 max-h-6 text-grey-60" />
          <span className="text-grey-60 font-medium text-sm">{movie.popularity}</span>
        </span>
      </div>
    </CarouselItem>
  );
};

export default CategoriesCarouselMovieItem;
