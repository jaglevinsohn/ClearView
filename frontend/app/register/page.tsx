import SignupForm from '@/components/auth/SignupForm';

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-dark)] px-4 sm:px-6 lg:px-8">
            <SignupForm redirectTo="/connect" />
        </div>
    );
}
