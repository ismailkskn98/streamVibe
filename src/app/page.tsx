import Hero from "@/components/hero";
import HeroImages from "@/components/hero/HeroImages";
import Categories from "@/components/categories";
import Devices from "@/components/devices";
import Faq from "@/components/faq";
import Pricing from "@/components/pricing";
import type { FetchResult, Genres, Movies, MoviesByGenres } from "@/types";
import CallToAction from "@/components/common/callToAction";
import { fetchMoviesApi } from "@/services/movies";

const getMoviesByGenre = async (genres: Genres[]) => {
  const moviesByGenrePromises = genres.map(async (genre) => {
    const data = await fetchMoviesApi<FetchResult<Movies>>("/discover/movie", 1, `&with_genres=${genre.id}&sort_by=popularity.desc&vote_count.gte=100`);

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
  const [trendMoviesPage1, trendMoviesPage2, genres] = await Promise.all([
    fetchMoviesApi<FetchResult<Movies>>("movie/popular", 1),
    fetchMoviesApi<FetchResult<Movies>>("movie/popular", 2),
    fetchMoviesApi<FetchResult<Genres>>("genre/movie/list", 1),
  ]);
  const allMovies = [...trendMoviesPage1.results, ...trendMoviesPage2.results];
  const moviesByGenre: MoviesByGenres[] = await getMoviesByGenre(genres.results);

  return (
    <>
      <Hero />
      <section className="space-y-36">
        <HeroImages movies={allMovies} />
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
