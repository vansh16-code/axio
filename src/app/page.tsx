import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialSection from '@/components/TestimonialSection';
// import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <Hero />
        <SectionWrapper delay={0.1}>
          <StatsSection />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <ServicesSection />
        </SectionWrapper>
        <SectionWrapper delay={0.3}>
          <TestimonialSection />
        </SectionWrapper>
        {/* <SectionWrapper delay={0.4}>
          <BlogSection />
        </SectionWrapper> */}
        <SectionWrapper delay={0.5}>
          <Footer />
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}
