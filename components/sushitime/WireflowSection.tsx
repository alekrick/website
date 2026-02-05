"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import { URLS } from "@/constants/urls";

export const WireflowSection = (): JSX.Element => {
  return (
    <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12" data-testid="wireflow-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center leading-tight">Wireflow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
          After the competitive audit, the wireframes were created for initial usability tests with users.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
          Once ideas and flows were validated, I made a high-fidelity prototype and tested it once again. Iterations were made on the design to make it more user-friendly according to insights gathered on a second usability test.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
          <a
            href={URLS.sushitime.figmaPrototype}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
            data-testid="figma-prototype-link"
          >
            Check the High-Fidelity Prototype in Figma →
          </a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base italic leading-relaxed mb-12">
          Obs.: only the main flow was drawn.
        </p>
        
        {/* Wireflow Image */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/images/image40.png"
              alt="Wireflow"
              width={1280}
              height={720}
              className="w-full h-auto object-contain max-h-[500px]"
              unoptimized
            />
          </motion.div>
        </div>

        {/* High-Fidelity Prototype Image */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/images/image41.png"
              alt="High-Fidelity Prototype"
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

