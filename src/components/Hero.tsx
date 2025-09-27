'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white mt-16 md:mt-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Green Badge */}
            <motion.div
              className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              India&apos;s #1 Wellness Platform • WellnessZ
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Transform Your <br />
                <span className="text-green-600">Wellness Journey</span> <br />
                Forever
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              India&apos;s most trusted wellness ecosystem connecting{' '}
              <span className="text-green-600 font-semibold">4,000+ verified experts</span>{' '}
              - dieticians, trainers, gyms, and kitchens—all in one platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start your journey
              </motion.button>

              <motion.button
                className="bg-green-100 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join as Expert
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-12 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
              className="mt-8 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-gray-900 font-medium">
                • Takes 60 seconds • No credit card needed
              </div>
              <div className="text-gray-900 font-medium">
                • Free consultation included
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockups */}
          <motion.div
            className="relative h-[600px] w-full max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Main Phone (Center Right) - Daily Wellness Tips */}
            <motion.div
              className="absolute top-0 right-8 z-20"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-56 h-[380px] rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/midddd.png"
                  alt="Daily Wellness Tips Screen"
                  width={192}
                  height={380}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Secondary Phone (Top Left) - Connect with Experts */}
            <motion.div
              className="absolute top-12 left-0 z-30"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-48 h-[380px] rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/heromid.png"
                  alt="Connect with Experts Screen"
                  width={192}
                  height={380}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

           

            {/* Testimonial Section Below Images */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      ⭐⭐⭐⭐⭐
                    </div>
                    <span className="text-sm font-semibold text-gray-900">4.8/5</span>
                    <span className="text-xs text-gray-500">(2,340+ reviews)</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    &quot;Transformed my lifestyle completely! Lost 15kg in 6 months with personalized guidance.&quot;
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Verified User • Priya S.</span>
                  </div>
                </div>
                
                <div className="ml-4 text-right">
                  <div className="text-xs text-gray-500 mb-1">Trusted by</div>
                  <div className="font-bold text-lg text-green-600">50K+</div>
                  <div className="text-xs text-gray-600">Active Users</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}