"use client";

import { CountUp } from "./CountUp";
import { PageSection } from "./PageSection";

export const HeroSection = (): JSX.Element => (
  <PageSection className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0f0f0f]">
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 dark:border-[#2a2a2a] bg-gradient-to-b from-white to-gray-50/60 dark:from-[#111111] dark:to-[#161616] px-6 sm:px-10 lg:px-14 py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.7] dark:opacity-[0.35]">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),transparent_62%)]" />
          <div className="absolute -bottom-48 right-[-220px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_52%,transparent_78%)]" />
        </div>

        <div className="relative text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-gray-600 dark:text-[#888888] mb-5">
            Senior Product Manager Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-[-0.03em] leading-[0.95] mb-6">
            I build products from 0 to 1.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-[#d4d4d4] max-w-4xl mx-auto">
            Three continents. Gaming, food-tech, marketplaces.{" "}
            <span className="font-semibold text-gray-900 dark:text-white">10M+ users</span> on one
            end, zero on the other.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="max-w-5xl mx-auto rounded-2xl bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-200/80 dark:border-[#2a2a2a] shadow-[0_18px_60px_-30px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="px-8 py-8 text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tabular-nums">
                <CountUp end={6} suffix="" id="hero-years" />
              </div>
              <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-white/70 uppercase tracking-wide">
                Years of experience
              </p>
            </div>
            <div className="px-8 py-8 text-center sm:text-left border-t border-gray-200/80 dark:border-white/10 sm:border-t-0 sm:border-l">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tabular-nums">
                <CountUp end={10} suffix="M+" id="hero-users" />
              </div>
              <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-white/70 uppercase tracking-wide">
                Users impacted
              </p>
            </div>
            <div className="px-8 py-8 text-center sm:text-left border-t border-gray-200/80 dark:border-white/10 sm:border-t-0 sm:border-l">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tabular-nums">
                <CountUp end={12} suffix="+" id="hero-products" />
              </div>
              <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-white/70 uppercase tracking-wide">
                Products shipped
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageSection>
);
