"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { URLS } from "@/constants/urls";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  isScrollingDown?: boolean;
  currentPage?: string;
};

export const Header = ({ isScrollingDown = false, currentPage }: HeaderProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      data-testid="header"
      className={`sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm transition-transform duration-300 will-change-transform ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href={URLS.routes.homepage} className="flex items-center" data-testid="header-logo">
            <Image
              src="/images/image1.png"
              alt="Alessandra Krick Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6" data-testid="desktop-nav">
            <Link
              href={URLS.routes.homepage}
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                currentPage === "homepage" ? "font-medium" : ""
              }`}
              data-testid="nav-home"
            >
              Home
            </Link>
            <Link
              href={URLS.routes.about}
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                currentPage === "about" ? "font-medium" : ""
              }`}
              data-testid="nav-about"
            >
              About
            </Link>
            <Link
              href={URLS.routes.productManagement}
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                currentPage === "product-management" ? "font-medium" : ""
              }`}
              data-testid="nav-product-management"
            >
              Product Management
            </Link>
            <Link
              href={URLS.routes.graphicDesign}
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                currentPage === "graphic-design" ? "font-medium" : ""
              }`}
              data-testid="nav-graphic-design"
            >
              Graphic Design
            </Link>
            <Link
              href={URLS.routes.sushitime}
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                currentPage === "sushitime" ? "font-medium" : ""
              }`}
              data-testid="nav-sushitime"
            >
              SushiTime
            </Link>
            <a
              href={URLS.community}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              data-testid="nav-community"
            >
              Community
            </a>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
              data-testid="mobile-menu-button"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 mt-4 py-2 border-t border-gray-200 dark:border-gray-800" data-testid="mobile-menu">
            <Link
              href={URLS.routes.homepage}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Home
            </Link>
            <Link
              href={URLS.routes.about}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              About
            </Link>
            <Link
              href={URLS.routes.productManagement}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Product Management
            </Link>
            <Link
              href={URLS.routes.graphicDesign}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Graphic Design
            </Link>
            <Link
              href={URLS.routes.sushitime}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              SushiTime
            </Link>
            <a
              href={URLS.community}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Community
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

