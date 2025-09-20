'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center pt-40 relative overflow-hidden" 
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage: `url('https://cdn.prod.website-files.com/67efed6ce5cf32249dadb268/67f37dec1a9b76997160d1ed_Vector.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Main Heading */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <div>
                <motion.span
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  Shop easy.
                </motion.span>
                <motion.span
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  Track spends.
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  Pay Later.
                </motion.span>
              </div>
              <div>
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                >
                  with{' '}
                </motion.span>
                <motion.span 
                  className="axio-green"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  axio
                </motion.span>
                <motion.span 
                  className="axio-green text-5xl md:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                >
                  {' ›'}
                </motion.span>
              </div>
            </h1>
          </motion.div>

          {/* Download Button */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download the app
              <span className="ml-2">›</span>
            </motion.button>
          </motion.div>

          {/* Phone Images */}
          <motion.div 
            className="flex justify-center items-start space-x-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Image
                src="/681996333d0c61ba50988f86_2 (1).webp"
                alt="Money Manager"
                width={250}
                height={450}
                className="rounded-3xl"
              />
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Image
                src="/6819961a8e487275b2cc7200_iPhone-16-Pro.webp"
                alt="Amazon Pay Later"
                width={250}
                height={500}
                className="rounded-3xl"
              />
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Image
                src="/6819961a11cefccd81f41e85_Black-Titanium.webp"
                alt="Axio App"
                width={250}
                height={450}
                className="rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        />
      </div>
    </section>
  );
}