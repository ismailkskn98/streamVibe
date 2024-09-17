import Hero from "@/components/hero";
import HeroImages from "@/components/hero/HeroImages";
import Categories from "@/components/categories";
import Devices from "@/components/devices";
import Faq from "@/components/faq";
import Pricing from "@/components/pricing";
import CallToAction from "@/components/callToAction";

export default function Home() {
  return (
    <main className="space-y-36">
      <Hero />
      <HeroImages />
      <Categories />
      <Devices />
      <Faq />
      <Pricing />
      <CallToAction />
    </main>
  );
}
