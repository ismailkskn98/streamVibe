"use client";
import React, { useState } from "react";
import PricingTitle from "./PricingTitle";
import Buttons from "./Buttons";
import PricingCards from "./PricingCards";
import PricingCard from "./PricingCard";

export type Plan = {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  url: string;
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const plans: Plan[] = [
    {
      name: "Temel Plan",
      description: "Film ve dizi kütüphanesine geniş erişim, içerikler arasında yakın zamanda yayımlanan başlıklar da dahil.",
      monthlyPrice: "9.99",
      yearlyPrice: "99.99",
      url: "/",
    },
    {
      name: "Standart Plan",
      description: "Yeni çıkan başlıklar ve özel içeriklerin çoğu da dahil olmak üzere daha geniş bir film ve dizi seçimine erişim.",
      monthlyPrice: "12.99",
      yearlyPrice: "129.99",
      url: "/",
    },
    {
      name: "Premium Plan",
      description: "En geniş film ve dizi seçimine erişim, tüm yeni çıkan başlıklar ve çevrimdışı izleme dahil.",
      monthlyPrice: "14.99",
      yearlyPrice: "149.99",
      url: "/",
    },
  ];

  const handleClick = () => {
    setIsYearly(!isYearly);
  };
  return (
    <section className="w-full flex flex-col gap-10 md:gap-14 2xl:gap-20">
      <PricingTitle>
        <Buttons handleClick={handleClick} isYearly={isYearly} />
      </PricingTitle>
      <PricingCards>
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} isYearly={isYearly} />
        ))}
      </PricingCards>
    </section>
  );
};

export default Pricing;
