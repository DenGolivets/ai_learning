import Link from "next/link";
import { footerLinks } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
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
            <p className="mt-4 text-gray-400 max-w-xs">
              Transform your career with cutting-edge AI skills. Learn from
              industry experts.
            </p>
            <div className="flex space-x-5 mt-6">
              {["Twitter", "Facebook", "Instagram", "LinkedIn", "YouTube"].map(
                (social) => (
                  <Link
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 bg-gray-700 rounded-full flex items-center justify-center">
                      {social[0]}
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-gray-300 tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row md:justify-between">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} AILearn. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
