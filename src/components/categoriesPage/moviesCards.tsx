import type { Movies } from "@/types";
import React from "react";
import MovieCard from "./movieCard";

export default function MoviesCards({ movies }: { movies: Movies[] }) {
  return (
    <main>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
