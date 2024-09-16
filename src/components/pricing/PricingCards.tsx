import React from "react";

const PricingCards = ({ children }: { children: React.ReactNode }) => {
  return <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 2xl:gap-[30px]">{children}</main>;
};

export default PricingCards;
