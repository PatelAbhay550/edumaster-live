"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Book, GraduationCap, Train, Building2 } from "lucide-react";
import { MainNav } from "./navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Close menu when clicking outside
    document.addEventListener("mousedown", handleClickOutside);
    
    // Close menu when pressing escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);

    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link
            href="/"
            className="flex items-center space-x-2 pl-4"
          >
            
            <span className="font-bold text-lg">EduMaster</span>
          </Link>
        <div className="mr-4 hidden md:flex">
          <MainNav />
        </div>
        <button
            ref={buttonRef}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div>
        <div className="flex flex-1 items-center justify-between">
          
          
        </div>
      </div>
      {/* Mobile menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={cn(
          "md:hidden fixed inset-0 z-50 transform transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-gray-600/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl dark:bg-gray-900">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="overflow-y-auto bg-white dark:bg-gray-800 h-[calc(100vh-73px)] py-4">
            <div className="px-4 space-y-6">
              {/* Main Exams Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-500">Main Exams</h3>
                <div className="space-y-1">
                  <Link
                    href="/ssc"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>SSC Exams</span>
                  </Link>
                  <Link
                    href="/railway"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <Train className="h-4 w-4" />
                    <span>Railway Exams</span>
                  </Link>
                  <Link
                    href="/banking"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <Building2 className="h-4 w-4" />
                    <span>Banking Exams</span>
                  </Link>
                </div>
              </div>

              {/* Study Materials Section */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-500">Study Materials</h3>
                <div className="space-y-1">
                  <Link
                    href="/blogs/history/delhi-sultanate-mcq"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <Book className="h-4 w-4" />
                    <span>History MCQs</span>
                  </Link>
                  <Link
                    href="/blogs/english/active-passive-voice-mcq"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <Book className="h-4 w-4" />
                    <span>English Grammar</span>
                  </Link>
                  <Link
                    href="/blogs/general-knowledge/dams-in-india-mcq"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <Book className="h-4 w-4" />
                    <span>General Knowledge</span>
                  </Link>
                  <Link
                    href="/blogs/reasoning/chsl-reasoning-mcq"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <Book className="h-4 w-4" />
                    <span>Reasoning</span>
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-500">Quick Links</h3>
                <div className="space-y-1">
                  <Link
                    href="/about"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>About Us</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </header>
  );
}