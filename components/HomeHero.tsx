export default function HomeHero() {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 md:gap-16 md:px-12 md:py-28 lg:py-32">
                <div className="max-w-2xl">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-px w-20 bg-white" />
                        <p className="text-2xl font-bold uppercase tracking-[0.22em] text-white">
                            Desarrollador & Soluciones Digitales
                        </p>
                    </div>
                </div>
                <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-7xl">
                    Software que
                    <br />
                    <span className="">
                        impulsa tu crecimiento.
                    </span>
                </h1>
                <p className="mt-7 max-w-lg text-base p-8 font-semibold leading-8 text-white bg-black/50 sm:text-lg">
                    Desarrollo sitios web modernos y software a medida que ayudan a las empresas
                    a trabajar de forma más eficiente, conectar con sus clientes y crecer.
                </p>
            </div>
        </section>
    );
}