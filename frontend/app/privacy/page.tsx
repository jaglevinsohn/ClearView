export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[var(--color-bg-dark)] px-6 py-12 md:px-20 text-gray-200">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="text-sm text-gray-400">Last updated: March 31, 2026</p>

                <p>
                    Welcome to Gravio. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you use our application
                    and browser extension ("Gravio Schoology Sync").
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
                <p>
                    <strong>Extension Data:</strong> The Gravio Schoology Sync extension requires
                    permissions to access specific websites, read your session cookies, and interact with the active tab. This allows the extension to retrieve academic data (such as grades and assignments) directly from Schoology on your behalf.
                </p>
                <p>
                    <strong>Account Information:</strong> When you connect your Schoology account, we securely store the necessary session information to provide ongoing synchronization with the Gravio dashboard.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>To provide, operate, and maintain the Gravio dashboard and extension features.</li>
                    <li>To synchronize your academic data and keep your assignments and grades up to date.</li>
                    <li>To improve and personalize your user experience.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Security</h2>
                <p>
                    We prioritize the security of your data. Session cookies are encrypted and handled securely. We do not sell, trade, or rent your personal information or academic data to third parties.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Permissions Usage</h2>
                <p>Our browser extension specifically uses the following permissions:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>cookies:</strong> To securely access the active Schoology session required for syncing assignments and grades to your Gravio dashboard.</li>
                    <li><strong>tabs:</strong> To detect when you are on relevant Schoology pages so the extension can operate effectively and guide you through the process.</li>
                    <li><strong>host_permissions:</strong> To allow secure, authenticated communication between the extension and the Gravio backend servers, as well as the necessary Schoology domains.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, please
                    contact us.
                </p>
            </div>
        </div>
    );
}
