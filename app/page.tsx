import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { DataFusion } from "@/components/home/DataFusion";
import { WhyColumbus } from "@/components/home/WhyColumbus";
import { Products } from "@/components/home/Products";
import { Footer } from "@/components/layout/Footer";
import { FeatureHighlight } from "@/components/home/FeatureHighlight";

import { GridBackground } from "@/components/home/GridBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <GridBackground />
      <div className="-mt-6 mb-0 md:-mt-8">
        <WhyColumbus />
      </div>

      <FeatureHighlight />

      <div className="pt-24 md:pt-28">
        <div id="services" className="mb-24 md:mb-28">
          <Services />
        </div>
        <div className="mb-24 md:mb-28">
          <DataFusion />
        </div>
        <div id="products">
          <Products />
        </div>
      </div>
      <Footer />
    </main>
  );
}
