"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";

export const ProblemGoalSection = (): JSX.Element => {
  return (
    <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-12" data-testid="problem-goal-section">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* The Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">The problem</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed list-disc list-inside">
              <li>Long wait in sushi places;</li>
              <li>Low clarity on the ingredients&apos; quantities for the day, leading to waste.</li>
            </ul>
          </div>
          {/* The Goal */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">The goal</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed list-disc list-inside">
              <li>Improve sushi lovers&apos; experiences in their favorite sushi places;</li>
              <li>Decrease the amount of ingredients gone to waste;</li>
              <li>Less time waiting, more time having fun.</li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/images/image32.png"
              alt="SushiTime project"
              width={1280}
              height={720}
              className="w-full h-auto object-contain max-h-[500px]"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

