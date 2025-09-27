'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaCheck } from 'react-icons/fa'; // FaCheck for tick marks

export default function StatsSection() {
  const items = [
    {
      image: '/c11.png',
      label: 'Expert Dietician',
      description: 'Expert nutrition guidance tailored to your health goals',
      features: [
        'Personalized meal plans',
        'Regular health tracking',
        'Diet adjustments based on goals'
      ]
    },
    {
      image: '/c22.png',
      label: 'Premium Gyms',
      description: 'State-of-the-art fitness centers with professional trainers',
      features: [
        'Flexible scheduling',
        'Personalized workout plans',
        'Group and solo sessions'
      ]
    },
    {
      image: '/c33.png',
      label: 'Cloud Kitchen',
      description: 'Healthy meal preparation and delivery services',
      features: [
        'Freshly prepared meals',
        'Customizable diet options',
        'Scheduled meal delivery'
      ]
    },
    {
      image: '/c44.png',
      label: 'Personal Sessions',
      description: 'Personalized wellness coaching and therapy',
      features: [
        'Flexible scheduling',
        'One-on-one coaching',
        'Holistic wellness approach'
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
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
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overlay text */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How Our Network Works Together
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Seamless Collaboration between India&apos;s top wellness experts. Every connection is designed to amplify your transformation journey.
          </p>
        </motion.div>

        {/* Card grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Card image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              {/* Card text area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                
                {/* 5-star rating */}
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 mr-1" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-3">{item.description}</p>

                {/* Feature points with green tick in circle */}
                <ul className="mb-4 space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <FaCheck className="w-3 h-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* View More button */}
                <button className="mt-auto bg-axio-green text-white font-semibold px-4 py-2 rounded-lg hover:bg-axio-light-green transition-colors">
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
