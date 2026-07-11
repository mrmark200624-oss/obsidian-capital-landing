import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <Philosophy />
        <Stats />
        <Team />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
