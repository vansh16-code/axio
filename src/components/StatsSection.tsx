'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  const items = [
    { icon: '🥗', label: 'Dietician' },
    { icon: '🏋️', label: 'Gym' },
    { icon: '🍳', label: 'Kitchen' },
    { icon: '🧘', label: 'Sessions' },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative mx-auto w-full max-w-5xl rounded-3xl border border-axio-gray/40 bg-white/5 backdrop-blur-md p-6 md:p-8"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-axio-green/20 text-2xl">
                    <span className="select-none">{item.icon}</span>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-axio-dark text-white text-sm md:text-base font-medium border border-axio-gray/40 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
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