import Hero from "@/components/hero";
import HeroImages from "@/components/hero/HeroImages";
import Categories from "@/components/categories";
import Devices from "@/components/devices";
import Faq from "@/components/faq";
import Pricing from "@/components/pricing";

import type { Genres, Movies, MoviesByGenres, MoviesTrending } from "@/types";
import CallToAction from "@/components/common/callToAction";

const apiKey = process.env.API_KEY;

const getMoviesTrending = async () => {
  const [page1, page2] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=tr-TR&page=1`),
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=tr-TR&page=2`),
  ]);

  const data1: MoviesTrending = await page1.json();
  const data2: MoviesTrending = await page2.json();

  return [...data1.results, ...data2.results];
};

const getGenres = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=tr-TR`);
  const data = await response.json();
  return data.genres;
};

const getMoviesByGenre = async (genres: Genres[]) => {
  const moviesByGenrePromises = genres.map(async (genre) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}&language=tr-TR&sort_by=popularity.desc&vote_count.gte=100&&page=1`
    );

    const data: MoviesTrending = await response.json();

    const moviesByGenres = {
      id: genre.id,
      genre: genre.name,
      movies: data.results.slice(0, 4).map((movie) => ({
        poster_path: movie.poster_path,
        original_title: movie.original_title,
      })),
    };
    return moviesByGenres;
  });

  return Promise.all(moviesByGenrePromises);
};

export default async function Home() {
  const movies: Movies[] = await getMoviesTrending();
  const genres: Genres[] = await getGenres();
  const moviesByGenre: MoviesByGenres[] = await getMoviesByGenre(genres);
  return (
    <>
      <Hero />
      <section className="space-y-36">
        <HeroImages movies={movies} />
        <Categories
          moviesByGenre={moviesByGenre}
          id="home-categories"
          title="Geniş kategori çeşitlerimizi keşfedin"
          description="Sizi güldürecek bir komedi, düşündürecek bir drama veya yeni bir şeyler öğrenmenizi sağlayacak bir belgesel arıyorsanız"
        />
        <Devices />
        <Faq />
        <Pricing />
        <CallToAction />
      </section>
    </>
  );
}
