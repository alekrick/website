"use client";

import { URLS, getEmailLink } from "@/constants/urls";
import { Button } from "@/components/shared/Button";
import { PageSection } from "./PageSection";

export const CtaSection = (): JSX.Element => (
  <PageSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#111111]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight">
        Let&apos;s build something impactful.
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" size="lg" href={getEmailLink(URLS.social.emailBusiness)} fullWidth className="sm:w-auto">
          Email Me
        </Button>
        <Button variant="ghost" size="lg" href={URLS.social.linkedinShort} fullWidth className="sm:w-auto">
          LinkedIn
        </Button>
      </div>
    </div>
  </PageSection>
);
