"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={`${isActive ? "px-5 py-2 text-white bg-black-10 rounded-lg whitespace-nowrap" : "text-grey-75"} transition-all hover:text-white`}>
      {title}
    </Link>
  );
};

export default NavItem;
