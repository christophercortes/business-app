import HomeHero from "@/components/HomeHero";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import { tech } from "@/lib/tech";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Image
        src="/desktop.jpg"
        alt="Setting"
        width={3000}
        height={2000}
        priority
        className="absolute inset-x-0 top-0 h-[80vh] w-full object-cover object-center"
      />
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-white/20"/>
      <section className="relative z-10">
        <HomeHero />
      </section>
      <section>
        <TechnologyCarousel technology={tech}/>
      </section>
    </main>
  );
}

