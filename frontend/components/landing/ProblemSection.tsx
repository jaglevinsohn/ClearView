import { NavigationOff, Layers, Search } from 'lucide-react';

export default function ProblemSection() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Why Gravio Exists</h2>
                <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                    Schoology can be difficult to navigate, and it often leaves parents piecing together grades, assignments, and deadlines on their own. Gravio was built to make that information easy to understand in one place.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[var(--color-card-dark)] p-6 rounded-2xl border border-[var(--color-card-border)] flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                        <NavigationOff size={24} />
                    </div>
                    <h3 className="text-white font-medium">Hard to navigate</h3>
                </div>
                
                <div className="bg-[var(--color-card-dark)] p-6 rounded-2xl border border-[var(--color-card-border)] flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <Layers size={24} />
                    </div>
                    <h3 className="text-white font-medium">Too many tabs</h3>
                </div>

                <div className="bg-[var(--color-card-dark)] p-6 rounded-2xl border border-[var(--color-card-border)] flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Search size={24} />
                    </div>
                    <h3 className="text-white font-medium">Hard to know what matters today</h3>
                </div>
            </div>
        </section>
    );
}
