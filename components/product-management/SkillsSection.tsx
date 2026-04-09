"use client";

import { PageSection } from "./PageSection";

const PRODUCT_SKILLS = ["Product Strategy", "Roadmapping", "0-to-1 Development", "Mobile Product Management", "Agile & Scrum", "Release Management", "User Research", "Usability Testing", "Go-to-Market", "Partner Integrations", "API Product Thinking", "Data Specs & KPI Definition"];
const DESIGN_SKILLS = ["Figma", "UX Flows", "Wireframing", "Prototyping", "Adobe Suite"];
const TECH_SKILLS = ["Jira", "Confluence", "Notion", "Miro", "AWS Cloud Practitioner", "Cursor", "GitHub"];

const PILL_CLASS = "px-3 py-1 rounded-full bg-white/80 dark:bg-[#242424] border border-gray-200/70 dark:border-[#2a2a2a] text-sm text-gray-800 dark:text-[#cccccc] transition-all duration-200 hover:scale-105 hover:bg-white hover:border-gray-200 hover:shadow-sm hover:backdrop-blur-sm dark:hover:bg-[rgba(255,255,255,0.06)] dark:hover:border-[rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_18px_rgba(0,0,0,0.45)] dark:hover:backdrop-blur-sm";

export const SkillsSection = (): JSX.Element => (
  <PageSection className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/70 dark:bg-[#161616]">
    <div className="max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-[-0.02em] mb-4">
          Skills &amp; tools
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-[#d4d4d4] max-w-3xl mx-auto">
          The mix I use to take products from discovery, through delivery, to measurable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-[2px] bg-gray-700 dark:bg-gray-400 rounded-full" />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-[#d4d4d4]">Product</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRODUCT_SKILLS.map((item) => <span key={item} className={PILL_CLASS}>{item}</span>)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-[2px] bg-gray-700 dark:bg-gray-400 rounded-full" />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-[#d4d4d4]">Design</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {DESIGN_SKILLS.map((item) => <span key={item} className={PILL_CLASS}>{item}</span>)}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-6 w-[2px] bg-gray-700 dark:bg-gray-400 rounded-full" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-[#d4d4d4]">Tech &amp; tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {TECH_SKILLS.map((item) => <span key={item} className={PILL_CLASS}>{item}</span>)}
          </div>
        </div>
      </div>
    </div>
  </PageSection>
);
