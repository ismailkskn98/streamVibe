import CategoryNames from "@/components/categoriesPage/categoryNames";
import React from "react";

const categoriesFetch = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=tr-TR`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.genres;
};

export default async function page() {
  const categories = await categoriesFetch();

  return (
    <section>
      <CategoryNames categoriesName={categories} />
    </section>
  );
}
