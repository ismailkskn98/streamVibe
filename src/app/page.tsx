import Hero from "@/components/hero";
import HeroImages from "@/components/hero/HeroImages";
import Categories from "@/components/categories";
import Devices from "@/components/devices";
import Faq from "@/components/faq";
import Pricing from "@/components/pricing";

export default function Home() {
  console.log("Home.tsx");
  return (
    <main className="space-y-36">
      <Hero />
      <HeroImages />
      <Categories />
      <Devices />
      <Faq />
      <Pricing />
    </main>
  );
}
