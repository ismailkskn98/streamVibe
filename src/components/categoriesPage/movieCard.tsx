import type { Movies } from "@/types";
import React from "react";

export default function MovieCard({ movie }: { movie: Movies }) {
  return (
    <article className="w-full flex flex-col gap-3">
      <div> {movie.title} </div>
      <div> {movie.overview} </div>
      <span> {movie.release_date}</span>
    </article>
  );
}
