"use client";

import Link from "next/link";
import Image from "next/image";
import { URLS, getEmailLink } from "@/constants/urls";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm" data-testid="footer-nav">
            <Link
              href={URLS.routes.homepage}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              data-testid="footer-link-home"
            >
              Home
            </Link>
            <Link
              href={URLS.routes.about}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              data-testid="footer-link-about"
            >
              About
            </Link>
            <Link
              href={URLS.routes.productManagement}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              data-testid="footer-link-product-management"
            >
              Product Management
            </Link>
            <Link
              href={URLS.routes.graphicDesign}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              data-testid="footer-link-graphic-design"
            >
              Graphic Design
            </Link>
            <Link
              href={URLS.routes.sushitime}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              data-testid="footer-link-sushitime"
            >
              SushiTime
            </Link>
          </div>
          
          {/* Copyright and Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400" data-testid="footer-copyright">
              © {new Date().getFullYear()} Alessandra Krick. All rights reserved.
            </div>
            <div className="flex items-center gap-6" data-testid="footer-social">
              <a
                href={URLS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 duration-300"
                data-testid="footer-social-linkedin"
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
                href={getEmailLink(URLS.social.email)}
                className="transition-transform hover:scale-110 duration-300"
                data-testid="footer-social-email"
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
  );
};

