import { Nav } from "@/components/Nav";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// Mirrors the home contact section so /contact is a valid URL on its own.
export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
