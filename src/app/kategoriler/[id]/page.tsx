import CategoryNames from "@/components/categoriesPage/categoryNames";
import MoviesCards from "@/components/categoriesPage/moviesCards";
import type { Movies } from "@/types";
import React from "react";

const categoriesFetch = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=tr-TR`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.genres;
};

const moviesByIdCategory = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}&language=tr-TR&sort_by=popularity.desc&vote_count.gte=100&page=1`
  );
  const data = await response.json();
  return data;
};

export default async function page({ params }: { params: { id: string } }) {
  const movies: { page: number; results: Movies[] } = await moviesByIdCategory(params.id);
  const categories = await categoriesFetch();
  return (
    <section>
      <CategoryNames categoriesName={categories} id={params.id} />
      <MoviesCards movies={movies.results} />
    </section>
  );
}
