import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Community />
      <FAQ />
      <Socials />
      <Footer />
    </main>
  );
}
