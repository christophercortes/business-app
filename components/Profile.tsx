import Image from "next/image"

export default function Profile() {
    return (
        <section className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-8 py-12 md:flex-row md:items-center md:justify-between md:px-12">
            <div className="max-w-xl">
                <h1 className="font-sans text-5xl font-bold uppercase tracking-tighter scale-y-105 origin-left text-gray-900 md:text-6xl">
                    Software Developer
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Crafting clean interfaces and interactive digital experiences.
                </p>
            </div>
            <div className="relative inline-block overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/80 p-3 shadow-sm transition-all duration-300 hover:shadow-md">
                <Image
                    src="/me.png"
                    alt="Profile Image"
                    width={400}
                    height={400}
                    loading="eager"
                    className="rounded-xl"
                />
            </div>
        </section>
    )
}