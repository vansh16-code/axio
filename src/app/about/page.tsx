import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import SectionWrapper from '@/components/SectionWrapper';

export default function About() {
  return (
    <PageTransition>
      <main className="bg-background">
        <Navbar />
        
        <SectionWrapper>
          <section className="min-h-screen pt-24 pb-16">
            <div className="w-full px-4">
              <div className="relative mx-auto w-full rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-500">
                      About WellnessZ Experts
                    </h1>
                    
                    <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                      WellnessZ Experts is a comprehensive platform for dieticians, gyms, wellness sessions, and kitchen services — designed to help wellness professionals build their brand, attract clients, and grow revenue.
                    </p>
                    
                    <p className="text-lg mb-4 text-gray-700">
                      With WellnessZ Experts, you get:
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">*</span>
                        <span className="text-gray-700"><strong className="text-gray-900">Branded Identity</strong> – Launch your services under the WellnessZ Experts umbrella with your own professional branding and app.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">*</span>
                        <span className="text-gray-700"><strong className="text-gray-900">Marketing & Leads</strong> – Dedicated campaigns, social media exposure, and client listings to boost your visibility.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">*</span>
                        <span className="text-gray-700"><strong className="text-gray-900">Partnership & Collaboration</strong> – Work with gyms, dieticians, kitchens, and product affiliates to expand your offerings.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">*</span>
                        <span className="text-gray-700"><strong className="text-gray-900">Integrated Digital Platform</strong> – Manage clients, appointments, sessions, and meals effortlessly through a single system.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">*</span>
                        <span className="text-gray-700"><strong className="text-gray-900">Revenue & Pricing Flexibility</strong> – Clear revenue-sharing models and pricing options, designed to maximize your earnings.</span>
                      </li>
                    </ul>
                    
                    <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                      Whether you&#39;re a dietician, gym owner, fitness instructor, or kitchen service, WellnessZ Experts give you the tools, exposure, and support to scale your wellness business efficiently.
                    </p>
                    
                    <p className="text-xl font-semibold text-green-500">
                      Your Expertise, Our Platform, Unlimited Potential.
                    </p>
                  </div>
                  
                  
                  <div className="relative flex justify-center items-center bg-gray-50">
                    <Image
                      src="/WE High Quality White JPG.jpg"
                      alt="WellnessZ Experts"
                      width={600}
                      height={600}
                      className="object-contain p-6 md:p-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionWrapper>

        <SectionWrapper delay={0.3}>
          <Footer />
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}