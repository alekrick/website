"use client";

import { Section } from "@/components/shared/Section";
import { URLS } from "@/constants/urls";
import { Button } from "@/components/shared/Button";

export const ProcessDeckSection = (): JSX.Element => {
  return (
    <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-12" data-testid="process-deck-section">
      <div className="max-w-4xl mx-auto text-center">
        <Button
          variant="ghost"
          size="md"
          href={URLS.sushitime.processDeckAlt}
          className="mb-4"
          data-testid="process-deck-alt-link"
        >
          PROCESS DECK →
        </Button>
        <p className="text-gray-600 dark:text-gray-400">
          <a
            href={URLS.community}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline italic"
            data-testid="community-link"
          >
            or Check my next project →
          </a>
        </p>
      </div>
    </Section>
  );
};

