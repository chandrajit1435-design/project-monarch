import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Roster from "@/components/Roster";
import Recruitment from "@/components/Recruitment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Roster />
      <Recruitment />
      <Footer />
    </main>
  );
}