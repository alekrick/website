"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";

type ImageSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  maxHeight?: string;
  bgColor?: "white" | "gray";
  description?: string;
};

export const ImageSection = ({
  title,
  imageSrc,
  imageAlt,
  maxHeight = "max-h-[400px]",
  bgColor = "white",
  description,
}: ImageSectionProps): JSX.Element => {
  const bgClass = bgColor === "gray" ? "bg-gray-50/50" : "bg-white";

  return (
    <Section className={`my-16 px-4 sm:px-6 lg:px-8 ${bgClass} py-12`} data-testid={`${title.toLowerCase().replace(/\s+/g, "-")}-section`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center leading-tight">{title}</h2>
        {description && (
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed text-center">{description}</p>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1280}
            height={720}
            className={`w-full h-auto object-contain ${maxHeight}`}
            unoptimized
          />
        </motion.div>
      </div>
    </Section>
  );
};

