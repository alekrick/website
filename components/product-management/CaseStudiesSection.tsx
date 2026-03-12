"use client";

import { PageSection } from "./PageSection";
import { CaseStudySlider } from "./CaseStudySlider";

export const CaseStudiesSection = (): JSX.Element => (
  <PageSection className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#111111]">
    <div className="max-w-6xl mx-auto">
      <div className="mb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[-0.02em] mb-4">
          Featured case studies
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-[#d4d4d4] max-w-3xl mx-auto">
          A few representative examples of how I take products from idea to launch across mobile,
          web, and cross-platform ecosystems.
        </p>
      </div>

      <div className="space-y-8">
        <article className="group relative overflow-hidden rounded-3xl border border-gray-200/70 dark:border-[#2a2a2a] bg-white dark:bg-[#1c1c1c] shadow-sm hover:shadow-lg transition-shadow duration-200">
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-0">
            <div className="hidden md:flex items-start justify-center px-6 py-10">
              <div className="text-6xl font-extrabold tracking-[-0.04em] text-gray-200 dark:text-[#9ca3af] select-none">01</div>
            </div>
            <div className="px-6 sm:px-10 py-10">
              <div className="mb-5 inline-flex items-center rounded-full border border-blue-200/60 dark:border-[#3b6fe8]/40 bg-blue-50/60 dark:bg-[#1a1a1a] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-[#3b6fe8]">
                <span className="mr-2 h-3.5 w-[3px] rounded-full bg-blue-600/80 dark:bg-[#3b6fe8]" />
                0-to-1 · Mobile · Kids EdTech
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white tracking-[-0.02em] mb-6">
                Kidjo Games - building a gaming product from scratch
              </h3>
              <div className="divide-y divide-gray-200/70 dark:divide-gray-800">
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Problem</p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed">
                    Kidjo had TV and Stories products with small games embedded in it. Through data, our users spent a considerable amount of time on the games. Brief: build a multi-game platform for kids, across iOS, Android, Samsung and Web.
                  </p>
                </div>
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed mb-3">
                    Owned the full product lifecycle end-to-end with a team of 8.
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed">
                    {["Roadmap definition and prioritization", "QA scenarios across four platforms", "App store submissions (Apple, Google, Samsung, Huawei, Amazon)", "Cross-platform UX and experience decisions", "Client and stakeholder communication", "Kept timely deliveries and timelines on the other product lines"].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-blue-600 dark:text-[#3b6fe8]">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                  <p className="inline-flex flex-col gap-1 rounded-xl bg-blue-50 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    <span><strong className="font-semibold">100K+</strong> installs within the first year.</span>
                    <span><strong className="font-semibold">4.2★</strong> sustained rating across all stores.</span>
                  </p>
                  <CaseStudySlider images={["/images/image53.png", "/images/image54.png", "/images/image8.png", "/images/image60.png", "/images/image9.png", "/images/image61.png"]} altPrefix="Kidjo Games" />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-3xl border border-gray-200/70 dark:border-[#2a2a2a] bg-white dark:bg-[#1c1c1c] shadow-sm hover:shadow-lg transition-shadow duration-200">
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-0">
            <div className="hidden md:flex items-start justify-center px-6 py-10">
              <div className="text-6xl font-extrabold tracking-[-0.04em] text-gray-200 dark:text-[#9ca3af] select-none">02</div>
            </div>
            <div className="px-6 sm:px-10 py-10">
              <div className="mb-5 inline-flex items-center rounded-full border border-emerald-200/60 dark:border-emerald-700/40 bg-emerald-50/60 dark:bg-[#1a1a1a] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">
                <span className="mr-2 h-3.5 w-[3px] rounded-full bg-emerald-600/80 dark:bg-emerald-400" />
                Go-to-Market · Payments · B2B + B2C
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white tracking-[-0.02em] mb-6">
                dubizzle Holiday Homes - launching a new vertical
              </h3>
              <div className="divide-y divide-gray-200/70 dark:divide-gray-800">
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Problem</p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed">
                    Dubizzle wanted to enter the short-term rental market as a local OTA. I joined mid-flight and took full ownership of delivery.
                  </p>
                </div>
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed mb-3">
                    Drove the go-to-market launch across 6+ internal departments.
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed">
                    {["Roadmap, pricing and testing scenarios", "Operational and finance flow design", "Payment gateway integration", "Pre-launch agency onboarding and training", "Data specs for BI dashboard"].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-emerald-700 dark:text-emerald-200">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                  <p className="inline-flex flex-col gap-1 rounded-xl bg-emerald-50 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    <span>Full go-to-market launch delivered within <strong className="font-semibold">6 months</strong>.</span>
                    <span>Agencies live on platform before public launch.</span>
                  </p>
                  <CaseStudySlider images={["/images/image55.png", "/images/image56.png", "/images/image57.png", "/images/image58.png", "/images/image62.png", "/images/image63.png"]} altPrefix="Holiday Homes at Dubizzle" />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-3xl border border-gray-200/70 dark:border-[#2a2a2a] bg-white dark:bg-[#1c1c1c] shadow-sm hover:shadow-lg transition-shadow duration-200">
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-0">
            <div className="hidden md:flex items-start justify-center px-6 py-10">
              <div className="text-6xl font-extrabold tracking-[-0.04em] text-gray-200 dark:text-[#9ca3af] select-none">03</div>
            </div>
            <div className="px-6 sm:px-10 py-10">
              <div className="mb-5 inline-flex items-center rounded-full border border-purple-200/60 dark:border-purple-700/40 bg-purple-50/60 dark:bg-[#1a1a1a] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-200">
                <span className="mr-2 h-3.5 w-[3px] rounded-full bg-purple-600/80 dark:bg-purple-400" />
                0-to-1 · Food-tech · POS Integration
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white tracking-[-0.02em] mb-6">
                Outback Brazil App at DX.CO — from blank page to operational app
              </h3>
              <div className="divide-y divide-gray-200/70 dark:divide-gray-800">
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Problem</p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed">
                    DX.CO needed a full ordering app for Outback Brazil from scratch — no product, no process, no blueprint.
                  </p>
                </div>
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed mb-3">
                    Built the entire product from zero, managing a cross-functional team of 14.
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-gray-700 dark:text-[#d4d4d4] leading-relaxed">
                    {["Tech stack direction and product roadmap", "QA testing scenarios and soft launch plan", "Ordering flows, kitchen and inventory links", "Delivery and walk-in booking experiences", "POS integration end-to-end"].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-purple-700 dark:text-purple-200">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                  <p className="inline-flex flex-col gap-1 rounded-xl bg-purple-50 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    <span>POS integration successfully delivered before handoff.</span>
                    <span>Contributed directly to <strong className="font-semibold">six-figure USD</strong> contract renewals.</span>
                  </p>
                  <CaseStudySlider images={["/images/image21.png", "/images/image19.png", "/images/image12.png", "/images/image11.png"]} altPrefix="Outback Brazil App at DX.CO" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </PageSection>
);
