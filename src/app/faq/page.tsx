'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: 'What is axio?',
            answer: 'axio is a comprehensive fintech platform that provides smart financial solutions including personal finance management, pay later options, and secure mobile banking. Our platform uses advanced technology to make financial services accessible, secure, and user-friendly.'
        },
        {
            question: 'Is axio safe to use?',
            answer: 'Absolutely. We implement bank-level security measures including 256-bit SSL encryption, multi-factor authentication, and advanced fraud detection systems. Your data is protected by the same security standards used by major financial institutions.'
        },
        {
            question: 'What services does axio provide?',
            answer: 'axio offers Personal Finance Management tools, Buy Now Pay Later options, expense tracking, budgeting features, and exclusive loan opportunities. We provide a comprehensive suite of financial services designed to simplify your money management.'
        },
        {
            question: 'Is axio a registered financial institution?',
            answer: 'Yes, axio (formerly known as Capital Float, Walnut & Walnut 369) is the brand name of Capital Float Financial Services Private Limited, an NBFC registered with the RBI.'
        },
        {
            question: 'What does axio mean?',
            answer: 'axio represents our commitment to making financial services accessible and worthy for everyone. The name reflects our mission to provide reliable, trustworthy financial solutions that empower individuals to achieve their financial goals.'
        }
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
                        <div className="faq-grid">
                            {/* Left side - Text content */}
                            <div className="flex-left faq">
                                <div className="hero_content">
                                    <h1 className="heading-style-h1">
                                        Have Questions?
                                    </h1>
                                    <h2 className="heading-style-h1 text-color-green">
                                        axio has answers
                                    </h2>
                                    <p className="text-color-grey">
                                        {"Get the answers you need about axio's services and solutions"}

                                    </p>

                                    <div className="spacer-small"></div>

                                    <div className="button-wrapper left">
                                        <a href="#faq-section" className="button is-icon">
                                            Go to FAQs
                                            <div className="icon-1x1-small">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - FAQ List */}
                            <div className="home-faq-wrapper" id="faq-section">
                                <div className="faq-main-wrapper">
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
                                                            transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                            transition: 'transform 0.3s ease'
                                                        }}
                                                    >
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div
                                                className={`home-faq-answer js-accordion-body ${openFAQ === index ? 'active' : ''}`}
                                                style={{
                                                    height: openFAQ === index ? 'auto' : '0',
                                                    overflow: openFAQ === index ? 'visible' : 'hidden',
                                                    paddingTop: openFAQ === index ? '1rem' : '0',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <p className="text-color-grey">
                                                    {faq.answer}
                                                </p>
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