import React from "react";
import Link from "next/link";
import type { Movies } from "@/types";

type TrailerTextProps = {
  trailerItems: Movies[];
  selectedIndex: number;
};

const TrailerText = ({ trailerItems, selectedIndex }: TrailerTextProps) => {
  console.log(selectedIndex);
  return (
    <article className="w-2/3 h-32 absolute z-20 bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
      {trailerItems.map((movie: Movies, index: number) => (
        <div key={index} className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center overflow-hidden">
          <div className={`transition-all duration-500 ease-in-out ${selectedIndex === index + 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2>{movie.title}</h2>
            <p className="">{movie.overview}</p>
            <Link href={"/"}>Şimdi İzle</Link>
          </div>
        </div>
      ))}
    </article>
  );
};

export default TrailerText;
