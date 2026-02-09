import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { DataFusion } from "@/components/home/DataFusion";
import { WhyColumbus } from "@/components/home/WhyColumbus";
import { Products } from "@/components/home/Products";
import { Footer } from "@/components/layout/Footer";
import { ChatBar } from "@/components/chat/ChatBar";
import { FeatureHighlight } from "@/components/home/FeatureHighlight"; // New Import


import { GridBackground } from "@/components/home/GridBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GridBackground />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div className="mb-0">
        <WhyColumbus />
      </div>

      <FeatureHighlight />

      <div className="bg-white/30 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,transparent,black_100px_100%)] pt-32">
        <div id="services" className="mb-32">
          <Services />
        </div>
        <div className="mb-32">
          <DataFusion />
        </div>
        <div id="products" className="mb-32">
          <Products />
        </div>
      </div>
      <Footer />
      <ChatBar />
    </main>
  );
}
