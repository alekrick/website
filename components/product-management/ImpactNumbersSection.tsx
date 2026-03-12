"use client";

import { PageSection } from "./PageSection";

const IMPACT_ITEMS = [
  { label: "Partner integrations delivered", value: "15+" },
  { label: "Engineering team retention rate", value: "88%" },
  { label: "App stores shipped simultaneously", value: "5" },
  { label: "Reduction in dev iteration cycles", value: "46%" },
];

export const ImpactNumbersSection = (): JSX.Element => (
  <PageSection className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#111111]">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-200/80 dark:border-[#2a2a2a] shadow-[0_18px_60px_-30px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {IMPACT_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className={[
                "px-6 sm:px-8 py-7 text-center",
                index > 0 ? "border-l border-gray-200/80 dark:border-white/10" : "",
                index === 2 ? "border-t border-gray-200/80 dark:border-white/10 md:border-t-0" : "",
                index === 3 ? "border-t border-gray-200/80 dark:border-white/10 md:border-t-0 border-l border-gray-200/80 dark:border-white/10" : "",
              ].join(" ")}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-[#3b6fe8] tabular-nums">{item.value}</div>
              <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-white/70 uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageSection>
);
