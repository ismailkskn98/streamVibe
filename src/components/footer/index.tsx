import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-06 w-full h-full flex flex-col items-center gap-[100px] px-40 pt-[100px] pb-[50px] mt-36">
      <main className="w-full flex items-start gap-[30px]">
        <article className="w-full flex flex-col items-start justify-start gap-6">
          <h3 className="text-white font-semibold text-xl capitalize">Home</h3>
          <div className="text-grey-60 flex flex-col items-start gap-[14px] font-medium text-lg capitalize">
            <Link href="/">Categories</Link>
            <Link href="/">Devices</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">FAQ</Link>
          </div>
        </article>
        <article className="w-full flex flex-col items-start justify-start gap-6">
          <h3 className="text-white font-semibold text-xl capitalize">Movies</h3>
          <div className="text-grey-60 flex flex-col items-start gap-[14px] font-medium text-lg capitalize">
            <Link href="/">Gernes</Link>
            <Link href="/">Trending</Link>
            <Link href="/">New Release</Link>
            <Link href="/">Popular</Link>
          </div>
        </article>
        <article className="w-full flex flex-col items-start justify-start gap-6">
          <h3 className="text-white font-semibold text-xl capitalize">Shows</h3>
          <div className="text-grey-60 flex flex-col items-start gap-[14px] font-medium text-lg capitalize">
            <Link href="/">Gernes</Link>
            <Link href="/">Trending</Link>
            <Link href="/">New Release</Link>
            <Link href="/">Popular</Link>
          </div>
        </article>
        <article className="w-full flex flex-col items-start justify-start gap-6">
          <h3 className="text-white font-semibold text-xl capitalize">Support</h3>
          <div className="text-grey-60 flex flex-col items-start gap-[14px] font-medium text-lg capitalize">
            <Link href="/">Contact Us</Link>
          </div>
        </article>
        <article className="w-full flex flex-col items-start justify-start gap-6">
          <h3 className="text-white font-semibold text-xl capitalize">Subscription</h3>
          <div className="text-grey-60 flex flex-col items-start gap-[14px] font-medium text-lg capitalize">
            <Link href="/">Plans</Link>
            <Link href="/">Features</Link>
          </div>
        </article>
        <article className="w-full flex flex-col items-start justify-start gap-6">
          <h3 className="text-white font-semibold text-xl capitalize">Subscription</h3>
          <div className="text-grey-60 flex items-center gap-[14px]">
            <Link href="/" className="text-white bg-black-10 border border-solid border-black-15 rounded-lg p-4 hover:bg-black-08 transition-all">
              <FaFacebook />
            </Link>
            <Link href="/" className="text-white bg-black-10 border border-solid border-black-15 rounded-lg p-4 hover:bg-black-08 transition-all">
              <FaTwitter />
            </Link>
            <Link href="/" className="text-white bg-black-10 border border-solid border-black-15 rounded-lg p-4 hover:bg-black-08 transition-all">
              <FaLinkedin />
            </Link>
          </div>
        </article>
      </main>
      <main className="w-full flex flex-col items-center gap-6">
        <div className="w-full h-[1px] bg-black-15"></div>
        <article className="w-full flex items-center justify-between">
          <p className="text-grey-60 text-sm">@2024 streamvib, All Rights Reserved</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="text-grey-60 text-sm">
              Terms of Use
            </Link>
            <Link href="/" className="text-grey-60 text-sm flex items-center gap-5 overflow-hidden">
              <div className="w-[1px] min-h-5 bg-black-15"></div>
              <span>Privacy Policy</span>
              <div className="w-[1px] min-h-5 bg-black-15"></div>
            </Link>
            <Link href="/" className="text-grey-60 text-sm">
              Cookie Policy
            </Link>
          </div>
        </article>
      </main>
    </footer>
  );
};

export default Footer;
