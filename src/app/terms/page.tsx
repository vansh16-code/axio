'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="min-h-screen pt-28 md:pt-32 pb-6">
        <div className="w-full px-4">
          <div className="relative mx-auto w-full rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms <span className="text-axio-green">& Disclaimer</span>
            </h1>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-axio-green/40 to-transparent mb-8" />
            <div className="max-w-none text-gray-600">
              <ul className="list-disc list-inside space-y-4 text-base md:text-lg leading-relaxed">
                <li>
                  By signing up with WellnessZ Experts, you agree to our standard onboarding fees and revenue-sharing
                  model based on your selected category (Dietician, Gym, Session, or Kitchen).
                </li>
                <li>
                  All pricing and commission structures are clearly defined and may be updated from time to time with
                  prior notice.
                </li>
                <li>
                  The platform provides digital tools and marketing support, but business results (like leads,
                  conversions, and revenue growth) may vary depending on individual effort and market conditions.
                </li>
                <li>
                  Coaches and service providers are responsible for the accuracy of their content, plans, and services
                  delivered to clients through the platform.
                </li>
                <li>
                  WellnessZ Experts ensures data privacy and secure login for both coaches and clients, but users are
                  expected to maintain the confidentiality of their accounts.
                </li>
                <li>
                  By using the platform, you accept that progress statistics (like BMI, body age, etc.) are for guidance
                  only and not 100% medically accurate.
                </li>
                <li>
                  Collaboration and partnership services are subject to separate agreements and commission models as
                  communicated during onboarding.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


