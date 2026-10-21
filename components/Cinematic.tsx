import Header from "@/components/Header";

interface CinematicProps {
    video: string;
};

export default function Cinematic({ video}: CinematicProps) {
    return (
        <section className="relative isolate min-h-screen w-full overflow-hidden">
            <Header />
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-center"
            >
                <source src={ video} type="video/mp4"></source>
            </video>

            <div className="absolute inset-0 bg-white/8" />

            <div className="absolute bottom-0 left-2.5 z-10 w-full py-5 pb-8 sm:px-10 md:pb-12 md:px-16 lg:py-20 lg:pb-16">
                <div className="max-w-3xl">
                    <div className="mb-6 flex items-center gap-3 sm:mb-8">
                        <span className="h-px w-4 shrink-0 bg-white sm:w-8 md:w-10" />
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm sm:tracking-[0.18em] md:text-base">
                            Desarrollador &amp; Soluciones Digitales
                        </p>
                    </div>
                </div>
                <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                    Software que
                    <br />
                    <span className="block">
                        impulsa tu crecimiento.
                    </span>
                </h1>
                <p className="mt-6 max-w-lg bg-black/80 p-4 text-sm font-medium leading-7 text-white sm:mt-8 sm:p-6 sm:text-base sm:leading-8 md:p-7 md:text-lg">
                    Desarrollo sitios web modernos y software a medida que ayudan a las empresas
                    a trabajar de forma más eficiente, conectar con sus clientes y crecer.
                </p>
            </div>
        </section>
    );
}