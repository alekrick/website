"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

// Reusable Section component with scroll-triggered animation
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
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

export default function ProductManagement() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkdCZ1NCNGaAiMUzJ4EfULNTFljwpFdZKEhPpSzprgbpz7ONw0CVHqad-G0Q9AEXDM4VXEnA82-mzE3frpa9Vpn52W0Vt_5IV2vLdB2-y7rBl6YMcHK-cfRHKDjrVakCrASjgCxoiY821_CKI0j-6k_l7kcXJdOR3sq9RDPsaetALikNv2j8XZlB=w16383"
                alt="Alessandra Krick Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/product-management"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Product Management
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            👋 Hi, I&apos;m Alessandra Krick
          </h1>
          <div className="space-y-4 text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed">
            <p>
              A <span className="font-semibold text-blue-600">Product Manager</span>{" "}
              specialized in mobile and digital products.
            </p>
            <p>
              I&apos;ve led products with a combined{" "}
              <span className="font-semibold text-gray-900">10M+ userbase</span>, from
              strategy to go-to-market across web, mobile, and smart TVs.
            </p>
            <p className="pt-4">
              📍 Based in Dubai |{" "}
              <a
                href="mailto:akrickbusiness@gmail.com"
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
              >
                Email
              </a>{" "}
              |{" "}
              <a
                href="https://linkedin.com/in/alessandrakrick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
              >
                LinkedIn
              </a>
            </p>
            <p className="pt-6 text-gray-700">
              Here&apos;s how I&apos;ve been managing{" "}
              <span className="font-semibold text-gray-900">impactful products</span>:
            </p>
          </div>
        </div>
      </Section>

      {/* Section 1: Mobile & Digital Products Creation */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              1
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Mobile & Digital Products Creation
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8 text-center">
            <p>
              ✅ Own <span className="font-semibold text-gray-900">end-to-end product lifecycle</span>{" "}
              — from strategy and discovery to launch and optimization.
            </p>
            <p>
              🚀 Delivered{" "}
              <span className="font-semibold text-gray-900">
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
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <a
                href="https://kidjo.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkfLcNp0bJJYlrOLhOAso2q9NFAMQoIARMcnmr9QwkrOYT0F7QaV0fyAT3t2D7oYw2s4poylc7SxyD-etgGx-wufEIXAr69TD7A5j0JQ3BIj2fPkH4uQAvg4BG4SQgtqusjeJ90mUGv1uhbW6u3c7Eg42UUNVnSRAjzWVqMmGZ41TSMBQybvtLnuU_GKtRpxeIePLt56-52bz4qGWXYKA0TPKZJ05X9OEsBWZNo=w1280"
                  alt="Kidjo TV"
                  width={1280}
                  height={720}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCke5x7gz5FNpvhE6NddGXnRdRmcmqqm2U6WzilVP3NGprH7nvXfIQf3Kxq01YKyg6icPM6mwQEY-ipTT9fCJvtsnztv-o9hgcVa5QcOOJbnNZJg4mpLb_Bulp1llH7aq9JBUNRLcnfku-OSqDGcwPlpJX6TI_2fxwWjSZS8_fkOouHn8VGvyTpVAg_HYvh30fklvwTi7V1G4oXgiA-B-XXSyUXTwaDAFShUu=w1280"
                alt="Product portfolio"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-center text-gray-700 text-sm md:text-base mt-4">
            Latest product portfolio I have worked on.
          </p>
        </div>
      </Section>

      {/* Section 2: Product Strategy and Roadmap */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              2
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Product Strategy and Roadmap
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8 text-center">
            <p>
              🧭 Developed and executed{" "}
              <span className="font-semibold text-gray-900">
                outcome-oriented product strategies and roadmaps
              </span>
              .
            </p>
            <p>
              Aligned cross-functional teams on long-term vision while shipping
              incremental value.
            </p>
          </div>
        </div>
      
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkcNAThTpnEjb1vfhNIqRpRSwmTHPjR9cz3520cAh5UUIFlH95FHBS3e-KuPQnCHGESnxAIc1kRITY7akO5wECjLGnn74Uf_c8s4eO5whWq6p3LPc2tN2z7I2hLrrM9m3fWkRUfjApKUWem9LhiirQh_TlR_dyhxyI1vqQS5H7bSKv52rjqaN6pPcX5J_zB2qCs4MKfiwgm6X36O1ai8yQ258YoaZrrIsd33Lfw=w1280"
              alt="Product Strategy"
              width={1280}
              height={720}
              className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </Section>

      {/* Section 3: Cross-functional Leadership & Agile */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              3
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Cross-functional Leadership & Agile
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8 text-center">
            <p>
              🤝 Led <span className="font-semibold text-gray-900">Agile ceremonies</span> and{" "}
              <span className="font-semibold text-gray-900">empowered teams</span> across design, dev
              and QA.
            </p>
            <p>
              🌀 Expertise in <span className="font-semibold text-gray-900">Scrum</span> and sprint
              planning, driving alignment and velocity across squads.
            </p>
          </div>
        </div>
      
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkcnJ_RolruqLnbpMwxDUURu-RCWefXjP0KaqvyJhI6dPTW9as0sN0mCNjb2Cmp5v2a2SZQ8e4FZ7gp87quYHWHFacbFflJDb6ndw-PlAekhunsaU1lyi17h6MUMhbriTtIx-jmTt4jV3nsbOkcQBSqr8MFBhg2JWVQ6KTwplUhtU7I2TdW7hEiUqgHDHS222SvaG2mtIuNLHfDhN1XMoK8sH620xYnMvW-1=w1280"
                  alt="Planning poker"
                  width={1280}
                  height={720}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-center italic text-gray-700 text-xs md:text-sm">
                All user stories must be measured. I usually use planning poker for
                it.
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkeBgw1W98H3fK7bWONqrPS734meVhhEEZoldLEumkJD35XwcSQWiC21x2_-3EAgpfHr4QbHu6DcW9gIrSOTqmXPegU6r8D8sUQc2Rn5xBFZ5lRfPioNoNKAck29b_eUtZ5ItKBONQ1mTA3-gmhF3BrKV1HV1IpIyW9oxyLOP5rQGTgqYxG-F4945ZV6exz5M33CwVsTJx-RHXWDICGFTNTppc44RLLChyFV=w1280"
                  alt="Sprint burndown"
                  width={1280}
                  height={720}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-center italic text-gray-700 text-xs md:text-sm">
                Every daily I get our sprint burndown chart to check on our progress.
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkcMEW62RvQ7q5_xO15m1JeoKm7HAkAqbylJY4t5H9M5lbqYO-4GBaOcNPZvwPo6vQxvxltM8xNgrvjpeYq-fwptc6pYQCoK8EFy4wVS1AKorCE8ueJJeS5RwIWdSwS0HOpGqEukURhtgwkwV4MciEVqkUjWBwVaM6HH01mwvpfW2xJvArb2W8kE6ozdRylthB3QPLxuPw_DuyIHEKWtqSWnajKwXZZVUYHSs_c=w1280"
                  alt="Reviews and Retrospectives"
                  width={1280}
                  height={720}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-center italic text-gray-700 text-xs md:text-sm">
                Reviews and Retrospectives are my favorite. I always like to bring a
                theme to them.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: UX/UI & Customer Journey Optimization */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              4
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            UX/UI & Customer Journey Optimization
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8 text-center">
            <p>
              🎯 Improved user retention and conversion by{" "}
              <span className="font-semibold text-gray-900">enhancing UX/UI across platforms</span>.
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
                  href="https://www.alessandrakrick.com/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
                >
                  Click here
                </a>{" "}
                to check <span className="font-semibold text-gray-900">Community&apos;s Responsive Website</span> I
                created.
              </p>
              <p>
                <a
                  href="https://www.alessandrakrick.com/sushitime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
                >
                  Click here
                </a>{" "}
                to check <span className="font-semibold text-gray-900">SushiTime&apos;s Responsive Website</span> I
                created.
              </p>
            </div>
          </div>
        </div>
     
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkfL5JcNG5I_kj1GQGEKQmZlFv8lPuKbN8EaEYoQvUbSm0wFNN2rWw-BkZOlPfLfvY2JP1sj6W3w88awjS-TDH-dqyCBSsMO3RejGrFeFx592jw1APbuOo1Xez8xmkQiBWlv6pyXFQ77VOU_tEoTDd5BSR-eAfK_wXg2TA3QaGDB5XdJ6dYEo8QjYDDaOkpbDuUT3qEnsU7GhnubK6nYO4KYMeQzlWC5X97n=w1280"
                alt="UX/UI Design"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCke1OYfW9xymtLaypIPRcO_cNrKsb1_Hcf7rHyXH7_viE9Kl5W4vl_LoJfF9Duk_xZe_qNBOYm-o4IDkSMGsThiuicG--yj7-Grx-k7oM9U73_EoHa6fCKcw5_5mBaUfWnuLeeuUnBf2DXu2Xdwyc8SQJn4xqdSy54y61CmPiNF4prrTApegUhG3L0-APGmPodV9UnRk1fMmQjtaxJr40TpwdUrYHLd3i-g0huU=w1280"
                alt="UX/UI Design"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Data-driven decision making */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              5
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Data-driven decision making
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8 text-center">
            <p>
              📈 I define success through data.
            </p>
            <p>
              I use custom KPIs, and dashboards to continuously{" "}
              <span className="font-semibold text-gray-900">refine the product</span>.
            </p>
          </div>
        </div>
     
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkfLUSmH-d0e9LcpWjRyJzl1lWTbagR_uj_xPL7LksASPQFMp69fum2MeSetq_meHP1AF9qdFvCzRUCIYuLaiRA2cxmeSDeHYURXW8jQovCouEQ8-JHSXt26beKB1Y9gMIwuArTQsUE5FJfJOkH-Wk1UQ9HxNkd2gRsVdntYsgUqizJP5chXaSvN4vH88r5tmkZOLXKuRqtC7YwG57r6jLb-gJXp1UOBg6IN=w1280"
                  alt="Data dashboard spreadsheet"
                  width={1280}
                  height={720}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-gray-800 text-sm md:text-base">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1Obi_cOczZAoxdOtFGsu8PmoCawwZDtfF816jK-3tkpA/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
                  >
                    Click here
                  </a>{" "}
                  to check the full spreadsheet
                </p>
                <p className="text-gray-600 italic text-xs md:text-sm">
                  (permission is given from previous company)
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkc9Gj_j9pYWKYIqOsVoI3bmgkbpckDM5hspHSDN4EaE7jHewYnPm_iOD_ImhdLLOolJrNvsf5yggBPoIy3US1uNHhyoZ2es70JmlLgKC9y6eiRCs32VLfqSON6OGsEEMs8SU0p_6qDCB__Yi2aBRtzeuhZmqkOqvh8zj_w-n8qHlhg9LJ90lYeSBMRTuvFR5QhCoda7dBOd-H7Mrvp-BId0HEPkSuWsuC8OJog=w1280"
                  alt="Data dashboard spreadsheet"
                  width={1280}
                  height={720}
                  className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-gray-800 text-sm md:text-base">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1VwMu0K5-sAh6854EKRO0cIADZChZFhO62YVe9xzevpw/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
                  >
                    Click here
                  </a>{" "}
                  to check the full spreadsheet.
                </p>
                <p className="text-gray-600 italic text-xs md:text-sm">
                  (permission is given from previous company)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 6: Release Management */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              6
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Release Management
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8 text-center">
            <p>
              📁 Managed <span className="font-semibold text-gray-900">multi-platform releases</span>, ensuring smooth launches and version control across:
            </p>
            <ul className="list-none space-y-2 text-sm md:text-base text-gray-800">
              <li>• App Stores (Apple, Google, Galaxy, Huawei, Amazon)</li>
              <li>• Web and backend services</li>
            </ul>
            <p>
              🔁 Planned rollbacks and QA checkpoints to ensure release stability.
            </p>
          </div>
        </div>
   
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
            <Image
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkc3GB-I2SvYHAkWsLNXv1S4GoK5WLoeNLrmLCMkf0rCyHs7cbfA42ixHorTd2NoNoGm4ujhuKwKxkbWRvj9hkNf6SgduRgygTM0DNUKxvBMhS2cikPlfJhywykONXkjJvoHKVf7iy1nXiVkmCE8_VZWw9tSKD6BRdN98z1WltIkpCHDMbW9PD6-wJVWY7_GlPIMUBeDgk-z7YuwO4CLAkCdxNt56WYGoRzQ2gM=w1280"
              alt="Release Management"
              width={1280}
              height={720}
              className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </Section>

      {/* Section 7: Tech Literacy & Dev Collaboration */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              7
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Tech Literacy &amp; Dev Collaboration
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8 text-center">
            <p>
              🧑‍💻 Not a daily coder — but{" "}
              <span className="font-semibold text-gray-900">I speak the language</span>.
            </p>
            <p>
              Familiar with frontend/backend architecture, AWS (S3, EC2, CloudFront, etc.), and CI/CD best practices.
            </p>
            <p>
              <span className="font-semibold text-gray-900">My tech knowledge helps bridge business strategy and technical execution.</span>
            </p>
          </div>
        </div>
   
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkd-OEIadNe7h7hfGRazAzbQJ2GkrYZmsi8Q1EiA-1kfh5pLZhrq987RsE85hxOI99puI13B5aUkBceJbiODQfIbgaOWeE0bTu-2PYJgmPymlXVL9LF3SoocfS4l08Zhzn0h1WFWoAv-Vl7xiaGQ85HVxKrKyVFc1HYEl2tjfMg5vTNd8uYGdR1fP7e6TcLgzLchorW9he_g4DKOfZ_oMXau8gCjeNkQmtAj=w1280"
                alt="Tech meeting"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkd3CwKtbFEzgTHGbwtxeUfvMA6tob9-VlSERQ4ulYaMDMSoDrXpziJx6RinuczK7iwaG69xS1EJtehml32dDfVFzYGZbiN2YAhpPQ_atMDERYrAx-InsagpVaq0auLJ18o0R4NSwDoQADD2lNMr-RI6VGKS4FtNi_P8rfLad4rC80COotu9lNKdDv6Lho27-U1vr1ub9dOUwbv7jxPYdCcD0Bc6T16rYJwSiI8=w1280"
                alt="Tech meeting"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="text-center space-y-2 text-gray-700 text-sm md:text-base">
            <p>
              It is a common practice for me to join tech meetings to support tech teams on the business vision.
            </p>
            <p className="italic text-gray-600">
              Images are blurred due to sensitive information.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 8: Team Engagement & Management */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              8
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Team Engagement &amp; Management
          </h2>
          <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed mb-8 text-center">
            <p>
              👥 Managed and coached teams of{" "}
              <span className="font-semibold text-gray-900">200+</span> across sales, dev, QA, and design, remotely and on-site.
            </p>
            <p>
              I believe{" "}
              <span className="font-semibold text-gray-900">great products come from empowered teams</span> with clear direction and growth support.
            </p>
          </div>
        </div>
      
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkdkylAKB9GkXWWPWm0my9bhbUp3Ugxe--ltRy_z7SC0RB4Ut54y8f9q7WusbM236aT76_zZtJQvzg6A3qJO-vaMr8rsqV9Y7pYm9N6Rgv_CqJri8DYjqAENzwCdsBKPpDif7hVyXQZ-NCoUmTzF0AAFcmWPQyybbw_GN9JA4cK7NOfp-OF0Sfi-M3ilxlh58fkU_qy1gv32TNYLiNdsPhPpWayQ7fhypXob6B0=w1280"
                alt="Team management"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkduFmtVUP5nLmEhhAnA7wtWIzOdMHK7lCBH5xr-ruoquHJ7OjdeAOhdVqoqa6qXsd3FpAp0jIYZH0WT716PFDumIhrcGO48TIhmlL_jlF2FyABlq2Xue2RuEhqKo-r_5fiyDEH-0uYWHMNxDbTX72rT4GReJjNCdkw8CPSWKDcfAxYW82q0MiGUVC9-4779h5HmhFtC344ACKN38Y-BHeDR_HEStVbtwANxmSg=w1280"
                alt="Team management"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkc3kNrua2cW1sMdbIRGanWSV1eoURMAL8a5XV4t5TzR6mkvShS-2jLhhYjXqJBKnsT7-JUa2I5BD-YIUqUPe0uA6zRBGDK3Rv1NY7ns7IylkFjE4avaPXsNunl-edp97qxOKn8QNOH-4UGva6xk0Q_F4vSY8rV06VZvoZcpP7THdtft8vIrWx8pPlTv1qJlyV4Bpog94Gn3t-70Sm3rL_17MPR43mmzNLD_J5U=w1280"
                alt="Team engagement"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkca6nAuK8CsakEXc6yr7Z7e_EZoL0rVVqFvFMmZ0yY8K09f-U53Sz6IUUySoUu8K_GD1KazpMiqiUVTLkqMthyML097ZPyj2jcWFwT43MNkeckNZjhMWCV2Fcp004dCtnBC-Oq99YNIaHTjZVeM5RZRVVXRkt38pGrd2x0XnE-EFJ9vAiJMnuzvE40ziVGjpORuW97Q_FAE_8N9rE3yQ6gteEMsXXKaBHBk104=w1280"
                alt="Team engagement"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Section 9: Professional Certificates */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              9
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center tracking-tight">
            Professional Certificates
          </h2>
          <ul className="space-y-1 text-sm md:text-base">
            <li className="flex items-start group hover:bg-gray-50 rounded-lg p-2 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://bcert.me/bc/html/show-badge.html?b=nnlrtfdl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
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
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
              >
                Scrum Foundation Professional Certificate (SFPC™)
              </a>
            </li> */}
            <li className="flex items-start group hover:bg-gray-50 rounded-lg p-2 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://www.coursera.org/account/accomplishments/professional-cert/FDJ5CWJATB55"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
              >
                Google UX Design
              </a>
            </li>
            <li className="flex items-start group hover:bg-gray-50 rounded-lg p-2 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/HAJHW94EHNNT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
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
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
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
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
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
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
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
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
              >
                First Steps to Code
              </a>
            </li> */}
            <li className="flex items-start group hover:bg-gray-50 rounded-lg p-2 -mx-3 transition-colors duration-200">
              <span className="text-blue-600 mr-3 mt-1 font-semibold">•</span>
              <a
                href="https://www.credly.com/users/alessandra-krick/badges#credly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200 flex-1"
              >
                Amazon Web Services (AWS) badges
              </a>
            </li>
          </ul>
        </div>
      </Section>

      {/* Section 10: Outcomes */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl md:text-4xl font-bold shadow-lg mb-4">
              10
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
              Recent Impact & Outcomes
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Key contributions across high-scale products and teams
            </p>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* dubizzle Group */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-xl">
                  🏢
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">dubizzle Group</h3>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-600">🚀</span>
                    <span className="font-semibold text-gray-900">New Vertical Launch:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Launched a new vertical embedded with payment solutions, while coordinating with multiple internal stakeholders (ops, legal, marketing, devs, finance, etc.)</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-600">🤖</span>
                    <span className="font-semibold text-gray-900">AI-Powered Feature:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Improved user efficiency & decision-making</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-600">🔄</span>
                    <span className="font-semibold text-gray-900">Horizontal Experience:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Worked in the horizontal of the app experiencing multiple verticals</p>
                </div>
                <div className="bg-red-100 rounded-lg p-3 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-700 font-semibold">Impact:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white px-2 py-1 rounded-md">⚡ Reduced transaction friction</span>
                    <span className="bg-white px-2 py-1 rounded-md">↑ User satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Akkodis */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border-2 border-yellow-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Akkodis</h3>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded-lg p-3 border border-yellow-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-600">👥</span>
                    <span className="font-semibold text-gray-900">10M+ Users:</span>
                  </div>
                  <p className="text-gray-700 ml-6">End-to-end journey ownership across mobile, tablet & TV</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-yellow-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-600">🎯</span>
                    <span className="font-semibold text-gray-900">30+ Initiatives & Projects:</span>
                  </div>
                  <div className="ml-6 space-y-2">
                    <p className="text-gray-700">Led diverse initiatives including:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 ml-2">
                      <li>Launch of new product for company portfolio</li>
                      <li>Backend service + database migration for <strong>3M+ active users</strong></li>
                      <li>Integrations with <strong>15 different partners</strong></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-yellow-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-600">👨‍🏫</span>
                    <span className="font-semibold text-gray-900">Team Coaching:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Led 7 engineers → ↑ sprint predictability & delivery speed</p>
                </div>
                <div className="bg-yellow-100 rounded-lg p-3 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-700 font-semibold">Impact:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white px-2 py-1 rounded-md">💰 Increased revenue</span>
                    <span className="bg-white px-2 py-1 rounded-md">📱 New apps & integrations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DX.CO */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-xl">
                  🍔
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">DX.CO</h3>
                  <p className="text-sm text-gray-600">Product Owner</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded-lg p-3 border border-purple-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600">🍔</span>
                    <span className="font-semibold text-gray-900">Food Delivery App:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Managed from start to finish, leading a team of <strong>15 devs/QA/designers</strong></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600">📊</span>
                    <span className="font-semibold text-gray-900">Conversion & Retention:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Features increased order completion & reduced churn</p>
                </div>
                <div className="bg-purple-100 rounded-lg p-3 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-700 font-semibold">Impact:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white px-2 py-1 rounded-md">⚡ Operational efficiency</span>
                    <span className="bg-white px-2 py-1 rounded-md">↑ Customer retention</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AIESEC */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-xl">
                  🌍
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">AIESEC</h3>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">🌍</span>
                    <span className="font-semibold text-gray-900">Global SaaS Initiatives:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Rolled out solutions in <span className="font-semibold">128+ countries</span></p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">💰</span>
                    <span className="font-semibold text-gray-900">Financial Model Change Management:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Led the financial model change management for the company</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">👨‍🏫</span>
                    <span className="font-semibold text-gray-900">PM Coaching:</span>
                  </div>
                  <p className="text-gray-700 ml-6">Guided 12 PMs → ↑ cross-team agile knowledge</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-3 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-700 font-semibold">Impact:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white px-2 py-1 rounded-md">🌍 Scalable usability</span>
                    <span className="bg-white px-2 py-1 rounded-md">🏆 Leadership & process improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Outcomes Summary */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 md:p-8 border-2 border-gray-300 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-2xl">
                💥
              </div>
              <h3 className="font-bold text-xl text-gray-900">Overall Outcomes Across Roles</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-700">📈</span>
                  <span className="font-semibold text-gray-900">Revenue & Growth:</span>
                </div>
                <p className="text-gray-700">Increased revenue through new products, integrations, and strategic initiatives</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-700">🤝</span>
                  <span className="font-semibold text-gray-900">Cross-Functional Leadership:</span>
                </div>
                <p className="text-gray-700">Managed complex stakeholder relationships across ops, legal, marketing, devs, finance, and led teams of 7–15 members</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-700">🚀</span>
                  <span className="font-semibold text-gray-900">Large-Scale Delivery:</span>
                </div>
                <p className="text-gray-700">Delivered 30+ initiatives including product launches, backend migrations for 3M+ users, and financial model transformations</p>
              </div>
            </div>
          </div>

          {/* Commented out image */}
          {/* <div className="max-w-3xl mx-auto mt-8">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkemniWL6d8C0d41alsseBfibVpgXY55_H-9rp4BMjB0FXjgZ5BU1th6R6HrgfKTPGHVGq5t9BEPG2MNyVqig-QSlqfoae2U0XOEMtAaK_xzEzGLWO2NsI3k4WbTYOzfcKknRXGT4vmYD7xsCoL4fW-u2FygXZ8rfC_tuAffvuITEvm03SjmLazoF_OzguwQd28ALzLDI7x0-l35pCPbKa7oQFTN5vq2EB-UbPA=w1280"
                alt="Outcomes"
                width={1280}
                height={720}
                className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div> */}
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="my-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
            Let&apos;s build something impactful.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:akrickbusiness@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base"
            >
              📧 Email Me
            </a>
            <a
              href="https://linkedin.com/in/alessandrakrick"
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
            <Image
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkeQBJ-e3oKH1qubnBVSQrXn25sgjLcZWneJR_1ymXcUf-SMlQTf01f6Wye53F4IMy39wEG_zZNdOkImPK14h6un45HGSBlBjnlugpzMIgO7TMsTncBsqtWZqfCE4DDrJumsDNix9Xr1gXgdEuKnZVG5liRb5CncOqbSGLH7rd1h7Y2XFhNPqgvlL5ZmuvsTPPWpaMOAIVF92dAy-3hf0tMdicEA_hrULCaT=w1280"
              alt="Let's build something users love"
              width={1280}
              height={720}
              className="object-contain w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Alessandra Krick. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/alessandrakrick/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 duration-300"
              >
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkfN4HmAWIgnQKn4lHnrCKcG02znsznqgmoyHRpvGn9Ka193Pujit8OhJVxexE0vDAx2O9EZ38LkyLKvlYp9ssSW3Fg9og_Lt0mPX8AfHc6drXpOJQdmLLjEBwd0bfEBGxXoLNU2bvT-0cRBbJCZh-v57QaoOXsRnKhG8qc-8EmeDEYqxajx49NRNvw-jgdaVlYnWrXgFIYA9M0C"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              </a>
              <a
                href="mailto:akrick.business@gmail.com"
                className="transition-transform hover:scale-110 duration-300"
              >
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkewqWGdG8MJgD1ugUQY6P1DporBiqprvvN8YlBvYYRijwurXT9bX6TH6Wc32SOdY66X8VAKdUIuAxVLX-GqubRpC78XNNWSurn6HE8tJPPG03aStNyHls94ZzXrzdRUhVfv9f5_88TygZVj16RddsFskmBoPnGWidO3wZrGchGztNsmnA_7rDq_JWCBLx1pFofcx3KoNdNOgA"
                  alt="Email"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
