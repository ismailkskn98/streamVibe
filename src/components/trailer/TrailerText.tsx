import React from "react";
import { FaPlay } from "react-icons/fa";
import type { Movies } from "@/types";
import Link from "next/link";

type TrailerTextProps = {
  trailerItems: Movies[];
  selectedIndex: number;
};

const TrailerText = ({ trailerItems, selectedIndex }: TrailerTextProps) => {
  console.log(selectedIndex);
  return (
    <article className="w-4/5 h-56 absolute z-20 bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
      {trailerItems.map((movie: Movies, index: number) => (
        <div key={index} className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div
            className={`flex flex-col items-center justify-center gap-[30px] transition-all duration-500 ease-in-out ${
              selectedIndex === index + 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <h2 className="text-white font-bold text-2xl md:text-[30px] 2xl:text-[38px]">{movie.title}</h2>
              <div className="hidden md:block backdrop-blur-[1px] px-2 py-1 rounded-lg">
                <p className="font-medium text-base 2xl:text-lg text-grey-75 line-clamp-2">{movie.overview}</p>
              </div>
            </div>
            <Link
              href={`films/${movie.id}`}
              className="w-min h-min flex items-center gap-1 px-5 2xl:px-6 py-[14px] 2xl:py-[14px] bg-red-45 hover:bg-red-55 transition-all text-white rounded-lg"
            >
              <FaPlay className="w-6 h-6 2xl:w-7 2xl:h-7" />
              <span className="text-sm md:text-lg 2xl:text-lg font-semibold whitespace-nowrap capitalize">Şimdi İzle</span>
            </Link>
          </div>
        </div>
      ))}
    </article>
  );
};

export default TrailerText;
