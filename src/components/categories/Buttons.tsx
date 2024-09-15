"use client";
import React, { useCallback } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import type { CarouselApi } from "../ui/carousel";

const Buttons = ({ api }: { api: CarouselApi | null }) => {
  const progress = useSelector((state: RootState) => state.categories.progress);

  const handleScrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleScrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  return (
    <article className="relative bg-black-06 items-center justify-between gap-5 p-4 rounded-xl lg:flex hidden">
      <div onClick={handleScrollPrev} className="p-[14px] cursor-pointer bg-black-10 text-white rounded-lg group">
        <RiArrowLeftLine className={` min-w-[28px] min-h-[28px] bg-black-10 text-white rounded-lg group-hover:text-grey-60 transition-all duration-300`} />
      </div>
      <div className="min-w-20 flex items-center justify-center">
        <div className="flex w-full h-1 bg-black-10 overflow-hidden">
          <div className="h-full bg-red-45 transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
      <div onClick={handleScrollNext} className="p-[14px] cursor-pointer bg-black-10 text-white rounded-lg group">
        <RiArrowRightLine className={`min-w-[28px] min-h-[28px] bg-black-10 text-white rounded-lg group-hover:text-grey-60 transition-all duration-300`} />
      </div>
    </article>
  );
};

export default Buttons;
