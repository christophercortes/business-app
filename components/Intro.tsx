export default function Intro() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-gray-50 px-6 py-20 sm:py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="mt-10 mx-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400">
                                Mi formacion
                            </span>
                            <div className="mt-4 flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-sm font-bold text-white">
                                    BYU
                                </div>
                                <h3 className="mt-1 text-sm leading-snug text-gray-900">
                                    Brigham Young University—Idaho
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Estados Unidos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-8 lg:pt-3">
                <div className="border-1-2 border-red-600 pl-5 sm:pl-7">
                    
                </div>
            </div>
            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg sm:leading-8">
                <p className="mt-4 text-gray-600">
                    Soy desarrollador de software y me apasiona utilizar la tecnologia para ayudar a las empresas a crecer,
                    trabajar de manera mas eficiente y transformar sus ideas en soluciones concretas.
                </p>
                <p className="mt-4 text-gray-600">
                    Mi formacion en desarrollo de software incluye mis estudios
                    en Estados Unidos en Brigham Young University-idaho,
                    donde construi mis bases tecnicas y profundice mi comprension sobre como el software puede resolver problemas
                    reales. A traves de mi experiencia, he podido conocer el impacto que tiene la tecnologia en la forma en que
                    trabajan las empresas, facilitando las tareas cotidianas, optimizando procesos y generando nuevas oportunidades
                    de crecimiento. Esto me ha llevado a creer que la tecnologia debe ser accesible, practica y disenada pensando
                    en las personas que la utilizan.
                </p>
                <p className="mt-4 text-gray-600">
                    Mi forma de trabajar comienza por comprender el negocio detras de cada proyecto. Antes de escribir codigos,
                    me tomo el tiempo para conocer los objetivos, los desafios y los problemas que se necesitan resolver.
                    Creo que las mejores soluciones no son necesariamente las mas complejas, sino aquellas que generan un impacto real.
                    Al trabajar directamente con mis clientes, busco desarrollar herramientas que se adapten a sus necesidades,
                    en lugar de obligarlos a ajustarse a soluciones genericas.
                </p>
            </div>
            <div className="mt-4 rounded-2xl bg-gray-950 p-6 text-white sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
                    Mi Proposito
                </span>
                <p className="mt-4 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                    Todo proyecto comienza con una idea, un desafio o una oportunidad. Mi proposito es ayudarte a convertir ese punto de partida en algo real.
                </p>
                <div className="mt-6 h-px bg-white/15" />
                <p className="mt-4 text-sm font-medium tracking-wide text-gray-300">
                    Christopher Cortes Co. — Soluciones digitales con proposito.
                </p>
            </div>
        </section>
    );
}