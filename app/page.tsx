import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KingdomStatus from "@/components/KingdomStatus";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Roster from "@/components/Roster";
import Media from "@/components/Media";
import DiscordWidget from "@/components/DiscordWidget";
import Recruitment from "@/components/Recruitment";
import Footer from "@/components/Footer";

export default function Home() {
return (
<> <Loader />


  <main className="text-white overflow-hidden">
    <Navbar />
    <Hero />
	<KingdomStatus />
    <About />
    <Stats />
    <Roster />
    <Media />
	<DiscordWidget />
    <Recruitment />
    <Footer />
  </main>
</>

);
}