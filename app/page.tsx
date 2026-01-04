"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

// Text scroll component for design phases (currently not used)
// const TextScroll = ({ finalText, phases, duration = 2 }: { finalText: string; phases: string[]; duration?: number }) => {
//   const [currentText, setCurrentText] = useState("");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     const element = document.getElementById(`text-scroll-${finalText}`);
//     if (element) {
//       observer.observe(element);
//     }

//     return () => {
//       if (element) {
//         observer.unobserve(element);
//       }
//     };
//   }, [finalText, isVisible]);

//   useEffect(() => {
//     if (!isVisible) return;

//     let currentPhaseIndex = 0;
//     const phaseDuration = (duration * 1000) / (phases.length + 1);

//     const interval = setInterval(() => {
//       if (currentPhaseIndex < phases.length) {
//         setCurrentText(phases[currentPhaseIndex]);
//         currentPhaseIndex++;
//       } else {
//         setCurrentText(finalText);
//         clearInterval(interval);
//       }
//     }, phaseDuration);

//     return () => clearInterval(interval);
//   }, [isVisible, phases, finalText, duration]);

//   return (
//     <span id={`text-scroll-${finalText}`}>
//       {currentText || phases[0]}
//     </span>
//   );
// };

export default function Home() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
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
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
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
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Product Management
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <Section className="my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 mb-2 font-light"
              >
                👋 hello, i&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
              >
                Alessandra Krick
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-gray-700 mb-2"
              >
                A <span className="font-semibold text-blue-600">Product Manager</span> specialized in mobile and digital products.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-gray-700 mb-4"
              >
                Senior Product Manager
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm md:text-base text-gray-600"
              >
                📍 Based in Dubai
              </motion.p>
            </div>
            
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 order-1 md:order-2"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-lg">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AAzXCkeChyI1XLcCBgMMO3dXFQNH-ES3AH8tJw3xvSMl7dJRqU_fmORJBm_bqSH8gRvbO7_EL22gs2h6bPeILI83gHZ7bW2c0RdgwKM6lb7mzqTtWQMaIGWc1NLxH9YR_7nWiQu__yOhUCndcarIPnUdneEskRdi5reaNxQv3H1QOlucVLB9HfFeeWHjnXKOdnXiesA-nr8SqzhylkJAcGzXg3KZYRnc2ZN7ZXs8=w1280"
                  alt="Alessandra Krick"
                  width={256}
                  height={256}
                  className="object-contain w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section className="my-16 md:my-24 px-4 sm:px-6 lg:px-8 bg-white">
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
              <div className="text-gray-700 text-sm md:text-base lowercase">years of experience</div>
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
              <div className="text-gray-700 text-sm md:text-base lowercase">users impacted</div>
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
              <div className="text-gray-700 text-sm md:text-base lowercase">people led</div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Highlight Cards */}
      <Section className="my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Scale & Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale & Platforms</h3>
              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3">
                <p>
                  Multi-platform product delivery across marketplaces, ecommerce, and entertainment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    Mobile, web & TV
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    Google Play, Apple App Store
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    10M+ users
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Customer Journey Ownership */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Journey Ownership</h3>
              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3">
                <p>
                  End-to-end ownership from problem framing to post-launch optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    Engagement
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    Completion
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    Retention-driven
                  </span>
                </div>
              </div>
            </motion.div>

            {/* AI & Data-Driven */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Data-Driven</h3>
              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3">
                <p>
                  AI-powered features and data-led decisions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    Dashboards
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    Experimentation
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium">
                    Real-world impact
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link href="/product-management" className="block">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-100 mb-4">
                  <Image
                    src="https://lh3.googleusercontent.com/sitesv/AAzXCkcpXt-DU-n6nFdxTcXlBXpGslJzbjnwmf64D44URndDV6MAYZQW-6c_MciIiJoK5deC3sRTw4CpL1toho0HfznnqanVHNmN2l_3bz7sTcBK8vN_bcQHCO242fYtBI_JGyuQllnhF1a4jCttj45pxzE5H4F6NulRgiRUfi0YPXi99o0Mv2QCJeZZPhLGGlHdrhaPAx6hm41ard1a5JXpvhrAw_YT1EQs6ShcMkM=w1280"
                    alt="Product Management"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Product Management →
                </p>
              </Link>
            </motion.div>

            {/* SushiTime */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <a href="https://www.alessandrakrick.com/sushitime" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-100 mb-4">
                  <Image
                    src="https://lh3.googleusercontent.com/sitesv/AAzXCkcfEN1Yyo4yyn_2_vGX7PVVE5nTFTfSx55gXPtAgLs2fPwKqq_3IArJUJdxQm4q_ineDmhB_VWU2JmMT8GicXxdrCtMSP86pXjAzuR3aXeIuRP9LEsBp73Y94AOdImKD4Hk3kJoAXGkdGSWClWQsUIlfmBYqcP5ecxWJOZlzwnTq3Qkn8lU1rViN9gJcB21YGF4QVuyEgpFtEjQfLNaQNMuzDIKnPom6OqRi7g=w1280"
                    alt="SushiTime"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  SushiTime →
                </p>
              </a>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <a href="https://www.alessandrakrick.com/community" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-100 mb-4">
                  <Image
                    src="https://lh3.googleusercontent.com/sitesv/AAzXCkfZyQNqn0mBasi2tZUWrXHPD4p9WmQUPy_Z1Q2S5_3k0TH9PyJw9IuI_FJjENhYcBvwZJ-0WGu3bmPVN9ZE3-X2zghN57rt6LUYZGGPQp0YCX-oZ6Alie73APJ3Ch4UK9pNgkdyuTicEa7RwK41zZqPi4e0jHz-CtONqU4QR6bjxSzjLUlDspcS7lFsp3H3rPFMzIU2Zcdu2M1nSoMqsSfBoX8id2PUdzKc=w1280"
                    alt="Community"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Community →
                </p>
              </a>
            </motion.div>

            {/* Graphic Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <a href="https://www.alessandrakrick.com/graphic-design" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-100 mb-4">
                  <Image
                    src="https://lh3.googleusercontent.com/sitesv/AAzXCkdmBYhyfu09pwXRxQZkwiKe7as30bhyOpJvdVLRvbUtfjMxaB8CJrVi6_4nRT7PZZ1G9G4ruMwNng-E8Q1GIL8E9ncCQBpsnIH4j3uJu-9STuUegxmay5a63dtTlAzAk5TykgEkDaVx4JJ1pJfBvZOQ3ex437ut4KF_iuH0BFuXAtAckBAU_8ccP0FDJhkSr2MQezRIe46_smXOcsJLxA_eV1QUvK74imNKdPE=w1280"
                    alt="Graphic Design"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Graphic Design Work (Logos) →
                </p>
              </a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Call-to-Action Section */}
      <Section className="my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-8">
            Let&apos;s build something users love.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </Section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-24">
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
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:akrickbusiness@gmail.com"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
