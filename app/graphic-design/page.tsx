"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function GraphicDesign() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const previousScrollY = lastScrollY.current;
          
          // Always show menu at the top of the page
          if (currentScrollY <= 10) {
            setIsScrollingDown(false);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }
          
          // Scrolling up - show menu immediately
          if (currentScrollY < previousScrollY) {
            setIsScrollingDown(false);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }
          
          // Scrolling down and past 100px - hide menu
          if (currentScrollY > previousScrollY && currentScrollY > 100) {
            setIsScrollingDown(true);
          }
          
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/sitesv/AAzXCkf6helipxXUfIol165MYaUTOxKzw5SdPmyP1zS4oY5R22SdHGerFi2yK_KLiACx3-zUetJJJxx1Iq2OdBFnuATbwK_tJCrumJkaN6s6waUgiwedRHSeM9fgaRWW6ltKrk78DeXrJ7YItZf1YajDjKsWXdpzCj9OzAfFiGJKT0wCopyXQJm7ShsOOzUO1A6kGd_CWRfp9oohkOqjPgogsaMVnBilxSUbYsq3=w1280",
      title: "Kaju",
      subtitle: "Natural Restaurant"
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/sitesv/AAzXCkcdffzotm_qfOHE_8o5uxY0x9iZK8zPrqPMORNXDPv6pcLraiiyDMNNYp5JRb1syvbOEuGmOLfQSXJOAV7SmDENoJW7iUDqlMNVYS5dBGmOxb-AA8oDHwDL0wwy22I5JyE6pRAVCI5Rhqvkre1GvmGe80i0Sn9hH54l2nACL5nH8jpS6xxqwnTwndCSoYoYRfFF84e_i4ik_m30kLkgtN5QOMX50NSEdR5DPjI=w1280",
      title: "Ephzen",
      subtitle: "Well-being community (contain Greek characters on the 'eph')"
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/sitesv/AAzXCkeRtqzSyGiqBzDZvdwrSNey_bEhwP1-5iG1pPg1ot6GJa49Yke5UnGRInCIqfVkmy_rSB1CcCAHQ0n48elf6-z07_xcV6ynCgCDYFBcnPvINW2tfIU8ZQAcT1eRtTOvrLX7GgxIcNRP_Q5E8hr2_y2UaLbOK30iZNGKaBBZIlj31ZZ30CiiIQGxFKswHONqrdvJ4V7YJd-uFL_Bqw8CXKIAyqckkA2EdGG7ZfI=w1280",
      title: "Community",
      subtitle: "Volunteering Platform"
    },
    {
      id: 4,
      image: "https://lh3.googleusercontent.com/sitesv/AAzXCkehhBN7fvPVikOd2WTTwDbtHzm4c7UNxc7g0Iyt_av7dxXe8wWzLIWatAlN8IV0XwRUV255UaI_l5n6v9ERQns6yz0uuLuv87BfkdNMjwEDjcrrAibtDkNb-SULR1nWyX1aKRL-isyIHMZL6Ftl_erZ6tu91QAdgdrCoVIKPlFSIulllabcnsvilUgtpVBowhdyjf4sZKZYsKXkbJ_tWM2k5YaJo4Uwt0VmGqc=w1280",
      title: "Saber Pet",
      subtitle: "Pet Adestration"
    },
    {
      id: 5,
      image: "https://lh3.googleusercontent.com/sitesv/AAzXCke6FGH5dTTVgZLVjYG3qSzpojmXBRfm9n5Uos2pctmdtBapVBuRC1QJrneWXRcncM07NdONO9-xmjxJF1FAvy5BASCVYlrWT-EWXSUUfRS9ZeiGnyA7AJqfSzxSitmy63gDtWA8qqiyrnM6mO9EG_CsHTdf6KM_Pnur8BsizHdM3C3STBZQdGZyPsyf4ArabksDzNov7kp8pk2ZmWvgtKBDSReD4wgIeC0QCBU=w1280",
      title: "SushiTime",
      subtitle: "Sushi Reservation Application"
    },
    {
      id: 6,
      image: "https://lh3.googleusercontent.com/sitesv/AAzXCkfoBR8jA7aKlPa4c0dflypCQxPtWpBt51hh84sqyY2xbapU_eW7gUZftXJeuHNUb6QyinYlVj8pnIdhTW-E5pQg-Iiw_0RobdtMyKwo9wpBvzAXLtoR5ur-ZNMTgkBbdHSGsYiQnPBbCO0mZ-iH45WMimICDgkY0Gm5CXe2UWLQ0M19uO3qKi7lgITNQIiHFb7vymaOdbvvzjYKV58O4MdcjVCyBjJWbumDaGk=w1280",
      title: "Sushi logo concept",
      subtitle: ""
    }
  ];

  return (
    <main className="min-h-screen bg-white scroll-smooth overflow-x-hidden">
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300"
        style={{
          transform: isScrollingDown ? "translateY(-100%)" : "translateY(0)",
          willChange: "transform",
        }}
      >
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
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
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
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Graphic Design
              </Link>
              <Link
                href="/sushitime"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                SushiTime
              </Link>
              <a
                href="https://drive.google.com/file/d/1C5lVcUF5hkwpRnfnHAN0YH4z2duQ0c4p/view"
                target="_blank"
                rel="noopener noreferrer"
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
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col items-center gap-4 mt-4 py-2 border-t border-gray-200">
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
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
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
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
              >
                Graphic Design
              </Link>
                <Link
                  href="/sushitime"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  SushiTime
                </Link>
              <a
                href="https://drive.google.com/file/d/1C5lVcUF5hkwpRnfnHAN0YH4z2duQ0c4p/view"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                Community
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Graphic Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A collection of visual design projects and branding work.
          </motion.p>
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer ${item.title === "Saber Pet" ? "max-w-44 mx-auto" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.subtitle}`}
                      width={1280}
                      height={720}
                      className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </motion.div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-gray-600">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/homepage"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/product-management"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Product Management
              </Link>
              <Link
                href="/graphic-design"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Graphic Design
              </Link>
              <Link
                href="/sushitime"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                SushiTime
              </Link>
            </div>
            
            {/* Copyright and Social Links */}
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
        </div>
      </footer>
    </main>
  );
}

