"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={`${isActive ? "px-6 py-3 text-white bg-black-10 rounded-lg" : "text-grey-75"} transition-all`}>
      {title}
    </Link>
  );
};

export default NavItem;
