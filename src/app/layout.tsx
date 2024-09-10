import "@/styles/reset.css";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "StreamVibe",
  description: "Film, dizi ve animasyon seyirci platformu",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${manrope.className}`}>
      <body className="grid-container text-black-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
