import React from "react";
import CtaImages from "./CtaImages";

import CtaTitle from "./CtaTitle";
import Button from "../Button";

const CallToAction = () => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-[50px] md:gap-5 px-[30px] md:px-[60px] 2xl:px-20 py-[50px] md:py-20 2xl:py-[100px] rounded-xl border border-solid border-black-15 overflow-hidden">
      <CtaImages />
      <CtaTitle />
      <Button title="Ücretsiz Deneme Başlat" url="/" />
    </section>
  );
};

export default CallToAction;
