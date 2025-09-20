'use client';

import { motion } from 'framer-motion';
import CounterAnimation from './CounterAnimation';

export default function StatsSection() {
  const stats = [
    {
      number: 15,
      unit: 'mn +',
      label: 'Customers Served',
    },
    {
      number: 10,
      unit: 'mn +',
      label: 'Credit Customers',
    },
    {
      number: 3000,
      unit: '+',
      label: 'Merchants Enabled',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-axio-dark p-8 rounded-3xl text-center border border-axio-gray/50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-5xl font-bold text-axio-green mb-2">
                <CounterAnimation end={stat.number} />
                <span className="text-4xl">{stat.unit}</span>
              </h3>
              <p className="text-lg text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}