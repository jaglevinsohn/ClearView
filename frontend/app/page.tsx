"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import StepsSection from '@/components/landing/StepsSection';
import DailySummarySection from '@/components/landing/DailySummarySection';
import DashboardPreviewSection from '@/components/landing/DashboardPreviewSection';
import EmbeddedSignupSection from '@/components/landing/EmbeddedSignupSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen bg-[var(--color-bg-dark)] overflow-hidden">
            <HeroSection isAuthenticated={isAuthenticated} />
            <ProblemSection />
            <StepsSection />
            <DailySummarySection />
            <DashboardPreviewSection />
            {!isAuthenticated && <EmbeddedSignupSection />}
            <Footer />
        </div>
    );
}
