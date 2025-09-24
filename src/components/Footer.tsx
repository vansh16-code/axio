'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-xl font-semibold">📞 Still Have Questions?</h3>
            <p className="text-gray-700">
              📧 Email us at:{" "}
              <a
                href="mailto:support@wellnessz.in"
                className="text-blue-600 hover:underline"
              >
                support@wellnesszexperts.com
              </a>
            </p>
            <p className="text-gray-700">
              💬 WhatsApp Support:{" "}
              <a
                href="https://wa.me/917888624347"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                +91 78886 24347
              </a>
            </p>
            <div className="flex gap-6 text-gray-600">
              <a href="/faq" className="hover:text-black">💡 FAQ</a>
              <a href="/terms" className="hover:text-black">Terms</a>
              <a href="/privacy-policy" className="hover:text-black">Privacy Policy</a>
            </div>
          </motion.div>

          {/* Right Side - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-right space-y-3 flex flex-col items-end"
          >
            <p className="text-sm text-gray-600">© 2025 WellnessZ Experts</p>
            <p className="text-sm text-gray-600">Mohi Lifestile Solutions Pvt. Ltd.</p>
            <p className="text-sm text-gray-500 italic">
              Designed for transformation, built for you.
            </p>
            <div className="mt-2 bg-axio-dark/90 rounded-xl p-3 border border-axio-gray/40">
              <Image
                src="/WE High Quality White JPG.jpg"
                alt="WE Logo"
                width={960}
                height={320}
                className="h-28 w-auto md:h-36 lg:h-40"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
