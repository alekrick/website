"use client";

import { PageSection } from "./PageSection";
import { CountUp } from "./CountUp";

const IMPACT_ITEMS = [
  { label: "Partner integrations delivered", end: 15, suffix: "+", id: "impact-integrations" },
  { label: "Engineering team retention rate", end: 88, suffix: "%", id: "impact-retention" },
  { label: "App stores shipped simultaneously", end: 5, suffix: "", id: "impact-stores" },
] as const;

export const ImpactNumbersSection = (): JSX.Element => (
  <PageSection className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#111111]">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-200/80 dark:border-[#2a2a2a] shadow-[0_18px_60px_-30px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {IMPACT_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className={[
                "px-6 sm:px-8 py-7 text-center",
                index > 0 ? "sm:border-l border-gray-200/80 dark:border-white/10" : "",
                index > 0 ? "border-t sm:border-t-0 border-gray-200/80 dark:border-white/10" : "",
              ].join(" ")}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tabular-nums">
                <CountUp end={item.end} suffix={item.suffix} id={item.id} duration={1.2} />
              </div>
              <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-white/70 uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageSection>
);
