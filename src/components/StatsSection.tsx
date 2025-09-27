'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaCheck } from 'react-icons/fa';

export default function StatsSection() {
  const items = [
    {
      image: '/c11.png',
      label: 'Cloud Kitchens',
      description: 'Healthy meal delivery from verified clean kitchens',
      features: ['Fresh ingredients', 'Diet-specific meals', 'Daily Delivery'],
    },
    {
      image: '/c22.png',
      label: 'Personal Sessions',
      description: '1-on-1 coaching sessions with wellness experts',
      features: ['Personalized Coaching', 'Flexible Scheduling', 'Video Sessions'],
    },
    {
      image: '/c33.png',
      label: 'Premium Gyms',
      description: 'State-of-the-art fitness facilities with expert trainers',
      features: ['Diet-specific meals', 'Specialized Workouts', 'Expert Trainers'],
    },
    {
      image: '/c44.png',
      label: 'Power Yoga for Strength',
      description: 'Certified nutrition experts creating personalized meal plans',
      features: ['Personalized Coaching', 'Flexible Scheduling', 'Video Sessions'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/statbg.jpg"
          alt="Background for stats section"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Wellness Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              How Our Network <br /> Works Together
            </h2>
          </div>
          <p className="mt-6 md:mt-0 max-w-md text-white/90 text-lg">
            Seamless collaboration between India&apos;s top wellness experts.
            Every connection is designed to amplify your transformation journey.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">4.9</span>
                </div>

                <p className="text-gray-600 mb-3">{item.description}</p>

                {/* Features with green tick */}
                <ul className="space-y-2 mb-4">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <FaCheck className="w-3 h-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="mt-auto bg-white border border-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10">
          <h3 className="text-lg md:text-xl text-white font-medium mb-4 md:mb-0">
            Ready to experience the power of connected wellness?
          </h3>
          <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition">
            Explore Your Network
          </button>
        </div>
      </div>
    </section>
  );
}
