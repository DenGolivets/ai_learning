"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/constants";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm dark:bg-gray-900/90"
          : "bg-transparent shadow"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="size-9"
                />
                <h1 className="font-bold text-2xl font-jaro uppercase">
                  Learning
                </h1>
              </div>
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              className="rounded-md p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button className="inline-flex items-center text-base font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 transform -translate-x-1/4 mt-3 px-2 w-screen max-w-md sm:px-0 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                                {subItem.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <Link
              href="#"
              className="text-base font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 px-4"
            >
              Log in
            </Link> */}
            <Button
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              asChild
            >
              <Link href="/workspace">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50 dark:divide-gray-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.png"
                      alt="logo"
                      width={100}
                      height={100}
                      className="size-9"
                    />
                    <h1 className="font-bold text-2xl font-jaro uppercase">
                      Learning
                    </h1>
                  </div>
                </div>
                <div className="-mr-2">
                  <Button
                    variant="ghost"
                    className="rounded-md p-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {/* <Link
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link> */}
              </div>
              <div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  asChild
                >
                  <Link href="/workspace">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
