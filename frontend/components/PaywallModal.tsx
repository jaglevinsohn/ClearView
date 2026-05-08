"use client";

import { useState } from 'react';
import { CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

interface PaywallModalProps {
    userId: string | null;
}

export default function PaywallModal({ userId }: PaywallModalProps) {
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async () => {
        if (!userId) return;
        setLoading(true);
        try {
            const res = await fetch('http://localhost:8000/api/stripe/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId })
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error("No URL returned");
            }
        } catch (error) {
            console.error("Failed to start checkout:", error);
            setLoading(false);
            alert("Failed to start checkout. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* The backdrop blur is handled by the parent container, but we add a dark tint here */}
            <div className="absolute inset-0 bg-black/60 pointer-events-auto"></div>
            
            <div className="relative max-w-xl w-full bg-[var(--color-card-dark)] p-8 sm:p-12 rounded-3xl shadow-2xl border border-[var(--color-card-border)] overflow-hidden pointer-events-auto">
                {/* Background elements */}
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="text-center mb-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-teal-500/20 border border-indigo-500/30 mb-6 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                        <Lock className="h-8 w-8 text-indigo-400" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                        Unlock Your Dashboard
                    </h2>
                    <p className="text-[var(--color-text-muted)] text-lg">
                        Your Schoology data has been successfully imported. Subscribe to access your dashboard, daily outlooks, and instant alerts.
                    </p>
                </div>

                <div className="bg-[#10141f]/80 backdrop-blur-md rounded-2xl border border-[var(--color-card-border)] p-6 sm:p-8 mb-8 relative z-10">
                    <div className="flex justify-between items-start mb-6 border-b border-gray-800 pb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Pro Plan</h3>
                            <p className="text-sm text-teal-400 font-medium">Includes 1 student</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-extrabold text-white">7 Days Free</span>
                            <p className="text-sm text-gray-400 mt-1">then $9.99/mo</p>
                            <p className="text-xs text-[var(--color-text-muted)] mt-1">+$4.99/mo per additional student</p>
                        </div>
                    </div>
                    <ul className="space-y-4">
                        {[
                            'Full Access to Academic Dashboard',
                            'Daily Academic Outlooks',
                            'Overdue Assignment Alerts',
                            'Grade Fluctuation Tracking'
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                                <span className="text-sm font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={handleSubscribe}
                    disabled={loading || !userId}
                    className="relative z-10 w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-500 hover:to-teal-400 text-white font-bold text-lg rounded-xl transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 flex justify-center items-center"
                >
                    {loading ? (
                        <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        "Start 7-Day Free Trial"
                    )}
                </button>

                <p className="relative z-10 text-center text-xs text-gray-500 mt-6 flex items-center justify-center gap-1 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure checkout powered by Stripe
                </p>
            </div>
        </div>
    );
}
