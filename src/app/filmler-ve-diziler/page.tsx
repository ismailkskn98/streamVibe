import React from "react";
import Trailer from "@/components/trailer";
import type { Movies, MoviesTrending } from "@/types";

const getMoviesTrending = async () => {
  const apiKey = process.env.API_URL;
  const page1 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=tr-TR&page=1`);
  const data1: MoviesTrending = await page1.json();
  return data1.results;
};

const page = async () => {
  const movies: Movies[] = await getMoviesTrending();
  return (
    <>
      <section className="space-y-36 mt-3">
        <Trailer movies={movies} />
      </section>
    </>
  );
};

export default page;
