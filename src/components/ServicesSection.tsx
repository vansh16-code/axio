'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ServicesSection() {
  const [currentCard, setCurrentCard] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Personal Finance Manager",
      subtitle: "Manage your money effortlessly.",
      description: "Take charge of your finances with an efficient approach that simplifies planning, monitoring, and achieving goals.",
      features: [
        { icon: "📈", text: "Track and categorize your spending with ease." },
        { icon: "⏰", text: "Set spending limits and get timely alerts." },
        { icon: "✨", text: "Receive personalized tips to boost your finances." }
      ],
      image: "/6800a3e7931d69244de4f0a9_PFM 1.webp",
      imageWidth: 384,
      imageHeight: 480
    },
    {
      title: "Shop - Buy Now, Pay Later",
      subtitle: "Enjoy now, pay later - on your terms.",
      description: "Love it? Get it now. Pay at your own pace with flexible Buy Now, Pay Later options.",
      features: [
        { icon: "⚡", text: "Get what you need instantly - no waiting." },
        { icon: "🔄", text: "Choose a repayment plan that works for you." },
        { icon: "🛍️", text: "Shop from top brands and categories with ease." }
      ],
      image: "/6800a4562b77b2171b5589a8_Pay later 1.webp",
      imageWidth: 461,
      imageHeight: 320
    },
    {
      title: "Personal Loans",
      subtitle: "Fast & easy loans for Amazon Pay Later & Xiaomi users.",
      description: "Need extra funds? Get quick, hassle-free loans with great rates, just for Amazon Pay Later & Xiaomi users.",
      features: [
        { icon: "⚡", text: "Quick approvals with minimal hassle." },
        { icon: "⏰", text: "Pick a plan that fits your needs." },
        { icon: "🛍️", text: "Enjoy competitive interest rates." }
      ],
      image: "/6800a4ea8beb2cfde50f0fd8_PL on App 1.webp",
      imageWidth: 300,
      imageHeight: 600
    }
  ];

  return (
    <div
      className="relative overflow-hidden py-20"
      style={{
        backgroundColor: '#262626',
        backgroundImage: `url('https://cdn.prod.website-files.com/67efed6ce5cf32249dadb268/67f367ab03016f9bc520c9af_Ellipse%2011550.webp')`,
        backgroundPosition: '50% 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      {/* Header Section */}
      <section className="py-10 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            3 dynamic services,
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            1 unified platform
          </motion.h1>
        </div>
      </section>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted the height of the container to be more flexible */}
        <div className="relative h-[480px] lg:h-[480px] overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              className="bg-white border-2 border-black rounded-3xl p-0 flex overflow-hidden shadow-2xl absolute w-full h-full"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Adjusted padding on the text content */}
              <div className="w-full lg:w-2/3 p-8 lg:p-12">
                <div className="space-y-4">
                  <div className="text-green-600 text-lg font-medium">
                    {services[currentCard].title}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-black">
                    {services[currentCard].subtitle}
                  </h2>
                  <p className="text-gray-600 text-base lg:text-lg">
                    {services[currentCard].description}
                  </p>
                  <div className="space-y-4">
                    {services[currentCard].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="w-6 h-6">{feature.icon}</span>
                        <span className="text-gray-700 text-sm lg:text-base">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Adjusted image container and styling */}
              <div className="w-full lg:w-1/3 flex items-center justify-center p-4 lg:p-0">
                <Image
                  src={services[currentCard].image}
                  alt={services[currentCard].title}
                  width={services[currentCard].imageWidth}
                  height={services[currentCard].imageHeight}
                  className="rounded-3xl object-contain max-h-full max-w-full"
                  style={{
                    marginBottom: '0',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '80%',
                    height: 'auto',
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* About Section */}
      <section className="py-20 bg-gray-100 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Making credit <span className="text-green-500">worthy for all</span>
          </h2>

          <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
            <div className="text-green-600 text-xl font-medium">About axio</div>

            <p>
              At axio, we empower individuals with financial freedom and confidence. Our
              mission is to simplify how you manage, borrow, and spend money through
              innovative solutions tailored to your needs.
            </p>

            <p>
              With Personal Finance Management, flexible Buy Now Pay Later options, and
              exclusive loan opportunities, axio transforms financial journeys with
              transparency, flexibility, and efficiency.
            </p>

            <p>
              By combining technology and trusted partnerships, we deliver seamless tools
              to fit your life—helping you budget smarter, shop freely, and access funds
              easily. With axio, every step brings you closer to financial success.
            </p>

            <p className="font-semibold text-black">
              We are obsessed with making credit good. For everyone.
            </p>
          </div>

          {/* WhatsApp Image - Full Width */}
          <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="w-full">
              <Image
                src="/WhatsApp Image 2025-09-20 at 18.54.15_082e2d6d.jpg"
                alt="Axio"
                width={1400}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}