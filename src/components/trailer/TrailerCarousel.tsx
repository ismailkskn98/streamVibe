"use client";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useDispatch } from "react-redux";
import { setScrollSnapList, setSelectedScrollSnap } from "@/store/features/trailer/trailerSlice";
import type { TrailerItem } from "./index";
import Image from "next/image";

const TrailerCarousel = ({
  api,
  setApi,
  trailerItems,
}: {
  api: CarouselApi | null;
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | null>>;
  trailerItems: TrailerItem[];
}) => {
  const dispatch = useDispatch();
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: true });

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
      plugins={[autoplay]}
      className="w-full h-full"
    >
      <CarouselContent className="w-full h-full">
        {trailerItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="w-full h-full">
              <Card>
                <CardContent className="relative w-full h-full flex aspect-square items-center justify-center p-6">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
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
