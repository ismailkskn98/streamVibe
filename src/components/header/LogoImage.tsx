import Image from "next/image";
import React from "react";
import logo from "@/../public/logo.png";

const LogoImage = () => {
  return (
    <div className="relative w-48 h-14">
      <Image src={logo} alt="StreamVibe" fill />
    </div>
  );
};

export default LogoImage;
