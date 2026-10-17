import { getRecentEvents } from "@/lib/events";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Disciplines from "@/components/home/Disciplines";
import Journey from "@/components/home/Journey";
import Distinctions from "@/components/home/Distinctions";
import BoatsStrip from "@/components/home/BoatsStrip";
import RecentEvents from "@/components/home/RecentEvents";
import Contact from "@/components/home/Contact";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  const recent = getRecentEvents(2, new Date());
  return (
    <>
      <Hero />
      <About />
      <Disciplines />
      <Journey />
      <Distinctions />
      <BoatsStrip />
      <RecentEvents events={recent} />
      <WaveDivider />
      <Contact />
    </>
  );
}
