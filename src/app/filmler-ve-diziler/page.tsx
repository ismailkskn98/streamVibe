import React from "react";
import Trailer from "@/components/trailer";
import type { Movies, MoviesTrending } from "@/types";

const apiKey = process.env.API_KEY;

const getMoviesTrending = async () => {
  const page1 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr-TR&sort_by=vote_average.desc&vote_count.gte=1000`);
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
