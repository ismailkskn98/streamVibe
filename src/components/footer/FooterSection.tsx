import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import FooterSectionItem from "./FooterSectionItem";

type FooterSectionItem = {
  title: string;
  links: string[];
};

const footerSectionContent: FooterSectionItem[] = [
  {
    title: "Ana Sayfa",
    links: ["Kategoriler", "Cihazlar", "Fiyatlandırma", "SSS"],
  },
  {
    title: "Filmler",
    links: ["Türler", "Trendler", "Yeni Çıkanlar", "Popüler"],
  },
  {
    title: "Diziler",
    links: ["Türler", "Trendler", "Yeni Çıkanlar", "Popüler"],
  },
  {
    title: "Destek",
    links: ["Bize Ulaşın"],
  },
  {
    title: "Abonelik",
    links: ["Planlar", "Özellikler"],
  },
];

const socialLinks = [
  { icon: <FaFacebook className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "/" },
  { icon: <FaTwitter className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "/" },
  { icon: <FaLinkedin className="w-5 h-5 2xl:w-6 2xl:h-6" />, href: "/" },
];

const FooterSection = () => {
  return (
    <main className="row-span-2 w-full grid grid-cols-2 md:grid-cols-6 gap-5 2xl:gap-[30px]">
      {footerSectionContent.map((section: FooterSectionItem, index: number) => (
        <FooterSectionItem key={index} section={section} />
      ))}
      <article className="w-full flex flex-col items-start justify-start gap-6">
        <h3 className="text-white font-semibold text-base md:text-lg 2xl:text-xl capitalize">Abonelik</h3>
        <div className="text-grey-60 flex items-center gap-2 md:gap-[10px] 2xl:gap-[14px]">
          {socialLinks.map((social, socialIndex) => (
            <Link
              key={socialIndex}
              href={social.href}
              className="text-white bg-black-10 border border-solid border-black-15 rounded-lg p-3 md:p-2 2xl:p-4 hover:bg-black-08 transition-all"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
};

export default FooterSection;
