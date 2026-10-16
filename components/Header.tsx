import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-gray-800/40">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-10 md:px-12">
                <Link href="/"
                    className="font-serif text-xl tracking-tighter scale-y-110 text-gray-900 hover:opacity-80 transition-opacity">
                    Christopher Cortes
                </Link>
                <nav aria-label="Main navigation">
                    <ul className="flex items-center gap-x-10 text-[13px] text-gray-800">
                        <li><Link href="/work" className="transition-colors hover:text-gray-500">Work</Link></li>
                        <li><Link href="/about" className="transition-colors hover:text-gray-500">About</Link></li>
                        <li><Link href="/services" className="transition-colors hover:text-gray-500">Services</Link></li>
                        <li><Link href="/contact" className="transition-colors hover:text-gray-500">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}