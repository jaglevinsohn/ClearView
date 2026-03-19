const steps = [
  { number: 1, title: "Make an account", description: "Create your Gravio account to get started." },
  { number: 2, title: "Install the extension", description: "Install the Gravio browser extension so it can securely connect to your Schoology session." },
  { number: 3, title: "Sync grades", description: "Open Schoology, connect through the extension, and Gravio will pull in your grades, assignments, and daily summary." }
];

export default function StepsSection() {
    return (
        <section id="steps-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">How Gravio Works</h2>
                <p className="text-[var(--color-text-muted)] text-lg">Setup takes less than a minute.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <div key={step.number} className="relative bg-[var(--color-card-dark)] border border-[var(--color-card-border)] p-8 rounded-2xl shadow-lg flex flex-col group hover:border-[var(--color-brand)] transition-colors">
                        <div className="text-5xl font-extrabold text-teal-500/10 absolute top-6 right-6 select-none transition-colors group-hover:text-teal-500/20">
                            {step.number}
                        </div>
                        <div className="text-teal-500 font-bold text-xl mb-4">Step {step.number}</div>
                        <div className="mt-2">
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed relative z-10">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
