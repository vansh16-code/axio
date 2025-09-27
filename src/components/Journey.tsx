'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ImagePlaceholder {
  src: string;
  alt: string;
}

interface PathCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  mainImage: ImagePlaceholder;
  thumbnailImages: ImagePlaceholder[];
}

const PathCard: React.FC<PathCardProps> = ({
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonHref,
  mainImage,
  thumbnailImages
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header */}
      <div className="mb-6">
        <span className="text-sm font-medium text-gray-600 mb-2 block">
          {subtitle}
        </span>
        <h3 className="text-2xl font-bold text-green-600 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Images */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 mb-4">
          {/* Main large image */}
          <div className="flex-1 min-w-[200px]">
            <div className="bg-gray-100 rounded-2xl h-40 relative overflow-hidden">
              {mainImage.src ? (
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">Main Image</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Bottom row thumbnail images */}
        <div className="flex gap-3">
          {thumbnailImages.map((image, index) => (
            <div key={index} className="flex-1">
              <div className="bg-gray-100 rounded-xl h-16 relative overflow-hidden">
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Image</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.a
        href={buttonHref}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="inline-flex items-center text-gray-900 font-medium hover:text-green-600 transition-colors duration-200 group"
      >
        {buttonText}
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </motion.a>
    </motion.div>
  );
};

export default function WellnessJourneySection() {
  const pathsData = [
    {
      title: "Find Your Perfect Expert",
      subtitle: "For Wellness Seekers",
      description: "Discover verified wellness professionals who match your goals and preferences.",
      features: [
        "Browse 3000+ verified experts",
        "Read authentic reviews & ratings",
        "Book sessions instantly",
        "Track your progress"
      ],
      buttonText: "Find your Expert",
      buttonHref: "/find-expert",
      mainImage: {
        src: "", // Add your image path here
        alt: "Find wellness experts"
      },
      thumbnailImages: [
        {
          src: "", // Add your image path here
          alt: "Expert profile 1"
        },
        {
          src: "", // Add your image path here
          alt: "Expert profile 2"
        }
      ]
    },
    {
      title: "Get Your Branded App & Leads",
      subtitle: "For Wellness Experts",
      description: "Transform your expertise into a thriving business with our complete toolkit.",
      features: [
        "Get your branded mobile app",
        "Access marketing tools & leads",
        "Join expert partnership network",
        "Scale with collaboration services"
      ],
      buttonText: "Become an Expert",
      buttonHref: "/become-expert",
      mainImage: {
        src: "", // Add your image path here
        alt: "Branded wellness app"
      },
      thumbnailImages: [
        {
          src: "", // Add your image path here
          alt: "Mobile app preview 1"
        },
        {
          src: "", // Add your image path here
          alt: "Mobile app preview 2"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="lg:max-w-xl">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Choose Your Path
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-green-600 leading-tight">
                Your Wellness Journey Starts Here
              </h2>
            </div>
            <div className="lg:max-w-md">
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you&apos;re seeking wellness transformation or ready to share your expertise, we have the perfect path for you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Path Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {pathsData.map((path, index) => (
            <PathCard
              key={index}
              title={path.title}
              subtitle={path.subtitle}
              description={path.description}
              features={path.features}
              buttonText={path.buttonText}
              buttonHref={path.buttonHref}
              mainImage={path.mainImage}
              thumbnailImages={path.thumbnailImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
}