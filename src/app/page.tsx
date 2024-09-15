import Hero from "@/components/hero";
import HeroImages from "@/components/hero/HeroImages";
import Categories from "@/components/categories";
import Devices from "@/components/devices";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <main className="space-y-36">
      <Hero />
      <HeroImages />
      <Categories />
      <Devices />
      <Faq />
    </main>
  );
}
