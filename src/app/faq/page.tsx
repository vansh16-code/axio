'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is WellnessZ Experts?',
      answer: 'WellnessZ Experts is a web and mobile platform that helps dieticians, wellness coaches, gyms, and fitness professionals manage clients, assign personalized plans, track progress, and grow their business through branding, marketing, and partnerships.',
    },
    {
      question: 'Who can use WellnessZ Experts?',
      answer: 'The platform is designed for dieticians, fitness coaches, gyms, session instructors (Yoga, Zumba, MMA, Dance), and kitchen/meal providers who want to streamline their services and reach more clients.',
    },
    {
      question: 'Do I get my own branded app?',
      answer: 'Yes! WellnessZ Experts provides a branded app in your name so you can manage clients, deliver services, and build your own professional identity.',
    },
    {
      question: 'How does the revenue-sharing model work?',
      answer: 'We follow a transparent revenue-sharing system. Depending on your category (Dietician, Gym, Session, Kitchen), a fixed percentage of revenue is shared while you retain the rest.',
    },
    {
      question: 'Is marketing included?',
      answer: 'Yes, our team provides dedicated marketing support, including social media promotion, client leads, and listings — so you can focus on serving clients while we help you grow.',
    },
    {
      question: 'How do clients access the platform?',
      answer: 'Clients don\'t need a complex signup. They receive a direct login link from their coach and can instantly access their personalized app with secure OTP login.',
    },
    {
      question: 'Can I customize meal and workout plans for my clients?',
      answer: 'Yes! Dieticians and coaches can create, edit, and assign personalized plans. Some ready-made plans are inbuilt for convenience, and you can also add your own recipes or workouts.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use secure OTP-based login and follow strict privacy standards to ensure your data and your clients\' data remain safe.',
    },
    {
      question: 'What kind of support will I get?',
      answer: 'Our team is here to assist you with onboarding, training, and ongoing support, so you can make the most of the platform.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply choose your category (Dietician, Gym, Session, Kitchen), pay the onboarding fee, and you\'ll get access to your branded digital platform to start managing and growing your business.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="main-wrapper">
      <Navbar />

      {/* FAQ Section */}
      <section className="section-faq padding-section-large">
        <div className="padding-global">
          <div className="container-large">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
              {/* Left side - Text content */}
              <div className="flex-left faq">
                <div className="hero_content text-center md:text-left">
                  <h1 className="heading-style-h1">Have Questions?</h1>
                  <h2 className="heading-style-h1 text-color-green">
                    WellnessZ has answers
                  </h2>
                  <p className="text-color-grey">
                    Get the answers you need about WellnessZ Experts&#39; services and solutions
                  </p>

                  <div className="spacer-small"></div>

                  <div className="button-wrapper left flex justify-center md:justify-start">
                    <a href="#faq-section" className="button is-icon">
                      Go to FAQs
                      <div className="icon-1x1-small">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right side - FAQ List */}
              <div className="home-faq-wrapper" id="faq-section">
                <div className="faq-main-wrapper space-y-6 w-full">
                  {faqs.map((faq, index) => (
                    <div key={index} className="home-faq">
                      <div
                        className="home-faq-question js-accordion-trigger"
                        onClick={() => toggleFAQ(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <h3 className="heading-style-h4 text-weight-medium">
                          {faq.question}
                        </h3>
                        <div className="icon-1x1-medium">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            style={{
                              transform:
                                openFAQ === index
                                  ? 'rotate(180deg)'
                                  : 'rotate(0deg)',
                              transition: 'transform 0.3s ease',
                            }}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                      <div
                        className={`home-faq-answer js-accordion-body ${
                          openFAQ === index ? 'active' : ''
                        }`}
                        style={{
                          height: openFAQ === index ? 'auto' : '0',
                          overflow: openFAQ === index ? 'visible' : 'hidden',
                          paddingTop: openFAQ === index ? '1rem' : '0',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <p className="text-color-grey">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
