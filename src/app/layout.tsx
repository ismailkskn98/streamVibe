import "@/styles/reset.css";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import StoreProvider from "./StoreProvider";

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
      <body className="relative grid-container bg-black-08">
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
