"use client";

import { Section } from "@/components/shared/Section";
import { URLS } from "@/constants/urls";

export const ProjectInfoSection = (): JSX.Element => {
  return (
    <Section className="mt-4 mb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12" data-testid="project-info-section">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center items-center">
          <div>
            <p className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">Project:</p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">SushiTime</p>
          </div>
          <div>
            <p className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">Role:</p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">Concept, Research, Visuals</p>
          </div>
          <div>
            <p className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">Duration:</p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">June - Oct 2022</p>
          </div>
          <div>
            <a
              href={URLS.sushitime.processDeck}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200"
              data-testid="process-deck-link"
            >
              PROCESS DECK →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

