"use client";

import { Section } from "@/components/shared/Section";

export const TakeawaysSection = (): JSX.Element => {
  return (
    <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-12" data-testid="takeaways-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center leading-tight">Takeaways</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
          As a sushi lover and a person who loves trying new sushi places, this first complete UX project of mine is extremely dear to me. Designing this app has showed me that sticking to the process will bring you good results. No good application will be made without conducting proper UX Researches and Usability Tests. The more iterations with real users before handing the final design to the production team, the better!
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
          Also, as a person who has worked as Product Manager before, I recognize how some past product problems could be solved by sticking to UX Processes basics as conducted above.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center text-base md:text-lg leading-relaxed">
          Thank you for reading until here!
        </p>
      </div>
    </Section>
  );
};

