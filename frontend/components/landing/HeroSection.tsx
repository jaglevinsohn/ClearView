"use client";

import { useRouter } from 'next/navigation';
import { TrendingUp, BookOpen, Calendar } from 'lucide-react';

export default function HeroSection({ isAuthenticated }: { isAuthenticated: boolean | null }) {
    const router = useRouter();

    const handlePrimaryClick = () => {
        if (isAuthenticated) {
            router.push('/register');
        } else {
            document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSteps = () => {
        document.getElementById('steps-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left space-y-8 z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    Gravio makes Schoology <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">easier for parents.</span>
                </h1>
                <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
                    Track grades, assignments, and daily priorities in one clear dashboard — without digging through Schoology or constantly asking your child what’s due.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button onClick={handlePrimaryClick} className="px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium transition-colors shadow-lg shadow-teal-500/25 flex items-center justify-center">
                        {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
                    </button>
                    {!isAuthenticated && (
                        <button onClick={scrollToSteps} className="px-8 py-4 rounded-xl bg-[var(--color-card-dark)] hover:bg-[#2a2f42] border border-[var(--color-card-border)] text-white font-medium transition-colors flex items-center justify-center">
                            How It Works
                        </button>
                    )}
                </div>
            </div>

            <div className="w-full lg:w-[55%] relative z-10 flex justify-center lg:justify-end">
                {/* Hero Dashboard Preview */}
                <div className="relative w-full max-w-2xl mt-8 lg:mt-0 xl:-mr-8">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-teal-500/10 to-emerald-500/20 rounded-3xl blur-3xl transform rotate-2"></div>
                    
                    {/* Mock Browser/App Window */}
                    <div className="relative bg-[var(--color-bg-dark)] border border-[var(--color-card-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-500">
                        {/* Fake Mac Titlebar */}
                        <div className="h-10 bg-[#151924]/80 border-b border-[var(--color-card-border)]/50 flex items-center px-4 gap-2.5 shrink-0 backdrop-blur-sm">
                            <div className="w-3 h-3 rounded-full border border-rose-500/30 bg-rose-500/80"></div>
                            <div className="w-3 h-3 rounded-full border border-amber-500/30 bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full border border-emerald-500/30 bg-emerald-500/80"></div>
                            <div className="mx-auto flex-1 text-center -ml-16">
                                <span className="text-[10px] text-[var(--color-text-muted)] font-medium bg-[#1e2230] px-3 py-1 rounded-md border border-[var(--color-card-border)]/50">app.gravio.com / dashboard</span>
                            </div>
                        </div>

                        {/* App Content Container */}
                        <div className="p-4 sm:p-5 lg:p-6 space-y-4 lg:space-y-5 bg-gradient-to-b from-[#10141f]/50 to-[var(--color-bg-dark)]">
                            {/* Top KPI Row */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-[var(--color-card-dark)] rounded-xl p-3 border border-[var(--color-card-border)] flex items-center gap-3 hover:border-indigo-500/50 transition-colors">
                                    <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                        <TrendingUp className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-semibold text-[var(--color-text-muted)] tracking-wider">CURRENT GPA</div>
                                        <div className="text-xl font-bold tracking-tight text-white leading-none mt-1">3.92</div>
                                    </div>
                                </div>
                                <div className="bg-[var(--color-card-dark)] rounded-xl p-3 border border-[var(--color-card-border)] flex items-center gap-3 hover:border-teal-500/50 transition-colors">
                                    <div className="h-8 w-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                                        <BookOpen className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-semibold text-[var(--color-text-muted)] tracking-wider">ACTIVE COURSES</div>
                                        <div className="text-xl font-bold tracking-tight text-white leading-none mt-1">6</div>
                                    </div>
                                </div>
                                <div className="bg-[var(--color-card-dark)] rounded-xl p-3 border border-[var(--color-card-border)] flex items-center gap-3 hover:border-amber-500/50 transition-colors hidden sm:flex">
                                    <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                                        <Calendar className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-semibold text-[var(--color-text-muted)] tracking-wider">DUE THIS WEEK</div>
                                        <div className="text-xl font-bold tracking-tight text-white leading-none mt-1">4</div>
                                    </div>
                                </div>
                            </div>

                            {/* Daily Academic Outlook */}
                            <div className="bg-[var(--color-card-dark)] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-indigo-500/30 shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                                <div className="relative">
                                    <h2 className="text-base lg:text-lg font-bold text-gray-100 flex items-center mb-3">
                                        <span className="bg-indigo-500/20 text-indigo-400 p-1.5 rounded-lg mr-2 shadow-inner">
                                            <BookOpen className="h-4 w-4" />
                                        </span>
                                        Daily Academic Outlook
                                    </h2>
                                    <div className="text-gray-300 text-xs lg:text-sm tracking-wide font-medium space-y-4">
                                        <p className="opacity-90 leading-relaxed">You're caught up for today, but you have assignments coming up soon.</p>
                                        <div className="bg-[#1e2230]/70 rounded-lg p-4 border border-indigo-500/10 shadow-inner">
                                            <p className="font-bold text-indigo-300/80 mb-2 text-[10px] lg:text-xs uppercase tracking-wider">Today's Focus Priorities:</p>
                                            <ul className="space-y-2.5">
                                                <li className="flex items-start text-xs lg:text-sm">
                                                    <span className="text-indigo-400 mr-2 mt-0.5">✦</span>
                                                    <span className="text-gray-100">Finish <span className="font-bold">History Outline</span> <span className="text-amber-400/80 font-semibold">(Due Tomorrow)</span></span>
                                                </li>
                                                <li className="flex items-start text-xs lg:text-sm">
                                                    <span className="text-indigo-400 mr-2 mt-0.5">✦</span>
                                                    <span className="text-gray-100">Study for <span className="font-bold">Calc Test Unit 8</span> <span className="text-[var(--color-text-muted)]">(In 2 days)</span></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supporting Card Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[var(--color-card-dark)] rounded-xl p-4 border border-[var(--color-card-border)] flex flex-col hover:border-emerald-500/40 transition-colors shadow-sm relative overflow-hidden">
                                     <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-teal-500 to-emerald-500 h-full opacity-50"></div>
                                    <div className="flex justify-between items-start mb-3 pl-2">
                                        <div>
                                            <div className="text-[9px] font-semibold text-gray-500 tracking-wider mb-0.5 uppercase">HONORS</div>
                                            <h3 className="font-semibold text-[13px] text-white leading-tight">Calculus AB</h3>
                                        </div>
                                        <div className="relative h-11 w-11 shrink-0 -mt-1 -mr-1">
                                            <svg className="h-full w-full transform -rotate-90" viewBox="0 0 36 36">
                                                <path className="stroke-[#202538]" strokeWidth="2.5" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                                <path className="stroke-emerald-400" strokeWidth="2.5" strokeDasharray="92, 100" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-sm font-bold text-emerald-400">A</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex justify-between items-center pt-3 border-t border-[var(--color-card-border)]/50 pl-2">
                                        <span className="text-[10px] text-[var(--color-text-muted)] font-medium">Semester Grade</span>
                                        <span className="text-[10px] text-emerald-400 font-bold">92%</span>
                                    </div>
                                </div>

                                <div className="bg-[var(--color-card-dark)] rounded-xl p-4 border border-[var(--color-card-border)] hover:border-amber-500/40 transition-colors shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Calendar className="h-4 w-4 text-amber-500/80" />
                                        <h3 className="text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">Next Deadline</h3>
                                    </div>
                                    <div className="flex gap-3 items-center bg-[#1e2230]/40 rounded-lg p-2.5 border border-[var(--color-card-border)]/30">
                                        <div className="w-10 h-11 bg-[#252b3d] rounded-md flex flex-col items-center justify-center shrink-0 border border-indigo-500/10 shadow-inner">
                                            <span className="text-[8px] text-indigo-400/80 uppercase font-bold">TMRW</span>
                                            <span className="text-[13px] font-black text-white shrink-0 -mt-0.5 mt-0.5">14</span>
                                        </div>
                                        <div className="min-w-0 pr-1">
                                            <p className="text-xs font-bold text-gray-100 truncate">History Outline</p>
                                            <p className="text-[9px] text-[var(--color-text-muted)] truncate mt-0.5">AP US History</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
