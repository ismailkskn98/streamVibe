import React from "react";
import Trailer from "@/components/trailer";
import type { Movies as MoviesType, Genres, MoviesByGenres, FetchResult, MovieDetailType } from "@/types";
import MoviesAndShow from "@/components/trailer/MoviesAndShow";
import Categories from "@/components/categories";
import CallToAction from "@/components/common/callToAction";
import { fetchMoviesApi } from "@/services/movies";

const apiKey = process.env.API_KEY;

// Genre'lere ait filmleri getir
const getGenres = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=tr-TR`);
  const data = await response.json();
  return data.genres;
};

// kategorilere ait filmleri getir
const getMoviesByGenre = async (genres: Genres[]) => {
  const moviesByGenrePromises = genres.map(async (genre) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}&language=tr-TR&sort_by=popularity.desc&vote_count.gte=100&page=1`
    );

    const data: FetchResult<MoviesType> = await response.json();

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
const detailedMovies = async (movies: MoviesType[]) => {
  return Promise.all(
    movies.map(async (movie) => {
      const movieDetails = await fetchMoviesApi<MovieDetailType>(`movie/${movie.id}`, 1, "");
      return movieDetails;
    })
  );
};

const page = async () => {
  const genres: Genres[] = await getGenres();
  const moviesByGenre: MoviesByGenres[] = await getMoviesByGenre(genres);
  const [movies] = await Promise.all([fetchMoviesApi<FetchResult<MoviesType>>("discover/movie", 1, `&sort_by=vote_average.desc&vote_count.gte=1000`)]);
  const moviesDetails: MovieDetailType[] = await detailedMovies(movies.results);
  return (
    <section className="space-y-[150px] mt-3">
      <Trailer movies={movies.results} />
      <MoviesAndShow title="Filmler">
        <Categories moviesByGenre={moviesByGenre.slice(0, 8)} id={"movies-1"} title="Türlerimiz" />
        <Categories moviesItems={moviesDetails.slice(0, 8)} id={"movies-categories-2"} title="Şu Anda Trend Olanlar" />
        {/* <Categories moviesByGenre={moviesByGenre} id={"movies-categories-3"} title="Yeni Çıkanlar" /> */}
        {/* <Categories moviesByGenre={moviesByGenre} id={"movies-categories-4"} title="Mutlaka İzlenmesi Gereken Filmler" /> */}
      </MoviesAndShow>
      <MoviesAndShow title="Diziler">
        <Categories moviesByGenre={moviesByGenre.slice(0, 8)} id={"shows-1"} title="Türlerimiz" />
        {/* <Categories moviesByGenre={moviesByGenre} id={"movies-categories-2"} title="Şu Anda Trend Olanlar" />
          <Categories moviesByGenre={moviesByGenre} id={"movies-categories-3"} title="Yeni Çıkanlar" />
          <Categories moviesByGenre={moviesByGenre} id={"movies-categories-4"} title="Mutlaka İzlenmesi Gereken Filmler" /> */}
      </MoviesAndShow>
      <CallToAction />
    </section>
  );
};

export default page;
