export default function Footer() {
    return (
        <footer className="w-full bg-green-950/40">
            <div className="mx-auto flex max-w-7xl items-col gap-6 px-8 py-12 md:flex-row md:items-center md:justify-between md:px-12">
                <p className="text-[12px] uppercase tracking-wide text-gray-500 font-medium">
                    Copyright &copy; 2026 | Christopher Cortes | All rights reserved
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[12px] uppercase tracking-wide text-gray-400 font-semibold">
                    <a href="https://www.linkedin.com/in/christopher-eduardo-cortes/" target="_blank" className="text-gray-500 transition-colors hover:text-gray-900">
                        LinkedIn
                    </a>
                    <a href="https://github.com/christophercortes" target="_blank" className="text-gray-500 transition-colors hover:text-gray-900">
                        GitHub
                    </a>
                    <a href="#" className="text-gray-500 transition-colors hover:text-gray-900">
                        X
                    </a>
                </div>
            </div>
        </footer>
    );
}