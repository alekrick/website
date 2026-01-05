"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import { URLS } from "@/constants/urls";

export const KickoffSection = (): JSX.Element => {
  return (
    <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-white py-12" data-testid="kickoff-section">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Kick-off</h2>
            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
              For initiating the project, I have started with an UX Research to validate the Project&apos;s goals and discover other pains and needs users might have to enrich the product.
            </p>
            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
              After the research, personas were drawn. To start the ideation process, I runned a <em>competitive analysis</em> with direct and indirect competitors.
            </p>
            <ul className="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed list-disc list-inside ml-4">
              <li>Initial questions</li>
              <li>
                <a
                  href={URLS.sushitime.competitiveAnalysis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                  data-testid="competitive-analysis-link"
                >
                  Competitive analysis →
                </a>
              </li>
            </ul>
          </div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/images/image33.png"
              alt="Kick-off research"
              width={1280}
              height={720}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

