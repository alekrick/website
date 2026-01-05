"use client";

import { Section } from "@/components/shared/Section";
import { URLS } from "@/constants/urls";

export const ProcessDeckSection = (): JSX.Element => {
  return (
    <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12" data-testid="process-deck-section">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href={URLS.sushitime.processDeckAlt}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200 mb-4"
          data-testid="process-deck-alt-link"
        >
          PROCESS DECK →
        </a>
        <p className="text-gray-600">
          <a
            href={URLS.community}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline italic"
            data-testid="community-link"
          >
            or Check my next project →
          </a>
        </p>
      </div>
    </Section>
  );
};

