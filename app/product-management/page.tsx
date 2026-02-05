"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { URLS, getEmailLink } from "@/constants/urls";
import { useState, useEffect } from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Section } from "@/components/shared/Section";
import { useScrollHeader } from "@/hooks/useScrollHeader";

// Counting number component
const CountUp = ({ end, suffix = "", duration = 2, id }: { end: number; suffix?: string; duration?: number; id: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementId = `count-${id}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(elementId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementId, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span id={elementId}>
      {count}{suffix}
    </span>
  );
};

const ProductManagement = (): JSX.Element => {
  const isScrollingDown = useScrollHeader();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 scroll-smooth overflow-x-hidden" data-testid="product-management-page">
      <Header isScrollingDown={isScrollingDown} currentPage="product-management" />

      {/* Hero Section */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            👋 Hi, I&apos;m Alessandra Krick
          </h1>
          <div className="space-y-4 text-sm md:text-base lg:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            <p>
              A <span className="font-semibold text-blue-600">Senior Product Manager</span>{" "}
              who bridges strategy and execution, transforming business objectives into scalable digital products.
            </p>
            <p>
              I&apos;ve architected product portfolios with a combined{" "}
              <span className="font-semibold text-gray-900 dark:text-white">10M+ userbase</span>, from
              strategic vision to go-to-market execution across web, mobile, and smart TVs.
            </p>
            <p className="pt-4">
              📍 Based in Dubai |{" "}
              <a
                href={getEmailLink(URLS.social.emailBusiness)}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200"
              >
                Email
              </a>{" "}
              |{" "}
              <a
                href={URLS.social.linkedinShort}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200"
              >
                LinkedIn
              </a>
            </p>
            <p className="pt-6 text-gray-700 dark:text-gray-300">
              Here&apos;s how I&apos;ve been driving{" "}
              <span className="font-semibold text-gray-900 dark:text-white">strategic product leadership</span>:
            </p>
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section className="my-16 md:my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
                <CountUp end={7} suffix="+" duration={1.2} id="years" />
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base lowercase">years of experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
                <CountUp end={10} suffix="M+" duration={1.2} id="users" />
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base lowercase">users impacted</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
                <CountUp end={200} suffix="+" duration={1.2} id="people" />
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base lowercase">people led</div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Section 1: Product Strategy and Roadmap */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              1
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            Product Strategy and Roadmap
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              🧭 Architected and executed{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                outcome-oriented product strategies and roadmaps
              </span>{" "}
              that balance long-term vision with short-term execution.
            </p>
            <p>
              📊 Conducted market analysis and competitive positioning to inform strategic decisions and portfolio-level thinking.
            </p>
            <p>
              🎯 Aligned cross-functional teams on strategic vision while shipping incremental value and making data-driven trade-offs.
            </p>
          </div>
        </div>
      
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/image9.png"
                alt="Product Strategy"
                width={5000}
                height={5000}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Section 2: Executive Stakeholder Management & Market Alignment */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              2
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            Executive Stakeholder Management & Market Alignment
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              🎯 Work directly with{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                C-suite executives (CEOs, CTOs) and cross-functional leaders
              </span>{" "}
              (Sales Directors, Finance Directors, Operations) to ensure products achieve market-fit and operational readiness beyond technical delivery.
            </p>
            <p>
              💼 Bridge the gap between{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                business strategy and product execution
              </span>
              , ensuring products not only launch successfully but are operationally sustainable and aligned with business objectives.
            </p>
            <p>
              🚀 Develop business cases and go-to-market strategies that align with market needs and company goals.
            </p>
            <p>
              🤝 Translate business requirements into product requirements, managing stakeholder expectations and building consensus across diverse teams.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3: Cross-functional Leadership & Strategic Alignment */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              3
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            Cross-functional Leadership & Strategic Alignment
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              🤝 Established{" "}
              <span className="font-semibold text-gray-900 dark:text-white">strategic alignment</span>{" "}
              across departments, influencing without authority and building consensus among diverse stakeholders.
            </p>
            <p>
              🌀 Led <span className="font-semibold text-gray-900 dark:text-white">Agile ceremonies</span> and{" "}
              <span className="font-semibold text-gray-900 dark:text-white">empowered teams</span> across design, dev, and QA, driving alignment and velocity through effective sprint planning and Scrum practices.
            </p>
            <p>
              🔄 Translated business needs into product requirements, managing change and building product culture across organizations.
            </p>
          </div>
        </div>
      
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/images/image10.png"
                    alt="Planning poker"
                    width={5000}
                    height={5000}
                    className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </div>
              <p className="text-center italic text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                All user stories must be measured. I usually use planning poker for
                it.
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/images/image11.png"
                    alt="Sprint burndown"
                    width={5000}
                    height={5000}
                    className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </div>
              <p className="text-center italic text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                Every daily I get our sprint burndown chart to check on our progress.
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/images/image12.png"
                    alt="Reviews and Retrospectives"
                    width={5000}
                    height={5000}
                    className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </div>
              <p className="text-center italic text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                Reviews and Retrospectives are my favorite. I always like to bring a
                theme to them.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Team Engagement & Management */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              4
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            Team Engagement &amp; Management
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              👥 Managed and coached teams of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">200+</span> across sales, dev, QA, and design, remotely and on-site.
            </p>
            <p>
              🎯 Scaled teams and processes, mentoring and developing other PMs while building product culture and organizational capabilities.
            </p>
            <p>
              I believe{" "}
              <span className="font-semibold text-gray-900 dark:text-white">great products come from empowered teams</span> with clear direction and growth support.
            </p>
          </div>
        </div>
      
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image20.png"
                  alt="Team management"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image21.png"
                  alt="Team management"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image22.png"
                  alt="Team engagement"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image23.png"
                  alt="Team engagement"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Mobile & Digital Products Creation */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              5
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            Mobile & Digital Products Creation
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              ✅ Architected{" "}
              <span className="font-semibold text-gray-900 dark:text-white">end-to-end product portfolios</span>{" "}
              — from strategic vision and discovery to launch and optimization.
            </p>
            <p>
              🚀 Delivered{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                multiple web, mobile, and backend products
              </span>{" "}
              across different industries and tech stacks (+12 and counting!).
            </p>
            <p>
              🔧 Tools: Jira, Confluence, Figma, Notion, Miro. Stakeholders love my
              roadmaps; devs love my documentation style & user stories.
            </p>
          </div>
        </div>
      
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <a
                href={URLS.productManagement.kidjo}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/images/image7.png"
                    alt="Kidjo TV"
                    width={5000}
                    height={5000}
                    className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </a>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image8.png"
                  alt="Product portfolio"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
          <p className="text-center text-gray-700 dark:text-gray-300 text-sm md:text-base mt-4">
            Product portfolio I have worked on.
          </p>
        </div>
      </Section>

      {/* Section 6: Data-driven Decision Making */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              6
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            Data-driven Decision Making
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              📈 I define success through data.
            </p>
            <p>
              I use custom KPIs, and dashboards to continuously{" "}
              <span className="font-semibold text-gray-900 dark:text-white">refine the product</span>.
            </p>
          </div>
        </div>
     
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/images/image15.png"
                    alt="Data dashboard spreadsheet"
                    width={5000}
                    height={5000}
                    className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </div>
              <div className="text-center space-y-1">
                <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base">
                  <a
                    href={URLS.productManagement.competitiveAnalysis1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200"
                  >
                    Click here
                  </a>{" "}
                  to check the full spreadsheet
                </p>
                <p className="text-gray-600 dark:text-gray-400 italic text-xs md:text-sm">
                  (permission is given from previous company)
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/images/image16.png"
                    alt="Data dashboard spreadsheet"
                    width={5000}
                    height={5000}
                    className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </div>
              <div className="text-center space-y-1">
                <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base">
                  <a
                    href={URLS.productManagement.competitiveAnalysis2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200"
                  >
                    Click here
                  </a>{" "}
                  to check the full spreadsheet.
                </p>
                <p className="text-gray-600 dark:text-gray-400 italic text-xs md:text-sm">
                  (permission is given from previous company)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 7: UX/UI & Customer Journey Optimization */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              7
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            UX/UI & Customer Journey Optimization
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              🎯 Improved user retention and conversion by{" "}
              <span className="font-semibold text-gray-900 dark:text-white">enhancing UX/UI across platforms</span>.
            </p>
            <p>
              🎨 Practiced in design thinking and usability-first approaches.
            </p>
            <p>
              Skilled in Figma, Adobe Suite, and collaborating on UI flows,
              wireframes, and prototypes.
            </p>
            <div className="pt-4 space-y-3">
              <p>
                <a
                  href={URLS.community}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200"
                >
                  Click here
                </a>{" "}
                to check <span className="font-semibold text-gray-900 dark:text-white">Community&apos;s Responsive Website</span> I
                created.
              </p>
              <p>
                <a
                  href={URLS.sushitimePortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200"
                >
                  Click here
                </a>{" "}
                to check <span className="font-semibold text-gray-900 dark:text-white">SushiTime&apos;s Responsive Website</span> I
                created.
              </p>
            </div>
          </div>
        </div>
     
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image13.png"
                  alt="UX/UI Design"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image14.png"
                  alt="UX/UI Design"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 8: Tech Literacy & Dev Collaboration */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              8
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            Tech Literacy &amp; Dev Collaboration
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              💻 I practice{" "}
              <span className="font-semibold text-gray-900 dark:text-white">vibe coding</span>, which is powerful for{" "}
              <span className="font-semibold text-gray-900 dark:text-white">prototyping and communicating goals</span>{" "}
              effectively with technical teams.
            </p>
            <p>
              ☁️ <span className="font-semibold text-gray-900 dark:text-white">AWS Certified Cloud Practitioner</span>{" "}
              — this certification brings confidence in tech discussions and orchestration, enabling me to make informed decisions about cloud architecture and infrastructure.
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">My tech knowledge helps bridge business strategy and technical execution.</span>
            </p>
          </div>
        </div>
   
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image18.png"
                  alt="Tech meeting"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/image19.png"
                  alt="Tech meeting"
                  width={5000}
                  height={5000}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
          <div className="text-center space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <p>
              It is a common practice for me to join tech meetings to support tech teams on the business vision.
            </p>
            <p className="italic text-gray-600 dark:text-gray-400">
              Images are blurred due to sensitive information.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 9: Release Management */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              9
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
            Release Management
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-8 text-center">
            <p>
              📁 Orchestrated <span className="font-semibold text-gray-900 dark:text-white">multi-platform go-to-market strategies</span>, ensuring smooth launches and version control across:
            </p>
            <ul className="list-none space-y-2 text-sm md:text-base text-gray-800 dark:text-gray-200">
              <li>• App Stores (Apple, Google, Galaxy, Huawei, Amazon)</li>
              <li>• Web and backend services</li>
            </ul>
            <p>
              🔁 Planned rollbacks and QA checkpoints to ensure release stability.
            </p>
          </div>
        </div>
   
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/image17.png"
                alt="Release Management"
                width={5000}
                height={5000}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Section 10: Professional Certificates */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              10
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center tracking-tight">
            Professional Certificates
          </h2>
          <ul className="space-y-1 text-sm md:text-base">
            <li className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-2 sm:-mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href={URLS.certifications.awsCloudPractitioner}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                Amazon Web Services (AWS) Certified Cloud Practitioner (CLF-C02)
              </a>
            </li>
            <li className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-2 sm:-mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href={URLS.certifications.cspo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                Certified Scrum Product Owner (CSPO®) - Scrum Alliance
              </a>
            </li>
            {/* <li className="flex items-start group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://drive.google.com/file/d/1oP66WzGIj7BK-GeqqpnMJxLtnZO-4o_1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                Scrum Foundation Professional Certificate (SFPC™)
              </a>
            </li> */}
            <li className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-2 sm:-mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href={URLS.certifications.googleUXDesign}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                Google UX Design
              </a>
            </li>
            <li className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-2 sm:-mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href={URLS.certifications.uxDesignProcess}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                The UX Design Process: Empathize, Define, and Ideate
              </a>
            </li>
            {/* <li className="flex items-start group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/S23L6DA6HTCP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                Build Wireframes and Low-Fidelity Prototypes
              </a>
            </li> */}
            {/* <li className="flex items-start group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/V6K67N9QGMNQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                Create High-Fidelity Designs and Prototypes in Figma
              </a>
            </li> */}
            {/* <li className="flex items-start group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://hermes.digitalinnovation.one/certificates/04C61931.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                MySQL
              </a>
            </li> */}
            {/* <li className="flex items-start group hover:bg-gray-50 rounded-lg p-3 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://hermes.digitalinnovation.one/certificates/EDAF1C7E.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors duration-200 flex-1"
              >
                First Steps to Code
              </a>
            </li> */}
          </ul>
        </div>
      </Section>

      {/* Section 11: Recent Impact & Outcomes */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              11
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
              Recent Impact & Outcomes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              Key contributions across high-scale products and teams
            </p>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* dubizzle Group */}
            <div className="bg-gradient-to-br from-red-50 dark:from-red-900/20 to-white dark:to-gray-800 rounded-xl p-6 border-2 border-red-200 dark:border-red-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-xl">
                  🏢
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">dubizzle Group</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-100 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-600">🚀</span>
                    <span className="font-semibold text-gray-900 dark:text-white">New Vertical Launch:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Launched a new vertical embedded with payment solutions, while coordinating with multiple internal stakeholders (ops, legal, marketing, devs, finance, etc.)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-100 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-600">🤖</span>
                    <span className="font-semibold text-gray-900 dark:text-white">AI-Powered Feature:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Improved user efficiency & decision-making</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-100 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-600">🔄</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Horizontal Experience:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Worked in the horizontal of the app experiencing multiple verticals</p>
                </div>
                <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-700 dark:text-red-400 font-semibold">Impact:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 rounded-md">⚡ Reduced transaction friction</span>
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 rounded-md">↑ User satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Akkodis */}
            <div className="bg-gradient-to-br from-yellow-50 dark:from-yellow-900/20 to-white dark:to-gray-800 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Akkodis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-yellow-100 dark:border-yellow-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-600">👥</span>
                    <span className="font-semibold text-gray-900 dark:text-white">10M+ Users:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">End-to-end journey ownership across mobile, tablet & TV</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-yellow-100 dark:border-yellow-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-600">🎯</span>
                    <span className="font-semibold text-gray-900 dark:text-white">30+ Initiatives & Projects:</span>
                  </div>
                  <div className="ml-6 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">Led diverse initiatives including:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 dark:text-gray-300 ml-2">
                      <li>Launch of new product for company portfolio</li>
                      <li>Backend service + database migration for <strong className="text-gray-700 dark:text-gray-200">3M+ active users</strong></li>
                      <li>Integrations with <strong className="text-gray-700 dark:text-gray-200">15 different partners</strong></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-yellow-100 dark:border-yellow-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-600">👨‍🏫</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Team Coaching:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Led 7 engineers → ↑ sprint predictability & delivery speed</p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-700 dark:text-yellow-400 font-semibold">Impact:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 rounded-md">💰 Increased revenue</span>
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 rounded-md">📱 New apps & integrations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DX.CO */}
            <div className="bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-white dark:to-gray-800 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-xl">
                  🍔
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">DX.CO</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Product Owner</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-purple-100 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600">🍔</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Food Delivery App:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Managed from start to finish, leading a team of <strong className="text-gray-800 dark:text-gray-200">15 devs/QA/designers</strong></p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-purple-100 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600">📊</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Conversion & Retention:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Features increased order completion & reduced churn</p>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-700 dark:text-purple-400 font-semibold">Impact:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 rounded-md">⚡ Operational efficiency</span>
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 rounded-md">↑ Customer retention</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AIESEC */}
            <div className="bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-white dark:to-gray-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-xl">
                  🌍
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">AIESEC</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">🌍</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Global SaaS Initiatives:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Rolled out solutions in <span className="font-semibold text-gray-800 dark:text-gray-200">128+ countries</span></p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">💰</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Financial Model Change Management:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Led the financial model change management for the company</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">👨‍🏫</span>
                    <span className="font-semibold text-gray-900 dark:text-white">PM Coaching:</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-6">Guided 12 PMs → ↑ cross-team agile knowledge</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-700 dark:text-blue-400 font-semibold">Impact:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 rounded-md">🌍 Scalable usability</span>
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 rounded-md">🏆 Leadership & process improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Outcomes Summary */}
          <div className="bg-gradient-to-br from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 rounded-xl p-6 md:p-8 border-2 border-gray-300 dark:border-gray-700 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-2xl">
                💥
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Overall Outcomes Across Roles</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-700">📈</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Revenue & Growth:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Increased revenue through new products, integrations, and strategic initiatives</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-700">🤝</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Cross-Functional Leadership:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Managed complex stakeholder relationships across ops, legal, marketing, devs, finance, and led teams of 7–15 members</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-700">🚀</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Large-Scale Delivery:</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Delivered 30+ initiatives including product launches, backend migrations for 3M+ users, and financial model transformations</p>
              </div>
            </div>
          </div>

          {/* Commented out image */}
          {/* <div className="max-w-3xl mx-auto mt-8">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group cursor-pointer">
              <Image
                src="/images/image24.png"
                alt="Outcomes"
                width={5000}
                height={5000}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div> */}
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/50 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight">
            Let&apos;s build something impactful.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={getEmailLink(URLS.social.emailBusiness)}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base"
            >
              📧 Email Me
            </a>
            <a
              href={URLS.social.linkedinShort}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm md:text-base"
            >
              🔗 Connect on LinkedIn
            </a>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-8">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/image25.png"
                alt="Let's build something users love"
                width={5000}
                height={5000}
                className="object-contain w-full h-auto max-w-2xl mx-auto transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ProductManagement;
