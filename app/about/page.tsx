"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { URLS, getEmailLink } from "@/constants/urls";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/shared/Button";

const About = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f0f] scroll-smooth overflow-x-hidden" data-testid="about-page">
      <Header currentPage="about" />

      {/* Hero Section */}
      <Section className="my-16 px-8 sm:px-12 lg:px-24 xl:px-32 bg-white dark:bg-[#0f0f0f] py-12">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-0">
            {/* Text on Left - matches body text container exactly */}
            <div className="max-w-3xl text-center md:text-left w-full md:w-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
                <div className="mb-4">
                  <span className="inline-block">🎨 </span>
                  <span className="font-bold">artist</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block">✈️ </span>
                  <span className="font-bold">traveler</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block">🍣 </span>
                  <span className="font-bold">sushi lover</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block">👩‍💻 </span>
                  <span className="font-bold">product</span>
                  <span className="text-cyan-600 italic font-bold">er</span>
                </div>
              </h1>
            </div>
            {/* Image on Right */}
            <div className="flex-shrink-0 w-full md:w-auto max-w-sm md:ml-4">
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src="/images/image26.png"
                    alt="person holding a camera by the parthenon in athens"
                    width={5000}
                    height={5000}
                    className="object-contain w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section className="my-24 px-8 sm:px-12 lg:px-24 xl:px-32 bg-white dark:bg-[#0f0f0f] py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
            <p className="text-base md:text-lg indent-8">
              Born and raised in Brazil by a German dad and a Brazilian mom, I am currently based in 📍{" "}
              <span className="font-bold text-gray-900 dark:text-white">Dubai</span>. I am passionate about helping organizations transform user problems into seamless experiences at scale.
            </p>
            <p className="text-base md:text-lg indent-8">
              I&apos;ve worked with Product Management on the technology industry, working side by side with product, developing and UX teams.
            </p>
            <p className="text-base md:text-lg indent-8">
              I&apos;m currently based in Dubai, working as a <span className="font-bold text-gray-900 dark:text-white">Product Manager at Dubizzle</span>, where I lead product initiatives across our platform to enhance user experience and drive business growth.
            </p>
            <p className="text-base md:text-lg indent-8">
              When I&apos;m not designing, you will find me drawing with watercolors (
              <Button
                variant="ghost"
                size="sm"
                href={URLS.social.behance}
                className="inline font-normal underline italic p-0 min-w-0 h-auto text-base md:text-lg"
              >
                check them here
              </Button>
              ), playing on my ps5, planning my next trip or inventing a new recipe in my kitchen.
            </p>
            <p className="text-base md:text-lg indent-8">
              Want to know more about my Product Manager experience?{" "}
              <Button
                variant="ghost"
                size="sm"
                href={URLS.routes.productManagement}
                internal
                className="inline font-normal underline p-0 min-w-0 h-auto text-base md:text-lg"
              >
                View Product Manager Portfolio
              </Button>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Call-to-Action Section */}
      <Section className="my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#111111] py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-8">
            Let&apos;s build something users love.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="md"
              href={getEmailLink(URLS.social.emailBusiness)}
            >
              📧 Email Me
            </Button>
            <Button
              variant="secondary"
              size="md"
              href={URLS.social.linkedinShort}
            >
              🔗 Connect on LinkedIn
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default About;

