"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Github } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold">EduMaster</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comprehensive exam preparation platform for SSC, Railway, and Banking aspirants.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/edumaster.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/edumaster_live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 dark:text-gray-400"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/edumaster.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 dark:text-gray-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Exam Categories */}
          <div>
            <h3 className="text-sm font-semibold">Exam Categories</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/ssc" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  SSC Exams
                </Link>
              </li>
              <li>
                <Link href="/railway" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  Railway Exams
                </Link>
              </li>
              <li>
                <Link href="/banking" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  Banking Exams
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                  Study Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:patelabhay550@gmail.com"
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  patelabhay550@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/edumaster-live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              © {year} EduMaster. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}