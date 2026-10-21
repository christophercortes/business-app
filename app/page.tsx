import HomeHero from "@/components/HomeHero";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import { tech } from "@/lib/tech";
import Image from "next/image";
import Cinematic from "@/components/Cinematic";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Cinematic
        video="/programming.mp4"
      />
      {/* <section className="relative z-1">
        <HomeHero />
      </section> */}
      <section>
        <TechnologyCarousel technology={tech}/>
      </section>
    </main>
  );
}

