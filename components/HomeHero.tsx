export default function HomeHero() {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-20 md:px-12 md:py-28 lg:py-32">
                <div className="max-w-3xl">
                    <div className="mb-6 flex items-center gap-3 sm:mb-8">
                        <span className="h-px w-8 shrink-0 bg-white sm:w-12 md:w-20" />
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm sm:tracking-[0.18em] md:text-base">
                            Desarrollador & Soluciones Digitales
                        </p>
                    </div>
                </div>
                <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-gray-950 md:text-5xl lg:text-6xl">
                    Software que
                    <br />
                    <span className="block">
                        impulsa tu crecimiento.
                    </span>
                </h1>
                <p className="mt-6 max-w-lg bg-black/50 p-4 text-sm font-medium leading-7 text-white sm:mt-8 sm:p-6 sm:text-base sm:leading-8 md:p-7 md:text-lg">
                    Desarrollo sitios web modernos y software a medida que ayudan a las empresas
                    a trabajar de forma más eficiente, conectar con sus clientes y crecer.
                </p>
            </div>
        </section>
    );
}