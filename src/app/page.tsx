import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Services from "@/components/Services";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Provides from "@/components/Provides";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto">
        <Hero />
        {/* <Clients /> */}
        <Services />
        <Provides />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
