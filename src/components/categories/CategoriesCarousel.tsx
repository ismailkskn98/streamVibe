"use client";
import React, { useMemo } from "react";
import styles from "./styles.module.css";
//
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, type CarouselApi } from "@/components/ui/carousel";
import { setScrollSnapList, setSelectedScrollSnap } from "@/store/features/categories/carouselSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import type { MovieDetailType, MoviesByGenres } from "@/types";
import CategoryMobileProgressBar from "./CategoryMobileProgressBar";
import ShowSeeAll from "./ShowSeeAll";
import CategoriesCarouselMoviesItem from "./CategoriesCarouselMoviesItem";
import CategoriesCarouselMovieItem from "./CategoriesCarouselMovieItem";

const CategoriesCarousel = ({
  api,
  setApi,
  moviesByGenre,
  moviesItems,
  id,
  home,
  link = "kategoriler",
}: {
  api: CarouselApi | null;
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | null>>;
  moviesByGenre?: MoviesByGenres[];
  moviesItems?: MovieDetailType[];
  id: string;
  home?: boolean;
  link: string;
}) => {
  const [showSeeAll, setShowSeeAll] = React.useState(false);
  const carouselState = useSelector((state: RootState) => state.carousel);
  const dispatch = useDispatch();

  const progress = useMemo(() => {
    return carouselState[id]?.progress || 0;
  }, [carouselState, id]);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    dispatch(setScrollSnapList({ id, count: api.scrollSnapList().length }));
    dispatch(setSelectedScrollSnap({ id, current: api.selectedScrollSnap() + 1 }));

    /*
    api genellikle carousel kütüphanesi tarafından sağlanan bir API nesnesidir. Bu API, carouselin durumu ve davranışları hakkında bilgi sağlar.
    on("select", callback) metodu, carouselde bir seçim olayı gerçekleştiğinde çalışacak bir geri çağırma fonksiyonunu (callback) tanımlamak için kullanılır.
    Bu olay, kullanıcı carouselde bir öğe seçtiğinde ya da manuel kaydırma ile bir öğe görüntülendiğinde tetiklenir.
    */
    api.on("select", () => {
      const selectedSnap = api.selectedScrollSnap();
      const totalSnaps = api.scrollSnapList().length;
      dispatch(setSelectedScrollSnap({ id, current: selectedSnap + 1 }));
      if (selectedSnap === totalSnaps - 1) {
        setShowSeeAll(true);
      } else {
        setShowSeeAll(false);
      }
    });
  }, [api, dispatch, id, showSeeAll]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        dragFree: false,
      }}
      plugins={
        home
          ? [
              Autoplay({
                delay: 2000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]
          : []
      }
      setApi={setApi}
      className="relative"
    >
      {home && <div className={`${styles.categories} absolute -top-1 -left-1 -bottom-1 -right-1 min-w-full min-h-full z-20 pointer-events-none`}></div>}
      <CarouselContent className="w-full flex items-center justify-between gap-[30px] relative">
        {moviesByGenre &&
          moviesByGenre.map((genres) => {
            if (genres.movies.length >= 4) {
              return <CategoriesCarouselMoviesItem key={genres.id} genres={genres} />;
            }
          })}
        {moviesItems && moviesItems.map((movie: MovieDetailType) => <CategoriesCarouselMovieItem key={movie.id} movie={movie} />)}
      </CarouselContent>
      {showSeeAll && !home && <ShowSeeAll link={link} />}
      <CategoryMobileProgressBar progress={progress} />
    </Carousel>
  );
};

export default CategoriesCarousel;
