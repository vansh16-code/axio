'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const items = [
    { icon: '🥗', label: 'Dietician' },
    { icon: '🏋️', label: 'Gym' },
    { icon: '🍳', label: 'Kitchen' },
    { icon: '🧘', label: 'Sessions' },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#0b1f16',
        backgroundImage: 'linear-gradient(180deg, #0b1f16 0%, #0a0f0a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Radial green glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-axio-green/20 blur-3xl" />
        </div>
        <motion.div
          className="relative mx-auto w-full max-w-5xl rounded-3xl border border-axio-green/40 bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-[0_0_60px_rgba(34,197,94,0.15)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="hidden md:block absolute top-1/2 left-6 right-6 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-axio-green/50 to-transparent" />

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative z-10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-axio-green/30 text-2xl">
                    <span className="select-none">{item.icon}</span>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-axio-green text-white text-sm md:text-base font-semibold ring-1 ring-axio-green/60 shadow-md transition-transform duration-200 ease-out hover:scale-105">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section separator */}
        <div className="mt-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-axio-green/50 to-transparent" />
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-axio-green/70" />
        </div>
      </div>
    </section>
  );
}