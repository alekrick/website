"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { URLS } from "@/constants/urls";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Section } from "@/components/shared/Section";
import { useScrollHeader } from "@/hooks/useScrollHeader";

const GraphicDesign = (): JSX.Element => {
  const isScrollingDown = useScrollHeader();

  const portfolioItems = [
    {
      id: 1,
      image: "/images/image44.png",
      title: "Kaju",
      subtitle: "Natural Restaurant"
    },
    {
      id: 2,
      image: "/images/image45.png",
      title: "Ephzen",
      subtitle: "Well-being community (contain Greek characters on the 'eph')"
    },
    {
      id: 3,
      image: "/images/image46.png",
      title: "Community",
      subtitle: "Volunteering Platform"
    },
    {
      id: 4,
      image: "/images/image47.png",
      title: "Saber Pet",
      subtitle: "Pet Adestration"
    },
    {
      id: 5,
      image: "/images/image48.png",
      title: "SushiTime",
      subtitle: "Sushi Reservation Application"
    },
    {
      id: 6,
      image: "/images/image49.png",
      title: "Sushi logo concept",
      subtitle: ""
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 scroll-smooth overflow-x-hidden" data-testid="graphic-design-page">
      <Header isScrollingDown={isScrollingDown} currentPage="graphic-design" />

      {/* Hero Section */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Graphic Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A collection of visual design projects and branding work.
          </motion.p>
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 group cursor-pointer ${item.title === "Saber Pet" ? "max-w-44 mx-auto" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.subtitle}`}
                      width={1280}
                      height={720}
                      className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default GraphicDesign;

