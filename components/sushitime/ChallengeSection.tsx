"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";

type ChallengeSectionProps = {
  challengeNumber: number;
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  bgColor?: "white" | "gray";
};

export const ChallengeSection = ({
  challengeNumber,
  title,
  description,
  imageSrc,
  imageAlt,
  bgColor = "white",
}: ChallengeSectionProps): JSX.Element => {
  const bgClass = bgColor === "gray" ? "bg-gray-50/50" : "bg-white";

  return (
    <Section className={`my-16 px-4 sm:px-6 lg:px-8 ${bgClass} py-12`} data-testid={`challenge-${challengeNumber}-section`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="px-0 md:px-4">
            <h3 className="text-xl font-bold text-red-500 mb-2">CHALLENGE {challengeNumber}</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h2>
            {typeof description === "string" ? (
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">{description}</p>
            ) : (
              <div className="text-gray-700 text-base md:text-lg leading-relaxed">{description}</div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full px-0 md:px-4"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
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

