import React from "react";
import { Plan } from "./index";
import Link from "next/link";

type PricingCardsProps = {
  plan: Plan;
  isYearly: boolean;
};

const PricingCard = ({ plan, isYearly }: PricingCardsProps) => {
  return (
    <article className="flex flex-col items-start gap-[30px] md:gap-10 2xl:gap-[40px] p-5 md:p-10 2xl:p-[50px] bg-black-10 border border-solid border-black-15 rounded-[10px] 2xl:rounded-xl">
      <div className="flex flex-col items-start gap-4">
        <h5 className="text-white text-lg md:text-xl 2xl:text-2xl font-bold">{plan.name}</h5>
        <p className="text-grey-60 text-sm md:text-base 2xl:text-lg font-light min-h-[84px]">{plan.description}</p>
      </div>
      <div className="flex items-end justify-start gap-[2px] xl:gap-1">
        <span className="text-white font-semibold text-2xl md:text-3xl 2xl:text-[40px]">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}₺</span>
        <span className="2xl:-mb-1 text-grey-60 font-medium text-sm md:text-base 2xl:text-lg">{isYearly ? "/Yıl" : "/Ay"}</span>
      </div>
      <div className="flex items-center gap-3 2xl:gap-5">
        <Link
          href={"/"}
          className="bg-black-08 text-white font-semibold text-sm lg:text-base 3xl:text-lg border border-solid border-black-15 px-4 py-3 2xl:px-6 2xl:py-[18px] rounded-md 2xl:rounded-lg whitespace-nowrap hover:bg-black-06 transition-all"
        >
          Ücretsiz Deneme Başlat
        </Link>
        <Link
          href={plan.url}
          className="bg-red-45 text-white font-semibold text-sm lg:text-base 3xl:text-lg px-4 py-3 2xl:px-6 2xl:py-[18px] rounded-md 2xl:rounded-lg whitespace-nowrap hover:bg-red-55 transition-all"
        >
          Planı Seç
        </Link>
      </div>
    </article>
  );
};

export default PricingCard;
