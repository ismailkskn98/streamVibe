import Link from "next/link";
import React from "react";

type FooterSectionItemProps = {
  title: string;
  links: string[];
};

const FooterSectionItem = ({ section }: { section: FooterSectionItemProps }) => {
  return (
    <article className="w-full flex flex-col items-start justify-start gap-4 md:gap-5 2xl:gap-6">
      <h3 className="text-white font-semibold text-base md:text-lg 2xl:text-xl capitalize">{section.title}</h3>
      <div className="text-grey-60 flex flex-col items-start gap-2 md:gap-[10px] 2xl:gap-[14px] font-medium text-sm md:text-base 2xl:text-lg capitalize">
        {section.links.map((link, linkIndex) => (
          <Link key={linkIndex} href="/" className="hover:text-white transition-all">
            {link}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default FooterSectionItem;
