"use client";

import { motion } from "framer-motion";

export const HeroSection = (): JSX.Element => {
  return (
    <motion.section 
      className="relative w-full h-96 md:h-[500px] bg-cover bg-center bg-[url('/images/image31.png')]" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-black/20"></div>
    </motion.section>
  );
};

