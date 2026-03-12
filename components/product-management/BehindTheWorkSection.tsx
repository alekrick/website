"use client";

import Image from "next/image";
import { PageSection } from "./PageSection";

export const BehindTheWorkSection = (): JSX.Element => (
  <PageSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#161616]">
    <div className="max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] text-gray-500 dark:text-[#888888] uppercase mb-3">
          BEHIND THE WORK
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[-0.02em] mb-3">
          Real teams. Real sprints. Real products.
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] max-w-2xl mx-auto">
          A few snapshots from the process — because good products don&apos;t happen in slide decks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3 mb-4">
        <div className="relative h-[380px] md:h-[380px] overflow-hidden rounded-xl">
          <Image src="/images/image20.png" alt="Behind the work - large process snapshot" fill className="object-cover transition-transform duration-300 ease-out hover:scale-105 hover:brightness-105" />
        </div>
        <div className="grid grid-rows-2 gap-3 h-[380px]">
          <div className="relative h-[180px] md:h-full overflow-hidden rounded-xl">
            <Image src="/images/image16.png" alt="Behind the work - workshop and sprint planning" fill className="object-cover transition-transform duration-300 ease-out hover:scale-105 hover:brightness-105" />
          </div>
          <div className="relative h-[180px] md:h-full overflow-hidden rounded-xl">
            <Image src="/images/image65.png" alt="Behind the work - product reviews and rituals" fill className="object-cover transition-transform duration-300 ease-out hover:scale-105 hover:brightness-105" />
          </div>
        </div>
      </div>

      <p className="text-xs md:text-sm text-gray-500 dark:text-[#888888] text-center">
        Planning sessions, sprint ceremonies, and product reviews across Dubai, Brazil and Egypt.
      </p>
    </div>
  </PageSection>
);
