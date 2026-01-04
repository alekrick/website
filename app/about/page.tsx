"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Reusable Section component with scroll-triggered animation
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white scroll-smooth overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/homepage" className="flex items-center">
              <Image
                src="/images/image1.png"
                alt="Alessandra Krick Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/homepage"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link
                href="/product-management"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Product Management
              </Link>
              <Link
                href="/graphic-design"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Graphic Design
              </Link>
              <a
                href="https://www.alessandrakrick.com/sushitime"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                SushiTime
              </a>
              <a
                href="https://www.alessandrakrick.com/community"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Community
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-4 pt-4">
                <Link
                  href="/homepage"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                >
                  About
                </Link>
                <Link
                  href="/product-management"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  Product Management
                </Link>
                <Link
                  href="/graphic-design"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  Graphic Design
                </Link>
                <a
                  href="https://www.alessandrakrick.com/sushitime"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  SushiTime
                </a>
                <a
                  href="https://www.alessandrakrick.com/community"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  Community
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <Section className="my-16 px-8 sm:px-12 lg:px-24 xl:px-32 bg-white py-12">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-0">
            {/* Text on Left - matches body text container exactly */}
            <div className="max-w-3xl text-center md:text-left w-full md:w-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                <div className="mb-4">
                  <span className="inline-block">🎨 </span>
                  <span className="font-bold">artist</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block">✈️ </span>
                  <span className="font-bold">traveler</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block">🍣 </span>
                  <span className="font-bold">sushi lover</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block">👩‍💻 </span>
                  <span className="font-bold">product</span>
                  <span className="text-cyan-600 italic font-bold">er</span>
                </div>
              </h1>
            </div>
            {/* Image on Right */}
            <div className="flex-shrink-0 w-full md:w-auto max-w-sm md:ml-4">
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/images/image26.png"
                    alt="person holding a camera by the parthenon in athens"
                    width={5000}
                    height={5000}
                    className="object-contain w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section className="my-24 px-8 sm:px-12 lg:px-24 xl:px-32 bg-white py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-800 leading-relaxed text-justify">
            <p className="text-base md:text-lg indent-8">
              Born and raised in Brazil by a German dad and a Brazilian mom, I am currently based in 📍{" "}
              <span className="font-bold">Dubai</span>. I am passionate about helping organizations transform user problems into seamless experiences at scale.
            </p>
            <p className="text-base md:text-lg indent-8">
              I&apos;ve worked with Product Management on the technology industry, working side by side with product, developing and UX teams.
            </p>
            <p className="text-base md:text-lg indent-8">
              I&apos;m currently based in Dubai, working as a <span className="font-bold">Product Manager at Dubizzle</span>, where I lead product initiatives across our platform to enhance user experience and drive business growth.
            </p>
            <p className="text-base md:text-lg indent-8">
              When I&apos;m not designing, you will find me drawing with watercolors (
              <a
                href="https://www.behance.net/alessandrakrick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline italic"
              >
                you can check them here!
              </a>
              ), playing on my ps5, planning my next trip or inventing a new recipe in my kitchen.
            </p>
            <p className="text-base md:text-lg indent-8">
              Want to know more about my Product Manager experience?{" "}
              <Link
                href="/product-management"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                You can find my Product Manager Portfolio by clicking here
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Call-to-Action Section */}
      <Section className="my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-8">
            Let&apos;s build something users love.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:akrickbusiness@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base"
            >
              📧 Email Me
            </a>
            <a
              href="https://linkedin.com/in/alessandrakrick"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm md:text-base"
            >
              🔗 Connect on LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Alessandra Krick. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/alessandrakrick/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 duration-300"
              >
                <Image
                  src="/images/linkedin-icon.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              </a>
              <a
                href="mailto:akrick.business@gmail.com"
                className="transition-transform hover:scale-110 duration-300"
              >
                <Image
                  src="/images/email-icon.png"
                  alt="Email"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

