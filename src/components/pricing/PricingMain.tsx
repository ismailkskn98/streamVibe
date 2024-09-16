import React from "react";

const PricingMain = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full flex flex-col gap-10 md:gap-14 2xl:gap-20">{children}</section>;
};

export default PricingMain;
