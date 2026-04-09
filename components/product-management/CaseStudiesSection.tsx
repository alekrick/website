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
          Three deep dives into products I&apos;ve owned end-to-end — plus two more projects below.
        </p>
      </div>

      <div className="space-y-8">
        <article className="group relative overflow-hidden rounded-3xl border border-gray-200/70 dark:border-[#2a2a2a] bg-white dark:bg-[#1c1c1c] shadow-sm hover:shadow-lg transition-shadow duration-200">
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-0">
            <div className="hidden md:flex items-start justify-center px-6 py-10">
              <div className="text-6xl font-extrabold tracking-[-0.04em] text-gray-200 dark:text-[#9ca3af] select-none">01</div>
            </div>
            <div className="px-6 sm:px-10 py-10">
              <div className="mb-5 inline-flex items-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100/80 dark:bg-[#1a1a1a] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                <span className="mr-2 h-3.5 w-[3px] rounded-full bg-gray-600 dark:bg-gray-400" />
                0-to-1 · Mobile · Kids EdTech
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white tracking-[-0.02em] mb-6">
                Kidjo Games - building a gaming product from scratch
              </h3>
              <div className="mb-4">
                <CaseStudySlider images={["/images/image53.png", "/images/image54.png", "/images/image8.png", "/images/image60.png", "/images/image9.png", "/images/image61.png", "/images/image7.png", "/images/image17.png"]} altPrefix="Kidjo Games" />
              </div>
              <div className="divide-y divide-gray-200/70 dark:divide-gray-800">
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Problem</p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                    Kidjo had TV and Stories products with small games embedded in it. Through data, our users spent a considerable amount of time on the games. Brief: build a multi-game platform for kids, across iOS, Android, Samsung and Web.
                  </p>
                </div>
                <details className="py-4 sm:hidden">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-900 dark:text-white">Read more</summary>
                  <div className="pt-4 space-y-6">
                    <div>
                      <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                      <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed mb-3">
                        Owned the full product lifecycle end-to-end with a team of 8.
                      </p>
                      <ul className="space-y-1.5 text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                        {["Roadmap definition and prioritization", "QA scenarios across four platforms", "App store submissions (Apple, Google, Samsung, Huawei, Amazon)", "Cross-platform UX and experience decisions", "Client and stakeholder communication", "Kept timely deliveries and timelines on the other product lines"].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-gray-500 dark:text-gray-300">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                      <p className="inline-flex flex-col gap-1 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        <span><strong className="font-semibold">100K+</strong> installs within the first year.</span>
                        <span><strong className="font-semibold">4.2★</strong> sustained rating across all stores.</span>
                      </p>
                    </div>
                  </div>
                </details>
                <div className="hidden sm:block py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed mb-3">
                    Owned the full product lifecycle end-to-end with a team of 8.
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                    {["Roadmap definition and prioritization", "QA scenarios across four platforms", "App store submissions (Apple, Google, Samsung, Huawei, Amazon)", "Cross-platform UX and experience decisions", "Client and stakeholder communication", "Kept timely deliveries and timelines on the other product lines"].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-gray-500 dark:text-gray-300">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden sm:block py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                  <p className="inline-flex flex-col gap-1 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    <span><strong className="font-semibold">100K+</strong> installs within the first year.</span>
                    <span><strong className="font-semibold">4.2★</strong> sustained rating across all stores.</span>
                  </p>
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
              <div className="mb-4">
                <CaseStudySlider images={["/images/image55.png", "/images/image56.png", "/images/image57.png", "/images/image58.png", "/images/image62.png", "/images/image63.png"]} altPrefix="Holiday Homes at Dubizzle" />
              </div>
              <div className="divide-y divide-gray-200/70 dark:divide-gray-800">
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Problem</p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                    Dubizzle wanted to enter the short-term rental market as a local OTA. I joined mid-flight and took full ownership of delivery.
                  </p>
                </div>
                <details className="py-4 sm:hidden">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-900 dark:text-white">Read more</summary>
                  <div className="pt-4 space-y-6">
                    <div>
                      <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                      <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed mb-3">
                        Drove the go-to-market launch across 6+ internal departments.
                      </p>
                      <ul className="space-y-1.5 text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                        {["Roadmap, pricing and testing scenarios", "Operational and finance flow design", "Payment gateway integration", "Pre-launch agency onboarding and training", "Data specs for BI dashboard"].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-emerald-700 dark:text-emerald-200">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                      <p className="inline-flex flex-col gap-1 rounded-xl bg-emerald-50 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        <span>Full go-to-market launch delivered within <strong className="font-semibold">6 months</strong>.</span>
                        <span>Agencies live on platform before public launch.</span>
                      </p>
                    </div>
                  </div>
                </details>
                <div className="hidden sm:block py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed mb-3">
                    Drove the go-to-market launch across 6+ internal departments.
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                    {["Roadmap, pricing and testing scenarios", "Operational and finance flow design", "Payment gateway integration", "Pre-launch agency onboarding and training", "Data specs for BI dashboard"].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-emerald-700 dark:text-emerald-200">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden sm:block py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                  <p className="inline-flex flex-col gap-1 rounded-xl bg-emerald-50 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    <span>Full go-to-market launch delivered within <strong className="font-semibold">6 months</strong>.</span>
                    <span>Agencies live on platform before public launch.</span>
                  </p>
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
              <div className="mb-5 inline-flex items-center rounded-full border border-orange-200/60 dark:border-orange-700/40 bg-orange-50/60 dark:bg-[#1a1a1a] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400">
                <span className="mr-2 h-3.5 w-[3px] rounded-full bg-orange-600/80 dark:bg-orange-400" />
                Technical Depth · Backend · 3M+ Users · Platform Infrastructure
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white tracking-[-0.02em] mb-6">
                CMS Backend Migration - rebuilding infrastructure for 3M+ users
              </h3>
              <div className="divide-y divide-gray-200/70 dark:divide-gray-800">
                <div className="py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Problem</p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                    Kidjo&apos;s monolithic Content Management System (CMS) couldn&apos;t scale. With 3M+ monthly active users depending on uninterrupted content delivery, the team needed to migrate to a microservices architecture — without taking the platform offline or causing content unavailability.
                  </p>
                </div>
                <details className="py-4 sm:hidden">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-900 dark:text-white">Read more</summary>
                  <div className="pt-4 space-y-6">
                    <div>
                      <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                      <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed mb-3">
                        Owned the full product roadmap for a year-long live migration, from architecture decisions to hands-on data validation.
                      </p>
                      <ul className="space-y-1.5 text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                        {[
                          "Translated client needs into technical architecture → \"I struggle organizing folders\" became a parent-child folder structure containing all language variants",
                          "Sequenced the full migration roadmap: database changes, new table creation, API development, server cutover",
                          "Wrote SQL queries personally to validate data consistency across every table, folder and language variant",
                          "Tested APIs end-to-end alongside a single QA engineer throughout the migration",
                          "Joined pair programming sessions with engineers to troubleshoot issues directly",
                          "Communicated migration status and risk to the client in business language across 12 months",
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-orange-600 dark:text-orange-400">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                      <p className="inline-flex flex-col gap-1 rounded-xl bg-orange-50 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        <span>Successfully migrated a live backend serving 3M+ monthly active users with zero content unavailability. Replaced an unscalable monolith with a microservices architecture — enabling faster development and a maintainable codebase for future growth.</span>
                      </p>
                    </div>
                  </div>
                </details>
                <div className="hidden sm:block py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">What I did</p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed mb-3">
                    Owned the full product roadmap for a year-long live migration, from architecture decisions to hands-on data validation.
                  </p>
                  <ul className="space-y-1.5 text-sm md:text-base text-gray-600 dark:text-[#d4d4d4] leading-relaxed">
                    {[
                      "Translated client needs into technical architecture → \"I struggle organizing folders\" became a parent-child folder structure containing all language variants",
                      "Sequenced the full migration roadmap: database changes, new table creation, API development, server cutover",
                      "Wrote SQL queries personally to validate data consistency across every table, folder and language variant",
                      "Tested APIs end-to-end alongside a single QA engineer throughout the migration",
                      "Joined pair programming sessions with engineers to troubleshoot issues directly",
                      "Communicated migration status and risk to the client in business language across 12 months",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-orange-600 dark:text-orange-400">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden sm:block py-6">
                  <p className="uppercase text-xs font-semibold text-gray-500 dark:text-[#888888] mb-2">Outcome</p>
                  <p className="inline-flex flex-col gap-1 rounded-xl bg-orange-50 dark:bg-[#1a1a1a] px-4 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    <span>Successfully migrated a live backend serving 3M+ monthly active users with zero content unavailability. Replaced an unscalable monolith with a microservices architecture — enabling faster development and a maintainable codebase for future growth.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* More Work */}
      <div className="mt-20">
        <p className="uppercase tracking-widest text-xs text-gray-500 dark:text-[#888888] mb-2">MORE WORK</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">More projects worth knowing about</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-xl border border-gray-200/70 dark:border-[#2a2a2a] bg-gray-50 dark:bg-[#1a1a1a] p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center rounded-full border border-teal-200/60 dark:border-teal-700/40 bg-teal-50/60 dark:bg-[#1a1a1a] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
              <span className="mr-2 h-3.5 w-[3px] rounded-full bg-teal-600/80 dark:bg-teal-400" />
              Platform Thinking · API Products · Partner Operations
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight">Kidjo Partner Integration Framework</h4>
            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-[#d4d4d4] leading-relaxed mb-4">
              <li className="flex gap-2">
                <span className="text-teal-600 dark:text-teal-400">→</span>
                <span>Kidjo had 15+ active partners across Europe, Latin America, Asia and the US — including Orange, Amazon Prime, Jazz, Bemobi and Cafeyn — each integrated differently with no shared process.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600 dark:text-teal-400">→</span>
                <span>I audited every integration from scratch, defined partner categories (account creation, content distribution, device), and built a repeatable onboarding framework backed by a centralized API approach.</span>
              </li>
            </ul>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              → Replaced 15 one-off approaches with one scalable framework. Eliminated duplicate engineering work across every new partner onboarding.
            </p>
          </article>
          <article className="rounded-xl border border-gray-200/70 dark:border-[#2a2a2a] bg-gray-50 dark:bg-[#1a1a1a] p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center rounded-full border border-purple-200/60 dark:border-purple-700/40 bg-purple-50/60 dark:bg-[#1a1a1a] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400">
              <span className="mr-2 h-3.5 w-[3px] rounded-full bg-purple-600/80 dark:bg-purple-400" />
              0-to-1 · Food-tech · POS Integration
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight">Outback Brazil App — from blank page to operational</h4>
            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-[#d4d4d4] leading-relaxed mb-4">
              <li className="flex gap-2">
                <span className="text-purple-600 dark:text-purple-400">→</span>
                <span>Built a full ordering app for Outback Brazil from scratch — no existing product, no process, no blueprint.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 dark:text-purple-400">→</span>
                <span>Owned ordering flows, kitchen connection, inventory, delivery integration, and walk-in booking while managing a 14-person cross-functional team reporting directly to the CTO.</span>
              </li>
            </ul>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              → POS integration delivered before handoff. Work contributed directly to six-figure USD contract renewals.
            </p>
          </article>
        </div>
      </div>
    </div>
  </PageSection>
);
