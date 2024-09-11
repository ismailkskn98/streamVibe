import Image from "next/image";
import React from "react";
import logo from "@/../public/logo.png";
import Link from "next/link";

const LogoImage = () => {
  return (
    <Link href="/" className="relative w-48 h-14">
      <Image src={logo} alt="StreamVibe" fill />
    </Link>
  );
};

export default LogoImage;
