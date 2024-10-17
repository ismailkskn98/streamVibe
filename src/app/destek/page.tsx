import CallToAction from "@/components/common/callToAction";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import React from "react";

const page = () => {
  return (
    <section className="space-y-[150px] mt-3">
      <Contact />
      <Faq />
      <CallToAction />
    </section>
  );
};

export default page;
