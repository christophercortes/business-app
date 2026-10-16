import { Tech } from "@/lib/tech";
import Image from "next/image";

interface TechnologyCarouselProps {
    technology: Tech[];
};

export default function TechnologyCarousel({ technology }: TechnologyCarouselProps) {
    return (
        <section className="relative z-10 overflow-hidden bg-white py-16 sm:py-20">
            <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-800">
                    Mi tech stack
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                    Technologías que utilizo
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500">
                    Herramientas modernas para crear soluciones digitales.
                </p>
                <div className="relative">
                    <div className="marquee-track flex w-max motion-reduce:transform-none mt-8">
                        {[0, 1].map((group) => (
                            <div
                                key={group}
                                aria-hidden={group === 1 ? true : undefined}
                                className="flex shrink-0 gap-5 sm:gap-6 sm:pr-6"
                            >
                                {technology.map((tech) => (
                                    <div
                                        key={`${group}- ${ tech.id }`}
                                        className="group flex h-36 w-32 shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200/80 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-700/40 hover:shadow-lg sm:h-40 sm:w-36"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center">
                                            <Image
                                                src={tech.logo}
                                                alt={group === 0 ? tech.name : ""}
                                                width={56}
                                                height={56}
                                                sizes="56px"
                                                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110 "
                                            />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-green-800">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}