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
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Main Heading */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                Your One-Stop Wellness Ecosystem
              </motion.span>
            </h1>
            <motion.p
              className="mt-4 text-2xl md:text-3xl lg:text-4xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              Connecting Dieticians, Gyms, Trainers, and Kitchens under one platform.
            </motion.p>
            <div className="mt-8 flex justify-center items-baseline">
              <div>
                <motion.span
                  className="text-white text-2xl md:text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
                >
                  with{' '}
                </motion.span>
                <motion.span
                  className="axio-green text-5xl md:text-6xl lg:text-7xl font-extrabold"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
                >
                  WZ Experts
                </motion.span>
                <motion.span
                  className="axio-green text-5xl md:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
                >
                  {' ›'}
                </motion.span>
              </div>
            </div>
          </motion.div>

        

          {/* Download Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
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

          {/* Single Center Image */}
          <motion.div
            className="flex justify-center items-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Image
                src="/final-removebg-preview.webp"
                alt="Axio Final App"
                width={450}
                height={850}
                className="rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
