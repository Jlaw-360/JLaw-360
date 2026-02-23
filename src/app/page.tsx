import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Offers from "@/components/Offers";
import Authority from "@/components/Authority";
import AboutFounder from "@/components/AboutFounder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Offers />
        <Authority />
        <AboutFounder />
      </main>
      <Footer />
    </>
  );
}
