"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { URLS, getEmailLink } from "@/constants/urls";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Section } from "@/components/shared/Section";

const About = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-white scroll-smooth overflow-x-hidden" data-testid="about-page">
      <Header currentPage="about" />

      {/* Hero Section */}
      <Section className="my-16 px-8 sm:px-12 lg:px-24 xl:px-32 bg-white py-12">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-0">
            {/* Text on Left - matches body text container exactly */}
            <div className="max-w-3xl text-center md:text-left w-full md:w-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
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
      <Section className="my-24 px-8 sm:px-12 lg:px-24 xl:px-32 bg-white py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-800 leading-relaxed text-justify">
            <p className="text-base md:text-lg indent-8">
              Born and raised in Brazil by a German dad and a Brazilian mom, I am currently based in 📍{" "}
              <span className="font-bold">Dubai</span>. I am passionate about helping organizations transform user problems into seamless experiences at scale.
            </p>
            <p className="text-base md:text-lg indent-8">
              I&apos;ve worked with Product Management on the technology industry, working side by side with product, developing and UX teams.
            </p>
            <p className="text-base md:text-lg indent-8">
              I&apos;m currently based in Dubai, working as a <span className="font-bold">Product Manager at Dubizzle</span>, where I lead product initiatives across our platform to enhance user experience and drive business growth.
            </p>
            <p className="text-base md:text-lg indent-8">
              When I&apos;m not designing, you will find me drawing with watercolors (
              <a
                href={URLS.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline italic"
              >
                you can check them here!
              </a>
              ), playing on my ps5, planning my next trip or inventing a new recipe in my kitchen.
            </p>
            <p className="text-base md:text-lg indent-8">
              Want to know more about my Product Manager experience?{" "}
              <Link
                href={URLS.routes.productManagement}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                You can find my Product Manager Portfolio by clicking here
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Call-to-Action Section */}
      <Section className="my-24 md:my-32 px-4 sm:px-6 lg:px-8 bg-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-8">
            Let&apos;s build something users love.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </Section>

      <Footer />
    </main>
  );
};

export default About;

