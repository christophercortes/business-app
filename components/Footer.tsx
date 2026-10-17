export default function Footer() {
    return (
        <footer className="w-full bg-gray-800/40">
            <div className="mx-auto flex max-w-7xl items-col gap-6 px-8 py-12 md:flex-row md:items-center md:justify-between md:px-12">
                <p className="text-[12px] uppercase tracking-wide text-zinc-300 font-medium">
                    Copyright &copy; 2026 | Christopher Cortes | All rights reserved
                </p>
                <div className="flex flex-col items-start gap-3 text-[12px] uppercase tracking-wide text-gray-400 font-semibold md:flex-row md:flex-wrap">
                    <a href="https://www.linkedin.com/in/christopher-eduardo-cortes/" target="_blank" className="text-zinc-300 transition-colors hover:text-gray-900">
                        LinkedIn
                    </a>
                    <a href="https://github.com/christophercortes" target="_blank" className="text-zinc-300 transition-colors hover:text-gray-900">
                        GitHub
                    </a>
                    <a href="#" className="text-zinc-300 transition-colors hover:text-gray-900">
                        X
                    </a>
                </div>
            </div>
        </footer>
    );
}