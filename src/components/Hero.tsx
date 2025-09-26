'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gray-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-axio-green/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-axio-light-green/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-grid-white/[0.02] bg-[size:24px_24px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                Transform Your <span className="axio-green">Wellness Journey</span> Forever
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              India's most trusted wellness ecosystem connecting <span className='axio-green'>4,000+ verified experts </span>dieticians, gyms, trainers, and kitchens under one powerful platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="button is-icon bg-axio-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-axio-light-green transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>

              <motion.button
                className="border border-gray-300 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join as Expert
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold axio-green">4K+</div>
                <div className="text-gray-600 text-sm mt-1">Lives Transformed </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold axio-green">4000+</div>
                <div className="text-gray-600 text-sm mt-1">Verified Experts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold axio-green">100+</div>
                <div className="text-gray-600 text-sm mt-1">Cities Served</div>
              </div>
            </motion.div>

            {/* ✅ Bullet Points Below Stats */}
            <motion.ul
              className=" mb-20 mt-4 space-y-3 text-xl md:text-2xl text-gray-800 font-semibold list-disc list-inside text-center lg:text-left max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <li>
                Takes 60 seconds <span className="text-axio-green"> No credit Card Needed </span>.
              </li>
            </motion.ul>


          </motion.div>

          {/* Right Image + Text Below */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main App Image */}
              <motion.div
                className="relative z-20"
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/WE High Quality White JPG.jpg"
                  alt="WellnessZ Experts App"
                  width={500}
                  height={900}
                  className="rounded-3xl shadow-2xl border-8 border-white/10"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-5 -right-5 w-24 h-24 bg-axio-green rounded-full opacity-20 blur-2xl z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />

              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-axio-light-green rounded-full opacity-10 blur-3xl z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </div>

            {/* ✅ Text Below Image with Motion + Bigger Font */}
            <motion.p
              className="mt-6 text-2xl font-semibold text-gray-800 text-center max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="bg-gradient-to-r from-axio-green to-axio-light-green bg-clip-text text-transparent">
                Explore deeply
              </span>
              , Choose Confidently, Transform Joyfully.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
