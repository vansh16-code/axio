'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface Trainer {
  id: number;
  name: string;
  experience: string;
  level: string;
  specializations: string[];
  image?: string;
}

const trainersData: Trainer[] = [
  {
    id: 1,
    name: "Emily Johnson",
    experience: "10+ years",
    level: "All Levels",
    specializations: ["Hatha Yoga", "Vinyasa Flow"],
    image: "/c11.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    experience: "8+ years",
    level: "All Levels",
    specializations: ["Power Yoga", "Meditation"],
    image: "/c22.png",
  },
  {
    id: 3,
    name: "Sarah Williams",
    experience: "12+ years",
    level: "All Levels",
    specializations: ["Yin Yoga", "Breathwork"],
    image: "/c33.png",
  },
  {
    id: 4,
    name: "David Rodriguez",
    experience: "15+ years",
    level: "All Levels",
    specializations: ["Ashtanga", "Philosophy"],
    image: "/c44.png",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    experience: "6+ years",
    level: "All Levels",
    specializations: ["Hot Yoga", "Alignment"],
    image: "/c11.png",
  },
  {
    id: 6,
    name: "James Park",
    experience: "9+ years",
    level: "All Levels",
    specializations: ["Kundalini", "Chanting"],
    image: "/c22.png",
  },
];


const duplicatedTrainers = [...trainersData, ...trainersData];

export default function TrainersSection() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Start the marquee animation
  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({ 
        x: "-50%", 
        transition: { 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        } 
      });
    };
    
    startAnimation();
  }, [controls]);

  // Pause/resume animation on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    // Resume animation from current position
    controls.start({ 
      x: "-50%", 
      transition: { 
        duration: 30, 
        repeat: Infinity, 
        ease: "linear",
        repeatType: "loop"
      } 
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Trainers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet Our Expert Trainers
            </h2>
          </motion.div>
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <div 
            className="whitespace-nowrap py-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              animate={controls}
              className="inline-flex space-x-6"
              initial={{ x: 0 }}
            >
              {duplicatedTrainers.map((trainer, index) => (
                <motion.div
                  key={`${trainer.id}-${Math.floor(index / trainersData.length)}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 w-72 flex-shrink-0"
                  whileHover={{ y: -5 }}
                >
                  {/* Trainer Image */}
                  <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 relative overflow-hidden">
                    {trainer.image ? (
                      <Image
                        src={trainer.image}
                        alt={`${trainer.name} - Yoga Trainer`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-sm">Photo</span>
                      </div>
                    )}
                    
                    {/* Specialization Tags */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {trainer.specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trainer Info */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">{trainer.name}</h3>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Experience:</span>
                        <span className="text-sm font-medium text-gray-900">{trainer.experience}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Level:</span>
                        <span className="text-sm font-medium text-gray-900">{trainer.level}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pause/Play indicator */}
          {isPaused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700 font-medium shadow-sm"
            >
              Paused
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}