import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <main className="bg-background text-white">
      <Navbar />
      
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-300 mb-2">Our Vision</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                A tech-first financial platform for the next 
                <span className="text-axio-green">100 million Indian</span> customers
              </h1>
              <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center">
                Join our team
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="relative flex justify-center items-center">
              <Image
                src="/about.png"
                alt="Our Vision"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}