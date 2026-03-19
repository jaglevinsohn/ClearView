import Link from 'next/link';
import { Layers } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-card-border)] bg-[#080b12] mt-12">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center ring-1 ring-teal-500/30">
                        <Layers size={18} />
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">Gravio</span>
                </div>
                
                <p className="text-sm text-[var(--color-text-muted)] text-center md:text-left font-medium">
                    Making Schoology easier for parents.
                </p>

                <div className="flex gap-8 text-sm text-[var(--color-text-muted)]">
                    <Link href="#" className="hover:text-white hover:underline transition-all underline-offset-4">Privacy</Link>
                    <Link href="#" className="hover:text-white hover:underline transition-all underline-offset-4">Terms</Link>
                    <Link href="#" className="hover:text-white hover:underline transition-all underline-offset-4">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
