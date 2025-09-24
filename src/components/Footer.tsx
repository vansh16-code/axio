'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-6 md:py-8">
      {/* Decorative element */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-axio-green to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <Image
                src="/WE High Quality White JPG.jpg"
                alt="WellnessZ Experts Logo"
                width={150}
                height={50}
                className="h-auto w-36 object-contain"
                priority
              />
            </div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Connecting Dieticians, Gyms, Trainers, and Kitchens under one platform.
              Designed for transformation, built for you.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-axio-green mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-gray-600 hover:text-axio-green transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-axio-green mb-3">Our Services</h4>
            <ul className="space-y-2">
              {['Dietician', 'Gym', 'Kitchen', 'Wellness Sessions'].map((item) => (
                <motion.li key={item} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-axio-green transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-axio-green mb-3">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <a href="mailto:support@wellnesszexperts.com" className="hover:text-axio-green transition-colors text-sm">
                  support@wellnesszexperts.com
                </a>
              </li>
              <li className="text-gray-600">
                <a href="https://wa.me/917888624347" className="hover:text-axio-green transition-colors text-sm">
                  +91 78886 24347
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
              <motion.a
                href="/faq"
                className="text-xs text-gray-600 hover:text-axio-green transition-colors"
                whileHover={{ y: -1 }}
              >
                FAQ
              </motion.a>
              <motion.a
                href="/terms"
                className="text-xs text-gray-600 hover:text-axio-green transition-colors"
                whileHover={{ y: -1 }}
              >
                Terms & Conditions
              </motion.a>
              <motion.a
                href="/privacy-policy"
                className="text-xs text-gray-600 hover:text-axio-green transition-colors"
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
            </div>
            
            <div className="text-center md:text-right text-xs text-gray-600">
              <p>© 2025 WellnessZ Experts. All rights reserved.</p>
              <p className="mt-1">Mohi Lifestile Solutions Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
