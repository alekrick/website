"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";

const wireframeImages = [
  { src: "/images/image36.png", alt: "Paper Wireframes 1" },
  { src: "/images/image37.png", alt: "Paper Wireframes 2" },
  { src: "/images/image38.png", alt: "Paper Wireframes 3" },
  { src: "/images/image39.png", alt: "Paper Wireframes 4" },
];

export const PaperWireframesSection = (): JSX.Element => {
  return (
    <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12" data-testid="paper-wireframes-section">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center leading-tight">Paper Wireframes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wireframeImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[250px]"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

