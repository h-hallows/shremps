import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { WorkWithUs } from "@/components/sections/WorkWithUs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Brands />
        <About />
        <WorkWithUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
