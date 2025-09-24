'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ServicesSection() {
  const [currentCard, setCurrentCard] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 4); // total 4 cards
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Your Complete Wellness Toolkit, Just a Tap Away",
      subtitle: "Branded App: “Your Brand, Your App. Your Way.”",
      description:
        "Stand out with a fully branded wellness app — manage clients, deliver services, and grow your business, all under your own name.",
      features: [
        { icon: "📱", text: "Your Brand, Your App – Launch a personalized app under your own brand name." },
        { icon: "🤝", text: "Professional & Trustworthy – Give clients a dedicated digital space that reflects your expertise." },
        { icon: "📊", text: "All-in-One Management – Assign meal & workout plans, track progress, chat, and schedule appointments seamlessly." },
        { icon: "🚀", text: "Boost Visibility – Stand out from other coaches with your unique branded app." },
      ],
    },
    {
      title: "Turn Clicks into Clients, Effortlessly",
      subtitle: "Marketing",
      description:
        "Reach the right clients. Grow your business effortlessly with smart campaigns, social media, and targeted promotions.",
      features: [
        { icon: "⚡", text: "Grow Faster – Let us handle the marketing so you can focus on coaching." },
        { icon: "🎯", text: "Smart Targeting – Reach the right audience with campaigns that actually convert." },
        { icon: "🌟", text: "High-Quality Leads – Get genuine client leads delivered straight to your platform." },
        { icon: "📢", text: "Ready-to-Use Campaigns – Access pre-made creatives, posts, and strategies to save time." },
        { icon: "📈", text: "Results You Can See – Track every lead and campaign performance with easy dashboards." },
      ],
    },
    {
      title: "Collaborate, Connect, and Grow",
      subtitle: "Partnership Services",
      description:
        "Collaborate with trusted wellness partners, connect with new clients, and grow your business effortlessly through meaningful, strategic alliances.",
      features: [
        { icon: "🤝", text: "Seamless Collaborations – Partner with gyms, kitchens, and wellness providers to enhance your services." },
        { icon: "🏋️", text: "B2B2C Opportunities – Tap into new client bases through collaborative offerings." },
        { icon: "🛠️", text: "Integrated Tools – Manage all partnership services directly through your app." },
        { icon: "📢", text: "Enhanced Visibility – Get listed and promoted across multiple platforms and partner channels." },
      ],
    },
    {
      title: "Grow Your Business with Collaborative Services",
      subtitle: "Collab Services",
      description:
        "Partner with other wellness professionals and brands to offer bundled services, reach new clients, and create unique value — all while growing your revenue.",
      features: [
        { icon: "🎁", text: "Offer Bundled Services – Combine services like meal plans, sessions, and products for a seamless client experience." },
        { icon: "📈", text: "Increase Reach & Revenue – Access new client bases and generate additional income through partnerships." },
        { icon: "⚙️", text: "Easy Management – Handle all collaboration activities directly within your app." },
      ],
    },
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span
              className="block text-white whitespace-nowrap"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              Your Complete Wellness Toolkit,
            </motion.span>
            <motion.span
              className="block text-green-500"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              Just a Tap Away
            </motion.span>
          </motion.h1>
        </div>
      </section>


      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[480px] overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              className="bg-white border-2 border-black rounded-3xl p-8 flex flex-col justify-center overflow-hidden shadow-2xl absolute w-full h-full"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="w-full">
                <div className="space-y-6">
                  <div className="text-green-600 text-lg font-medium">
                    {services[currentCard].title}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-black">
                    {services[currentCard].subtitle}
                  </h2>
                  <p className="text-gray-600 text-base lg:text-lg">
                    {services[currentCard].description}
                  </p>
                  <div className="space-y-3">
                    {services[currentCard].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-xl">{feature.icon}</span>
                        <span className="text-gray-700 text-sm lg:text-base">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* About Section */}
      <section className="py-20 bg-gray-100 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            <span className="whitespace-nowrap">Empowering Wellness Professionals.</span> <br />
            <span className="text-green-500">Connecting Clients. Growing Your Business.</span>
          </h2>
          <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
            <div className="text-green-600 text-xl font-medium">About WellnessZ Experts</div>
            <p>
              WellnessZ Experts is a comprehensive platform for dieticians, gyms, wellness sessions, and
              kitchen services — designed to help wellness professionals build their brand, attract clients, and
              grow revenue.
            </p>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>
                <strong>Branded Identity –</strong> Launch your services under the WellnessZ Experts umbrella with
                your own professional branding and app.
              </li>
              <li>
                <strong>Marketing & Leads –</strong> Dedicated campaigns, social media exposure, and client listings
                to boost your visibility.
              </li>
              <li>
                <strong>Partnership & Collaboration –</strong> Work with gyms, dieticians, kitchens, and product
                affiliates to expand your offerings.
              </li>
              <li>
                <strong>Integrated Digital Platform –</strong> Manage clients, appointments, sessions, and meals
                effortlessly through a single system.
              </li>
              <li>
                <strong>Revenue & Pricing Flexibility –</strong> Clear revenue-sharing models and pricing options,
                designed to maximize your earnings.
              </li>
            </ul>
            <p>
              Whether you’re a dietician, gym owner, fitness instructor, or kitchen service, WellnessZ Experts give
              you the tools, exposure, and support to scale your wellness business efficiently.
            </p>
            <p className="font-semibold text-black">
              Your Expertise, Our Platform, Unlimited Potential.
            </p>
            {/* Media showcase (GIF or Video) */}
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-sm md:max-w-md overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                <video
                  src="/WE Logo Video High Quality.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto block bg-black"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
