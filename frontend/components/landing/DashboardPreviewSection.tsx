export default function DashboardPreviewSection() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">Everything in one place</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[100px] -z-10 rounded-full"></div>
                
                <div className="bg-[var(--color-card-dark)] border border-[var(--color-card-border)] rounded-2xl p-6 aspect-video flex flex-col relative overflow-hidden group hover:border-teal-500/50 transition-colors">
                    <h3 className="text-white font-medium mb-5">Daily Outlook</h3>
                    <div className="flex-1 space-y-4 relative z-10">
                        <div className="h-12 w-full bg-[#10141f] rounded-xl border border-[var(--color-card-border)] opacity-90 flex items-center px-4">
                            <div className="w-4 h-4 rounded-full border-2 border-teal-500 mr-3"></div>
                            <div className="h-2 w-32 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                        <div className="h-12 w-[85%] bg-[#10141f] rounded-xl border border-[var(--color-card-border)] opacity-70 flex items-center px-4">
                            <div className="w-4 h-4 rounded-full border-2 border-emerald-500 mr-3"></div>
                            <div className="h-2 w-24 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                        <div className="h-12 w-[70%] bg-[#10141f] rounded-xl border border-[var(--color-card-border)] opacity-50 flex items-center px-4">
                            <div className="w-4 h-4 rounded-full border-2 border-blue-500 mr-3"></div>
                            <div className="h-2 w-28 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-[var(--color-card-dark)] border border-[var(--color-card-border)] rounded-2xl p-6 aspect-video flex flex-col relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                    <h3 className="text-white font-medium mb-5">Course Overview</h3>
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        <div className="bg-[#10141f] rounded-xl border border-[var(--color-card-border)] p-4 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mb-2"></div>
                            <div className="h-2 w-16 bg-[var(--color-text-main)] rounded mb-1"></div>
                            <div className="h-2 w-10 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                        <div className="bg-[#10141f] rounded-xl border border-[var(--color-card-border)] p-4 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 mb-2"></div>
                            <div className="h-2 w-16 bg-[var(--color-text-main)] rounded mb-1"></div>
                            <div className="h-2 w-10 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                        <div className="bg-[#10141f] rounded-xl border border-[var(--color-card-border)] p-4 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 mb-2"></div>
                            <div className="h-2 w-16 bg-[var(--color-text-main)] rounded mb-1"></div>
                            <div className="h-2 w-10 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                        <div className="bg-[#10141f] rounded-xl border border-[var(--color-card-border)] p-4 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 mb-2"></div>
                            <div className="h-2 w-16 bg-[var(--color-text-main)] rounded mb-1"></div>
                            <div className="h-2 w-10 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-[var(--color-card-dark)] border border-[var(--color-card-border)] rounded-2xl p-6 aspect-video flex flex-col relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                    <h3 className="text-white font-medium mb-5">Upcoming Work</h3>
                    <div className="flex-1 space-y-3">
                        <div className="flex flex-col p-4 bg-[#10141f] rounded-xl border border-[var(--color-card-border)]">
                            <div className="flex justify-between items-center mb-3">
                                <div className="h-3 w-32 bg-[var(--color-text-main)] rounded"></div>
                                <div className="h-5 w-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center">
                                    <div className="h-1.5 w-8 bg-red-400 rounded"></div>
                                </div>
                            </div>
                            <div className="h-2 w-20 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                        <div className="flex flex-col p-4 bg-[#10141f] rounded-xl border border-[var(--color-card-border)]">
                            <div className="flex justify-between items-center mb-3">
                                <div className="h-3 w-40 bg-[var(--color-text-main)] rounded"></div>
                                <div className="h-5 w-20 bg-[var(--color-card-border)] rounded-full flex items-center justify-center">
                                    <div className="h-1.5 w-10 bg-[var(--color-text-muted)] rounded"></div>
                                </div>
                            </div>
                            <div className="h-2 w-24 bg-[var(--color-text-muted)] rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-[var(--color-card-dark)] border border-[var(--color-card-border)] rounded-2xl p-6 aspect-video flex flex-col relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
                    <h3 className="text-white font-medium mb-5">Calendar</h3>
                    <div className="grid grid-cols-7 gap-1.5 flex-1 p-2 bg-[#10141f] rounded-xl border border-[var(--color-card-border)]">
                        {Array.from({ length: 28 }).map((_, i) => (
                            <div key={i} className={`rounded-[4px] ${(i === 12 || i === 15 || i === 22) ? 'bg-teal-500/30 border border-teal-500/50' : 'bg-[var(--color-card-dark)]'} transition-colors hover:bg-[var(--color-card-border)]`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
