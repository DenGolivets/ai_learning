'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { features } from '@/lib/constants';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to master AI
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our comprehensive platform provides all the tools, resources, and support you need to become an AI expert.
          </motion.p>
        </div>

        <div className="mt-20" ref={ref}>
          <motion.div 
            className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3 gap-x-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.name}
                className="relative"
                variants={itemVariants}
              >
                <div className="relative h-52 w-full overflow-hidden rounded-lg">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/10" />
                </div>
                <div className="relative mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}