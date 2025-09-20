'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black">
            Recent blog posts
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blogs"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
            >
              Go to Blogs ›
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post - Left Side */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.article 
              className="bg-black rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-80">
                <Image
                  src="/68b95cff7fdfbbed1ae6721f_dd53af30-88fb-4d3e-b153-26d61930b30d.jpg"
                  alt="Paddling Ashore"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.article>
            
            {/* Title below the image */}
            <motion.div 
              className="px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-black mb-2">
                Paddling Ashore
              </h3>
              <div className="flex items-center text-gray-600 text-sm">
                <span>axio</span>
                <span className="mx-2">•</span>
                <span>10 mins</span>
                <span className="mx-2">•</span>
                <span>September 4, 2025</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Posts */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.article 
              className="flex items-center space-x-6 p-6 bg-yellow-400 rounded-2xl min-h-[180px]"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/blog1.jpg"
                alt="Why We Spend More Freely Around Friends"
                width={140}
                height={140}
                className="rounded-xl flex-shrink-0 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-black mb-3 text-xl leading-tight">
                  Why We Spend More Freely Around Friends – The Psychology of Social Spending
                </h3>
                <div className="text-sm text-gray-700 mb-3 font-medium">axio</div>
                <div className="flex items-center text-sm text-gray-600">
                  <span>10 mins</span>
                  <span className="mx-2">•</span>
                  <span>August 29, 2025</span>
                </div>
              </div>
            </motion.article>

            <motion.article 
              className="flex items-center space-x-6 p-6 bg-purple-500 rounded-2xl min-h-[180px]"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/blog2.jpg"
                alt="Money and Me: From Strangers to Friends"
                width={140}
                height={140}
                className="rounded-xl flex-shrink-0 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-white mb-3 text-xl leading-tight">
                  Money and Me: From Strangers to Friends
                </h3>
                <div className="text-sm text-purple-200 mb-3 font-medium">axio</div>
                <div className="flex items-center text-sm text-purple-200">
                  <span>10 mins</span>
                  <span className="mx-2">•</span>
                  <span>August 22, 2025</span>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}