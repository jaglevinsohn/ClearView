import { Sparkles } from 'lucide-react';

export default function DailySummarySection() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-teal-900/30 to-[var(--color-bg-dark)] border border-[var(--color-card-border)] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
                
                <div className="w-full lg:w-1/2 z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-2">
                        <Sparkles size={16} />
                        <span>Daily Insights</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Know exactly what matters today.</h2>
                    <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                        Each day, Gravio gives parents a short, clear summary of what was recently completed and what should be focused on today.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 z-10">
                    <div className="bg-[#10141f] border border-[var(--color-card-border)] rounded-2xl p-6 shadow-2xl relative">
                        <div className="absolute -left-[2px] top-6 w-1 hover:w-1.5 transition-all h-12 bg-teal-500 rounded-lg"></div>
                        <p className="text-white text-lg leading-relaxed font-medium">
                            <span className="text-teal-400 font-bold">Emma</span> recently completed her AP English reading response. Today she should focus on finishing her history outline and reviewing for Friday’s calculus quiz. Overall, she appears to be on track this week.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
