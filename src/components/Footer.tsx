'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
          
          {/* Brand Column - Takes 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-green-600">WellnessZ Experts</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              India&apos;s most trusted wellness ecosystem connecting clients with verified professionals. Your journey to holistic wellness starts here.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:support@wellnesszexperts.com" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                  support@wellnesszexperts.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+917888624347" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                  +91 7888624347
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  Noida Sector 62, Noida, New Delhi
                </span>
              </div>
            </div>
          </motion.div>

          {/* For Clients Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-green-600 mb-4">For Clients</h4>
            <ul className="space-y-3">
              {[
                'Find Dieticians',
                'Browse Gyms',
                'Healthy Kitchens',
                'Book Sessions',
                'Success Stories'
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* For Experts Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-green-600 mb-4">For Experts</h4>
            <ul className="space-y-3">
              {[
                'Get Branded App',
                'Marketing Tools',
                'Join Network',
                'Collaboration Services',
                'Pricing Plans'
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-green-600 mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Mission',
                'Careers',
                'Contact Us',
                'Press Kit'
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-green-600 mb-4">Support</h4>
            <ul className="space-y-3">
              {[
                'Help Centre',
                'FAQ\'s',
                'Privacy Policy',
                'Terms of Service',
                'Refund Policy'
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </motion.li>
                ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              <p>Designed for <span className="font-medium"> Transformation, built for you. </span></p>
            </div>
            
            <div className="text-sm text-gray-600 text-center md:text-right">
              <p>Copyright © 2025 WellnessZ Expert . Mohi Lifestyle Solution Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}