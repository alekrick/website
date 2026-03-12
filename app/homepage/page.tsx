"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { URLS, getEmailLink } from "@/constants/urls";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Section } from "@/components/shared/Section";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { Button } from "@/components/shared/Button";
import { CountUp } from "@/components/product-management/CountUp";

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

const Home = (): JSX.Element => {
  const isScrollingDown = useScrollHeader();

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f0f] scroll-smooth overflow-x-hidden" data-testid="homepage">
      <Header isScrollingDown={isScrollingDown} currentPage="homepage" />

      {/* Hero Section */}
      <Section className="relative my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0f0f0f] overflow-hidden">
        {/* Subtle animated radial glow — top-right */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-[480px] w-[480px] md:h-[520px] md:w-[520px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),rgba(59,111,232,0.06)_40%,transparent_70%)] animate-pulse-glow"
          aria-hidden
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left order-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-200 mb-2 font-light"
              >
                👋 hello, i&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
              >
                Alessandra Krick
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-bold text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl mb-2 tracking-tight"
              >
                I build products from{" "}
                <span className="relative inline-block">
                  0 to 1.
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-900 dark:bg-white origin-left animate-underline-draw" />
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base text-gray-600 dark:text-gray-300 mb-4"
              >
                Three continents. Gaming, food-tech, marketplaces. 10M+ users on one end, zero on the other.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm md:text-base text-gray-600 dark:text-gray-200 mb-6"
              >
                📍 Based in Dubai
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-row gap-4 justify-center md:justify-start"
              >
                <Button variant="primary" size="md" href={URLS.routes.productManagement} internal>
                  View My Work
                </Button>
                <Button variant="secondary" size="md" href={getEmailLink(URLS.social.emailBusiness)}>
                  Email Me
                </Button>
              </motion.div>
            </div>
            
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 order-2"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/image2.png"
                    alt="Alessandra Krick"
                    width={256}
                    height={256}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Stats strip */}
      <Section className="my-24 md:my-32 px-0 bg-gray-50/50 dark:bg-[#161616] border-y border-gray-200 dark:border-[#2a2a2a] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="px-6 py-4 text-center md:border-r border-gray-200 dark:border-[#2a2a2a]"
            >
              <span className="font-bold text-gray-900 dark:text-white text-3xl md:text-4xl tabular-nums">
                <CountUp end={6} id="home-years" duration={1.2} />
              </span>
              <p className="mt-1 text-xs text-gray-500 dark:text-[#888888] uppercase tracking-[0.2em]">Years of experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="px-6 py-4 text-center md:border-r border-gray-200 dark:border-[#2a2a2a] border-t border-gray-200 dark:border-[#2a2a2a] md:border-t-0"
            >
              <span className="font-bold text-gray-900 dark:text-white text-3xl md:text-4xl tabular-nums">
                <CountUp end={10} suffix="M+" id="home-users" duration={1.2} />
              </span>
              <p className="mt-1 text-xs text-gray-500 dark:text-[#888888] uppercase tracking-[0.2em]">Users impacted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-6 py-4 text-center md:border-r border-gray-200 dark:border-[#2a2a2a] border-t border-gray-200 dark:border-[#2a2a2a] md:border-t-0"
            >
              <span className="font-bold text-gray-900 dark:text-white text-3xl md:text-4xl tabular-nums">
                <CountUp end={12} suffix="+" id="home-products" duration={1.2} />
              </span>
              <p className="mt-1 text-xs text-gray-500 dark:text-[#888888] uppercase tracking-[0.2em]">Products shipped</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="px-6 py-4 text-center border-t border-gray-200 dark:border-[#2a2a2a] md:border-t-0"
            >
              <span className="font-bold text-gray-900 dark:text-white text-3xl md:text-4xl tabular-nums">
                <CountUp end={3} id="home-continents" duration={1.2} />
              </span>
              <p className="mt-1 text-xs text-gray-500 dark:text-[#888888] uppercase tracking-[0.2em]">Continents</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          {/* Featured: Product Management — full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group mb-8"
          >
            <Link href={URLS.routes.productManagement} className="block">
              <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-sm bg-gray-100 mb-4 group-hover:shadow-md transition-shadow duration-300">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/image3.png"
                    alt="Product Management"
                    width={5000}
                    height={5000}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
                {/* Bottom gradient overlay — deepens on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                {/* FEATURED WORK badge */}
                <span className="absolute top-4 left-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  FEATURED WORK
                </span>
              </div>
              <p className="uppercase tracking-[0.2em] text-xs text-gray-500 dark:text-[#888888] mb-2">Featured work</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Product Management</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                6 years of 0-to-1 builds across mobile, gaming, food-tech and marketplace. Real teams, real outcomes.
              </p>
              <span className="inline-block text-gray-900 dark:text-white text-sm font-medium group-hover:underline mb-12">
                View case studies →
              </span>
            </Link>
          </motion.div>

          {/* Secondary cards: SushiTime + Community */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <Link href={URLS.routes.sushitime} className="block rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src="/images/image4.png"
                      alt="SushiTime"
                      width={5000}
                      height={5000}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.25)] to-transparent" aria-hidden />
                </div>
                <div className="border-l-2 border-gray-700 dark:border-gray-400 pl-4 py-4 pr-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">SushiTime</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mobile app UX case study</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <a href={URLS.community} target="_blank" rel="noopener noreferrer" className="block rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src="/images/image5.png"
                      alt="Community"
                      width={5000}
                      height={5000}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.25)] to-transparent" aria-hidden />
                </div>
                <div className="border-l-2 border-gray-700 dark:border-gray-400 pl-4 py-4 pr-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">Community</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Responsive website UX case study</p>
                </div>
              </a>
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-[#888888]">
            Also:{" "}
            <a
              href={URLS.graphicDesignPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 underline hover:text-gray-900 dark:hover:text-white"
            >
              Graphic Design Work (Logos) →
            </a>
          </p>
        </div>
      </Section>

      {/* Call-to-Action Section */}
      <Section className="relative my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-[#161616] py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            Let&apos;s build something users love.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="md"
              href={getEmailLink(URLS.social.emailBusiness)}
            >
              Email Me
            </Button>
            <Button
              variant="secondary"
              size="md"
              href={URLS.social.linkedinShort}
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default Home;
