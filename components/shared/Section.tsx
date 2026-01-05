"use client";

import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ children, className = "" }: SectionProps): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

