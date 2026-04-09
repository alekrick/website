"use client";

import Link from "next/link";
import { URLS } from "@/constants/urls";
import { PageSection } from "./PageSection";

const LINK_CLASS = "text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 underline underline-offset-4 decoration-gray-400 dark:decoration-gray-500";

export const CertificatesSection = (): JSX.Element => (
  <PageSection className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#111111]">
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-[#888888] mb-2">Certificates</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Credentials & learning
        </h2>
      </div>

      <div className="rounded-2xl border border-gray-200/80 dark:border-[#2a2a2a] bg-gray-50 dark:bg-[#1a1a1a] p-6 sm:p-8 shadow-sm">
        <ul className="space-y-4 text-base">
          <li>
            <Link href={URLS.certifications.awsCloudPractitioner} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
              AWS Certified Cloud Practitioner
            </Link>
          </li>
          <li>
            <Link href={URLS.certifications.cspo} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
              Certified Scrum Product Owner (CSPO) — Scrum Alliance
            </Link>
          </li>
          <li>
            <Link href={URLS.certifications.googleUXDesign} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
              Google UX Design — Coursera
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </PageSection>
);
