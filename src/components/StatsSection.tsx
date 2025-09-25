'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StatsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    { image: '/c1.png', label: 'Dietician' },
    { image: '/c2.png', label: 'Gym' },
    { image: '/c3.png', label: 'Kitchen' },
    { image: '/c4.png', label: 'Sessions' },
  ];

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section
      className="py-20 relative overflow-hidden bg-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel container - reduced maximum width */}
        <div className="relative mx-auto w-full max-w-3xl">
          <motion.div
            className="rounded-3xl border border-green-200 bg-white overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {/* Carousel images */}
            <div className="relative aspect-video w-full">
              {items.map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`absolute inset-0 flex items-center justify-center`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: index === currentIndex ? 'flex' : 'none' }}
                >
                  {/* Image container with text overlay */}
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover object-top w-full h-full"
                      priority
                    />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    {/* Text overlay */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-white text-2xl md:text-4xl font-bold">
                        {item.label}
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Progress dots REMOVED */}
          </motion.div>
          
          {/* Navigation arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-green-800 md:h-12 md:w-12 hover:bg-white shadow-md transition-colors"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-green-800 md:h-12 md:w-12 hover:bg-white shadow-md transition-colors"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Section separator */}
        <div className="mt-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-green-300 to-transparent" />
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-green-400" />
        </div>
      </div>
    </section>
  );
}