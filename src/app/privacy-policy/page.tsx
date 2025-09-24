'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="min-h-screen pt-28 md:pt-32 pb-6">
        <div className="w-full px-4">
          <div className="relative mx-auto w-full rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-axio-green">Policy</span>
            </h1>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-axio-green/40 to-transparent mb-8" />
            <div className="max-w-none text-gray-600">
              <ul className="list-disc list-inside space-y-4 text-base md:text-lg leading-relaxed">
                <li>At WellnessZ Experts, your privacy is our priority.</li>
                <li>
                  We collect only the necessary information to provide services such as client management, branded apps,
                  marketing, and wellness tools.
                </li>
                <li>
                  Your personal and business data is kept secure and confidential — we never sell or misuse your
                  information.
                </li>
                <li>
                  Client statistics (BMI, weight, progress, etc.) are stored safely and are accessible only to you and
                  your assigned coach.
                </li>
                <li>
                  Any data shared for partnerships or collaborations is used strictly for service delivery and growth
                  support.
                </li>
                <li>You may request data deletion or account closure at any time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


