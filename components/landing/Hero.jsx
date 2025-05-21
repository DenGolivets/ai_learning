'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="relative pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 h-[38rem] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              <span className="block">Master AI with</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert-Led Courses</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Transform your career with cutting-edge skills in artificial intelligence, machine learning, and data science. Learn from industry experts at your own pace.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg h-14 px-8"
                asChild
              >
                <Link href="/workspace">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 text-lg h-14 px-8"
                asChild
              >
                <Link href="/workspace/explore">
                  Browse Courses
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Image 
                    key={i}
                    src={`https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100`} 
                    alt="Student avatar"
                    width={60}
                    height={60}
                    className="inline-block size-9 rounded-full ring-2 ring-white dark:ring-gray-800"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Join over <span className="text-blue-600 dark:text-blue-400 font-bold">10,000+</span> learners
                </p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative lg:h-[450px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <Image
                src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="AI Learning"
                width={600}
                height={450}
                className="relative rounded-xl shadow-2xl object-cover object-center w-full h-full"
              />
              
              <div className="absolute -bottom-5 -left-5 sm:bottom-5 sm:left-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-4 border border-gray-100 dark:border-gray-700">
                <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Project-Based Learning</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Build real-world AI applications</p>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 sm:top-5 sm:right-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-4 border border-gray-100 dark:border-gray-700">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Learn at Your Own Pace</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">24/7 access to all courses</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Trusted by section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-center text-xl font-medium text-gray-500 dark:text-gray-400">
            Trusted by leading companies worldwide
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'IBM', 'Apple'].map((company) => (
              <div key={company} className="flex justify-center">
                <p className="text-gray-400 dark:text-gray-500 font-bold text-xl">{company}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}