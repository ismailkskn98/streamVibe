import React from "react";
import styles from "../styles.module.css";
import Link from "next/link";

const CategoryShowSeeAll = ({ link }: { link: string }) => {
  return (
    <Link href={link} className="absolute top-0 right-0 flex items-center justify-center min-h-full w-36 bg-[#0f0f0fa8] hover:bg-[#0f0f0ffc] transition-all z-10 cursor-pointer">
      <div className={`${styles.showSeeAll} h-full w-full absolute top-0 left-0`}></div>
      <span
        className="text-xl font-semibold"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          whiteSpace: "nowrap",
        }}
      >
        Tümünü Gör
      </span>
    </Link>
  );
};

export default CategoryShowSeeAll;
