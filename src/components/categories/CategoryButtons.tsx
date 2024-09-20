"use client";
import React, { useCallback } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import type { CarouselApi } from "../ui/carousel";
import Progress from "../common/Progress";
import Button from "../common/SlideButton";

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
      <Button
        onClick={handleScrollPrev}
        icon={<RiArrowLeftLine className="min-w-[28px] min-h-[28px] bg-black-10 text-white rounded-lg group-hover:text-grey-60 transition-all duration-300" />}
        className="p-[14px] cursor-pointer bg-black-10 text-white rounded-lg border border-solid border-black-12 group"
      />
      <Progress progress={progress} />
      <Button
        onClick={handleScrollNext}
        icon={<RiArrowRightLine className="min-w-[28px] min-h-[28px] bg-black-10 text-white rounded-lg group-hover:text-grey-60 transition-all duration-300" />}
        className="p-[14px] cursor-pointer bg-black-10 text-white rounded-lg border border-solid border-black-12 group"
      />
    </article>
  );
};

export default Buttons;
