"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserCircle, ArrowRight } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { updateProfile, onAuthStateChanged } from 'firebase/auth';

export default function SetupProfile() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                router.push('/login');
            }
        });
        return () => unsubscribe();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !fullName.trim()) return;
        
        setLoading(true);
        try {
            await updateProfile(user, { displayName: fullName.trim() });
            router.push('/connect');
        } catch (error) {
            console.error("Failed to update profile:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-dark)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-md w-full bg-[var(--color-card-dark)] p-10 rounded-2xl shadow-2xl border border-[var(--color-card-border)] relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/30 mb-6">
                        <UserCircle className="h-8 w-8 text-teal-400" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                        Welcome to Gravio
                    </h2>
                    <p className="mt-3 text-[var(--color-text-muted)] text-sm">
                        What name should we use for your Parent Account?
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="sr-only" htmlFor="full-name">Full Name</label>
                        <input
                            id="full-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="appearance-none rounded-xl relative block w-full px-4 py-4 border border-[var(--color-card-border)] bg-[#10141f] placeholder-[var(--color-text-muted)] text-white text-lg text-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                            placeholder="e.g. Sarah Johnson"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={loading || !fullName.trim()}
                        className="group relative w-full flex justify-center items-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 disabled:opacity-50"
                    >
                        {loading ? 'Saving...' : 'Continue'}
                        {!loading && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                </form>
            </div>
        </div>
    );
}
