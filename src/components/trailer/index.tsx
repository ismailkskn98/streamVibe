"use client";
import React from "react";
import TrailerCarousel from "./TrailerCarousel";
import type { CarouselApi } from "../ui/carousel";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import TrailerButtons from "./TrailerButtons";
import TrailerText from "./TrailerText";
import type { StaticImageData } from "next/image";
import avengers from "@/../public/trailer-images/trailer1.png";
import trailer2 from "@/../public/trailer-images/trailer2.png";
import trailer3 from "@/../public/trailer-images/trailer3.png";

export type TrailerItem = {
  title: string;
  description: string;
  image: StaticImageData | string;
  url: string;
};

const Trailer = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const { selectedIndex, progress } = useSelector((state: RootState) => state.trailer);

  const trailerItems: TrailerItem[] = [
    {
      title: "Yenilmezler: Son Oyun",
      description:
        "Kalan müttefiklerin yardımıyla, Yenilmezler, Thanos'un eylemlerini geri almak ve evrene yeniden düzen getirmek için bir kez daha bir araya gelmek zorunda. Sonuçlar ne olursa olsun, kiminle yüzleşirlerse yüzleşsinler... Düşenlerin intikamını alacaklar.",
      image: avengers,
      url: "/",
    },
    {
      title: "Galaksinin Koruyucuları",
      description:
        "Beklenmedik bir ekip, evrenin kaderi için son bir maceraya atılıyor. Farklı geçmişlerden gelen bu kahramanlar, galaksiyi tehdit eden büyük bir kötülüğe karşı birlikte savaşmak zorunda kalacaklar.",
      image: trailer2,
      url: "/",
    },
    {
      title: "Kara Dul",
      description:
        "Natasha Romanoff, nam-ı diğer Kara Dul, geçmişiyle yüzleşmek zorunda kalıyor. Tehlikeli bir komplo ve eski ilişkileriyle karşı karşıya kalan Natasha, ajan olarak geçirdiği zamanla ve arkasında bıraktığı kırık ilişkilerle hesaplaşmak zorunda.",
      image: trailer3,
      url: "/",
    },
  ];

  return (
    <section className="relative w-full h-[760px] overflow-hidden rounded-xl border border-solid border-black-12">
      <main className="w-full absolute z-20 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-8 pb-5 px-12">
        <TrailerText trailerItems={trailerItems} selectedIndex={selectedIndex} />
        <TrailerButtons progress={progress} api={api} />
      </main>
      <TrailerCarousel api={api} setApi={setApi} trailerItems={trailerItems} />
    </section>
  );
};

export default Trailer;
