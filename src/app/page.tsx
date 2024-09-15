import Hero from "@/components/hero";
import HeroImages from "@/components/hero/HeroImages";
import Categories from "@/components/categories";
import Devices from "@/components/Devices";

export default function Home() {
  return (
    <main className="space-y-36">
      <Hero />
      <HeroImages />
      <Categories />
      <Devices />
    </main>
  );
}
