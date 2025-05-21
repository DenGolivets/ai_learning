'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricing } from '@/lib/constants';
import Link from 'next/link';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Choose the plan thats right for you
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            All plans include unlimited access to our community and basic support.
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative flex items-center p-1 rounded-full bg-gray-100 dark:bg-gray-800">
            <button
              type="button"
              className={`${
                !annual ? 'bg-white dark:bg-gray-700 shadow-sm' : 'bg-transparent'
              } relative w-32 rounded-full py-2 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap focus:outline-none focus:z-10 sm:w-40`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`${
                annual ? 'bg-white dark:bg-gray-700 shadow-sm' : 'bg-transparent'
              } relative ml-0.5 w-32 rounded-full py-2 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap focus:outline-none focus:z-10 sm:w-40`}
              onClick={() => setAnnual(true)}
            >
              Annual
              <span className="absolute -top-2 -right-12 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-800/30 dark:text-green-500">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`rounded-lg shadow-lg overflow-hidden border ${
                plan.featured 
                  ? 'bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200 dark:from-blue-900/40 dark:to-blue-900/20 dark:border-blue-800'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {plan.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <p className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">
                      {annual ? '/year' : '/month'}
                    </span>
                  </p>
                </div>
                <Button 
                  className={`mt-8 w-full h-12 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      : 'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  }`}
                  asChild
                >
                  <Link href="/workspace/billing">
                    {plan.buttonText}
                  </Link>
                </Button>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                      <span className="ml-3 text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}