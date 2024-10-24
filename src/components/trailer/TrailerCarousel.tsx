"use client";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useDispatch } from "react-redux";
import { setScrollSnapList, setSelectedScrollSnap } from "@/store/features/trailer/trailerSlice";
import Image from "next/image";
import type { Movies } from "@/types";

const TrailerCarousel = ({ api, setApi, trailerItems }: { api: CarouselApi | null; setApi: React.Dispatch<React.SetStateAction<CarouselApi | null>>; trailerItems: Movies[] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!api) {
      return;
    }
    dispatch(setScrollSnapList(api.scrollSnapList().length));
    dispatch(setSelectedScrollSnap(api.selectedScrollSnap() + 1));

    api.on("select", () => {
      dispatch(setSelectedScrollSnap(api.selectedScrollSnap() + 1));
    });
  }, [api, dispatch]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          // stopOnMouseEnter: true,
          // stopOnInteraction: false,
        }),
      ]}
      className="w-full h-full"
    >
      <CarouselContent className="w-full h-full">
        {trailerItems.map((movie: Movies, index) => (
          <CarouselItem key={index}>
            <div className="w-full h-full">
              <Card>
                <CardContent className="relative w-full h-full flex items-center justify-center">
                  <Image src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} fill className="object-cover 2xl:object-fill bg-center" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TrailerCarousel;
