"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-50 w-full bg-gray-800/40">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-10 md:px-12">
                <Link href="/"
                    className="font-serif text-xl tracking-tighter scale-y-110 text-gray-900 transition-opacity hover:opacity-80">
                    Christopher Cortes
                </Link>
                <nav aria-label="Main navigation" className="hidden md:block">
                    <ul className="flex items-center gap-x-10 text-[13px] text-gray-800">
                        <li><Link href="/work" className="transition-colors hover:text-gray-500">Work</Link></li>
                        <li><Link href="/about" className="transition-colors hover:text-gray-500">About</Link></li>
                        <li><Link href="/services" className="transition-colors hover:text-gray-500">Services</Link></li>
                        <li><Link href="/contact" className="transition-colors hover:text-gray-500">Contact</Link></li>
                    </ul>
                </nav>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 flex-col items-center justify-center rounded-lg text-zinc-300 transition hover:bg-zinc-900 md:hidden"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    <span
                        className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isOpen
                            ? "translate-y-1 rotate-45"
                            : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-current transition-tranform duration-300 ${isOpen
                            ? "-translate-y-1 -rotate-45"
                            : ""
                            }`}
                    />
                </button>
                </div>
                <div
                    className={`overflow-hidden border-t border-zinc-800 transition-all duration-300 md:hidden ${isOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                >
                    <nav aria-label="Mobile navigation">
                        <ul className="space-y-1 px-5 py-4 sm:px-8">
                            <li><Link href="/work" onClick={() => setIsOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black">Work</Link></li>
                        <li><Link href="/about" className="block rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black">About</Link></li>
                        <li><Link href="/services" className="block rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black">Services</Link></li>
                        <li><Link href="/contact" className="block rounded-lg px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
}