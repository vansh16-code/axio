'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      tag: "90% Experts Choose this",
      title: "Branded Application",
      description: "Get your personalized wellness app with your branding",
      features: [
        "Custom app with your logo & colors",
        "Client booking & management system",
        "Integrated payment processing",
      ],
      button: "Get my App",
      image: "/c11.png",
    },
    {
      tag: "Avg. 3x more bookings",
      title: "Marketing Boost",
      description: "Amplify your reach with our marketing ecosystem",
      features: [
        "Featured in WellnessZ marketplace",
        "Social media content templates",
        "SEO-optimized expert profiles",
      ],
      button: "Boost my Reach",
      image: "/c22.png",
    },
    {
      tag: "2,000+ active partnerships",
      title: "Partnership Services",
      description: "Connect with other wellness professionals",
      features: [
        "Cross-referral network access",
        "Collaborative program creation",
        "Revenue sharing opportunities",
      ],
      button: "Join Network",
      image: "/c33.png",
    },
    {
      tag: "Higher client retention",
      title: "Collab Services",
      description: "Build comprehensive wellness programs together",
      features: [
        "Multi-expert program design",
        "Shared client management",
        "Joint marketing campaigns",
      ],
      button: "Start Collaborating",
      image: "/c44.png",
    },
  ];

  return (
    <section className="bg-[#f4f9f4] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Expert Toolkit
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Everything You Need to <br /> Scale Your Practice
            </h2>
          </div>
          <p className="mt-6 md:mt-0 max-w-md text-gray-700 text-lg">
            From branded apps to marketing amplification—we provide the complete toolkit to transform your expertise into a thriving wellness business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex justify-between items-stretch"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Left Content */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Badge */}
                <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {service.tag}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="space-y-2 text-gray-700 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="mt-6 inline-block px-5 py-2 text-sm font-semibold border border-green-500 text-green-600 rounded-full hover:bg-green-50 transition">
                  {service.button}
                </button>
              </div>

              {/* Right Image */}
              <div className="ml-6 w-32 h-32 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
