import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Growth from "@/components/Growth";
import Operations from "@/components/Operations";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Growth />
        <Operations />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
