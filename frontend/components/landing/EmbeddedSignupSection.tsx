import SignupForm from '@/components/auth/SignupForm';

export default function EmbeddedSignupSection() {
    return (
        <section id="signup-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-10 max-w-xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Create your Gravio account</h2>
                <p className="text-lg text-[var(--color-text-muted)]">
                    You’ll install the extension and connect Schoology after signing up.
                </p>
            </div>
            
            <div className="w-full max-w-md relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur-2xl opacity-20 transform -translate-y-2"></div>
                <SignupForm redirectTo="/connect" />
            </div>
        </section>
    );
}
