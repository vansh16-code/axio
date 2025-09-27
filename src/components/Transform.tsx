'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#1f1f1f] text-white min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
          
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
              <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                Ready to Transform?
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Your Expertise, Our Platform, Unlimited Potential
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Join India&apos;s fastest-growing wellness ecosystem. Whether you&apos;re seeking transformation or ready to scale your expertise, your journey starts with a single click.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300"
              >
                Explore Experts
              </motion.button>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-1 text-sm text-white"
            >
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-white fill-current" />
                <span>Free to explore</span>
              </div>
              <span className="text-gray-400 mx-1">•</span>
              <span>No setup fees</span>
              <span className="text-gray-400 mx-1">•</span>
              <span>24/7 support</span>
              <span className="text-gray-400 mx-1">•</span>
              <span>Instant activation</span>
            </motion.div>

            {/* Green Separator Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.1 }}
              className="h-0.5 bg-green-400 max-w-2xl"
            />

            {/* Trust Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-gray-300 text-base"
            >
              Trusted by leading wellness professionals across India
            </motion.p>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg h-96 lg:h-[500px]">
              
              {/* Hero Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative w-full h-full bg-gray-800 rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/WE High Quality White JPG.jpg" 
                  alt="Wellness transformation journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}