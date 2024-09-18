import React from "react";
import FooterSection from "./FooterSection";
import FooterPolicies from "./FooterPolicies";

const Footer = () => {
  return (
    <footer className="bg-black-06 fluid grid-container w-full h-full flex flex-col items-center pt-[50px] md:pt-20 2xl:pt-24 mt-36">
      <FooterSection />
      <FooterPolicies />
    </footer>
  );
};

export default Footer;
