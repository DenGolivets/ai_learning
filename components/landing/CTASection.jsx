'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for subscribing!');
    e.target.reset();
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to accelerate your AI journey?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of professionals who are transforming their careers with AILearn. Get early access to new courses, exclusive workshops, and special offers.
            </p>
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="sm:flex">
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  placeholder="Enter your email"
                />
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    type="submit"
                    className="bg-white text-blue-600 hover:bg-blue-50 w-full"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
              <p className="mt-3 text-sm text-blue-100">
                We value your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
          
          <div className="lg:ml-auto max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-white">Get Started Today</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Access to 50+ AI and machine learning courses',
                  'Personalized learning path tailored to your goals',
                  'Project-based curriculum with real-world applications',
                  'Live workshops with industry experts',
                  'Certificate upon completion',
                ].map((feature, index) => (
                  <li key={index} className="flex">
                    <svg className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 h-12 text-lg"
                  asChild
                >
                  <Link href="/workspace">
                    Start Learning Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}