import React, { useCallback } from "react";
import Button from "../common/SlideButton";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import type { CarouselApi } from "../ui/carousel";
import Progress from "../common/Progress";

const TrailerButtons = ({ progress, api }: { progress: number; api: CarouselApi | null }) => {
  const handleScrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleScrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  return (
    <article className="w-full flex items-center justify-between">
      <Button onClick={handleScrollPrev} icon={<ArrowLeftIcon className="w-7 h-7" />} className="bg-black-06 p-[14px] text-white rounded-lg border border-solid border-black-12" />
      <Progress progress={progress} />
      <Button onClick={handleScrollNext} icon={<ArrowRightIcon className="w-7 h-7" />} className="bg-black-06 p-[14px] text-white rounded-lg border border-solid border-black-12" />
    </article>
  );
};

export default TrailerButtons;
