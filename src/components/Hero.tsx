'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-900 min-h-screen relative overflow-hidden pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-10 lg:py-0">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                India&apos;s #1 Wellness Platform • WellnessZ
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"
            >
              Transform Your <br />
              <span className="text-green-600">Wellness Journey</span> <br />
              Forever
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
            >
              India&apos;s most trusted wellness ecosystem connecting{' '}
              <span className="text-green-600 font-semibold">4,000+ verified experts</span>{' '}
              - dieticians, trainers, gyms, and kitchens—all in one platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Start your journey
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-100 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-200 transition-colors"
              >
                Join as Expert
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-12 mt-12"
            >
              {/* Avatar Group */}
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-white"></div>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-semibold text-gray-900">4K+</div>
                  <div className="text-xs text-gray-600">Lives Transformed</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 space-y-2"
            >
              <div className="text-gray-900 font-medium">
                • Takes 60 seconds • No credit card needed
              </div>
              <div className="text-gray-900 font-medium">
                • Free consultation included
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl h-[500px] grid grid-cols-2 gap-6">
              
              {/* Top Large Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="col-span-2 h-52 bg-green-200 rounded-3xl shadow-lg"
              />

              {/* Middle Left Box */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="h-44 bg-green-300 rounded-3xl shadow-lg relative"
              >
                {/* Text Card Overlapping */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute left-1/2 -translate-x-1/2 translate-y-12 bg-white rounded-2xl shadow-xl p-6 w-64"
                >
                  <h3 className="text-gray-900 font-bold text-lg leading-tight mb-4">
                    Explore deeply. Choose confidently. Transform joyfully.
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-900 font-semibold text-sm">4.9/5</span>
                    <span className="text-gray-500 text-sm">from 2,500+ reviews</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Right Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="h-36 bg-green-400 rounded-3xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
