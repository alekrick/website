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

export default function SushiTime() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <main className="min-h-screen bg-white scroll-smooth overflow-x-hidden">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/homepage" className="flex items-center">
              <Image
                src="/images/image1.png"
                alt="Alessandra Krick Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/homepage"
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
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Product Management
              </Link>
              <Link
                href="/graphic-design"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Graphic Design
              </Link>
              <Link
                href="/sushitime"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                SushiTime
              </Link>
              <a
                href="https://drive.google.com/file/d/1C5lVcUF5hkwpRnfnHAN0YH4z2duQ0c4p/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Community
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col items-center gap-4 mt-4 py-2 border-t border-gray-200">
              <Link
                href="/homepage"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                About
              </Link>
              <Link
                href="/product-management"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                Product Management
              </Link>
              <Link
                href="/graphic-design"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                Graphic Design
              </Link>
              <Link
                href="/sushitime"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
              >
                SushiTime
              </Link>
              <a
                href="https://drive.google.com/file/d/1C5lVcUF5hkwpRnfnHAN0YH4z2duQ0c4p/view"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                Community
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section with Background Image */}
      <motion.section 
        className="relative w-full h-96 md:h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url(https://lh3.googleusercontent.com/sitesv/AAzXCkcnNNxkIQfcRJQt1I98wqvlIBCEveuBpr0bR9pgIoyep2aLB0U8d8p4Na3GY3JZysbRP5Z5B15igPj7kwwBRWtSQeqvCr7tjEnlb5yMShTg3gM4X-l8EFnbQazqzKoOtlwc-84FvejFnHmdGTOMw8eWGCk13WZrts8IzktULksCQIehaG_U9sTZSCE=w16383)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.section>

      {/* Project Info Section */}
      <Section className="mt-4 mb-16 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center items-center">
            <div>
              <p className="text-base md:text-lg font-bold text-gray-900 mb-2">Project:</p>
              <p className="text-base md:text-lg text-gray-700">SushiTime</p>
            </div>
            <div>
              <p className="text-base md:text-lg font-bold text-gray-900 mb-2">Role:</p>
              <p className="text-base md:text-lg text-gray-700">Concept, Research, Visuals</p>
            </div>
            <div>
              <p className="text-base md:text-lg font-bold text-gray-900 mb-2">Duration:</p>
              <p className="text-base md:text-lg text-gray-700">June - Oct 2022</p>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1wB24f9fhkcqpviWdNsyiiSs7UfYuGySi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200"
              >
                PROCESS DECK →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* The Problem & Goal Section - Two Column */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* The Problem */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">The problem</h2>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed list-disc list-inside">
                <li>Long wait in sushi places;</li>
                <li>Low clarity on the ingredients&apos; quantities for the day, leading to waste.</li>
              </ul>
            </div>
            {/* The Goal */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">The goal</h2>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed list-disc list-inside">
                <li>Improve sushi lovers&apos; experiences in their favorite sushi places;</li>
                <li>Decrease the amount of ingredients gone to waste;</li>
                <li>Less time waiting, more time having fun.</li>
              </ul>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkeHnlBHwQCzvHSOvRPpM6QVH983s2lweasviXF8tLuTbwRZfApQebsNvK2Zv2qk_Wpy2MIMSJ1SZLCiEFbn64UH1TBUltRNSM_i58ENxiqRq3FPUEJ3Awvj9zBCbbY0rJVYJuSFMfFtzE4i0KWI06uKcb7E5W_YiAfS_368-cUVGvkmLaZGBUYOtIQ=w1280"
                alt="SushiTime project"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[500px]"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Kick-off Section - Two Column */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Kick-off</h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                For initiating the project, I have started with an UX Research to validate the Project&apos;s goals and discover other pains and needs users might have to enrich the product.
              </p>
              <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                After the research, personas were drawn. To start the ideation process, I runned a <em>competitive analysis</em> with direct and indirect competitors.
              </p>
              <ul className="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed list-disc list-inside ml-4">
                <li>Initial questions</li>
                <li>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1VtVRUdrxZjK7czGwlnc7Nr0siXia-oQz/edit?usp=sharing&ouid=117693731879484145211&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Competitive analysis →
                  </a>
                </li>
              </ul>
            </div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkcmYpJGxfJGQIfEuVailXGPf7OH6oekr5ywFbWCQYi_ZsYhUS3TmLiMIlq8YBAvESsmnESWnWXbDTf_CXSlsYIC5544RGXe9j_gkZKjmS1G3nb0FtOS0jmh9YgHXZKjC7-oSyuS285ex89voLxCuI2zO7Sx85lVrVCMLb6c7cZlzMOLykKUSs_54ro=w16383"
                alt="Kick-off research"
                width={1280}
                height={720}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Meet the Users Section */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center leading-tight">Meet the users</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkd24qRvW6P-lkFVGIEBq5-EByvVDhkBJvKd65jSUInn0xLzo0rOQUsdj5vAbyPV3fluxQSvSVZuusRuu-RXZ2jDirPMzkDXCksisUCjk5768A2cQsME3cJLCSGoXeKIhi9xnvBgXf_Z1VOUKXsaWML_Wby8Ez8aaxtUyaBHLGAfWeskYeoCv7WCLzN_ZjiCyTXPXecrcIK3SWYWy7vnhnQ-bgScnJHAbu4A054=w1280"
              alt="User personas"
              width={1280}
              height={720}
              className="w-full h-auto object-contain max-h-[400px]"
              unoptimized
            />
          </motion.div>
        </div>
      </Section>

      {/* Information Architecture Section */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center leading-tight">Information Architecture</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkd_HyTCQDayP_UJLStkPqkd8LD455JZhLBROHSw_QV2tGzv8qmNAygIaOps0wsFJ6N0vTtLW3RNbyzG1TzGCsTN5PWOoCQaPwzrs01q3NHzrt0U9uZglKMg5uHUDtKSdoghmiI7j3TGUlgECpesPLEcg9Dr6l0ACUaTJFOgFgMtXxwf-IzTKAz41VS1rAEtAFGtOa92CYhEHIf9IEoa3YuALL6NglbXe9Yo=w1280"
              alt="Information Architecture"
              width={1280}
              height={720}
              className="w-full h-auto object-contain max-h-[700px]"
              unoptimized
            />
          </motion.div>
        </div>
      </Section>

      {/* Paper Wireframes Section */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center leading-tight">Paper Wireframes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkfGQnz4RjL8KXlz8LduYRV_XLBsBq6P-ZqyB0Ys2Ax7jcokZIYiumyi-YD-AOjK9-V9hDn2UrMw4xEyC22VlBG7j0GjZqlP5dUQPax4M5beoYvf0lXCgRUggQwSa8dOFf4IOg2rS57I_qxEmH3lkkn5Bs9ljNafJUJykKma6ut_uk6tBhBZvLPzvyWfMiHF2bEN5jh7jLtHGCh5yPWWQMQqOwAyRO5szUB_=w1280"
                alt="Paper Wireframes 1"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[250px]"
                unoptimized
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkcWE_N46kfxPQ_aghYFw9X1-Ab0xbQrpuXkfCS0PWB77MlwOKAqdXDFQ02oAXhsxC7PuF5fS49KIxRtvWNCSgj9RtXAItR5iYuoCLrairl3zUzWMAugihBWD-BfwX9KN97Db7pznEFFlPGKjKAr2p13qTcyRAUYGaNehvJsLd_-8fC6YyyKJOFt2SwhcrXd8hzEDVx9G-Y8ep3OdKJRVSZtYsXOURFqMLtyJfw=w1280"
                alt="Paper Wireframes 2"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[250px]"
                unoptimized
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkdba0shtsUdPjAscOaa1Iv9zqZb5ZiDstWADGdP0vcFnAg546rxR1C33cNz8tV9g_Iyc-hYTgvXyUhVsOaDmEYDzRCOBTTkYpnYL5nslOOykxjl-TbUhiAdBoqBu4NZ_qIPFRooJSuUayvkYk2zl9RxxkylP7c9XdzRAqEDcdB4YNIjbdTjLSeYYf3-D8MR_y11WeQsGdDU3-P6EwdXffZpxaCGUiVkTMTjnaA=w1280"
                alt="Paper Wireframes 3"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[250px]"
                unoptimized
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkfhtMNljZi7Lunx5KdEcT30A-3SdxNccs8HtexORdmc3r5KezQqae20Sbfs5ybqqt88hNB-TgU6gw1qpG9efpFnVZknDcMUQUKKcx7pT7e_h8cTmsUwnWqmzk2xtPhTLR5UUdlttvR9o6fPiXW7KWRMR9LotbHCjztQNziykwbgIlhy1vz44b04o6wvPfGubnVL6kbQvDlxb06ZcF_2JLMVEFCHIu6sKNFEz2k=w1280"
                alt="Paper Wireframes 4"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[250px]"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Wireflow Section */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center leading-tight">Wireflow</h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            After the competitive audit, the wireframes were created for initial usability tests with users.
          </p>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            Once ideas and flows were validated, I made a high-fidelity prototype and tested it once again. Iterations were made on the design to make it more user-friendly according to insights gathered on a second usability test.
          </p>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            <a
              href="https://www.figma.com/proto/Bd3abeEQ3YGj9mipaPy78z/Sushi-APP?node-id=314%3A1136&scaling=scale-down&page-id=3%3A706&starting-point-node-id=314%3A1136"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Check the High-Fidelity Prototype in Figma →
            </a>
          </p>
          <p className="text-gray-700 text-sm md:text-base italic leading-relaxed mb-12">
            Obs.: only the main flow was drawn.
          </p>
          
          {/* Wireflow Image */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkcjnXen465WfKM5VClIr2HBQUHEc33AMtC63vVCeSzepehQJka8fFcUsqiN_votShnsZG6najERDmHZKfrGhgTILgkmuV_WFa01oWG__5DkVE2r8CSl-2qZ3HYrI6zDOUIQhoB-LNF69AJK3Dj0zihs3koU1V7TsoU9T-I_O4teKMcVZdJMYKJHLXeYzHImlkwjmQ3e4lx0wqqX595QK7PMaeKoqJ80WKN6cA8=w1280"
                alt="Wireflow"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[500px]"
                unoptimized
              />
            </motion.div>
          </div>

          {/* High-Fidelity Prototype Image */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkciAnVg3EqdwtL_g2se7wE3XCx6glLD9L8QllClXSCrZiaEcjTj--pes5mWeWUuOMqM-JzbcEVp_cUzyM6tNPORNDE8b2oDVyUwMWKQLMfefHWqkpbd3XeGeXTRWYglwporkbBa8hK_bsCOn8EhV_Ja04r6XS4pqpptyI-5vC1H9jNX_Hsc8IMNeLGiHex-zEBFf0dox2JqzTeAFX7YR7spf5UqBQLYF6JW6Z8=w1280"
                alt="High-Fidelity Prototype"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[500px]"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Challenge 1: A Familiar Experience */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="px-0 md:px-4">
              <h3 className="text-xl font-bold text-red-500 mb-2">CHALLENGE 1</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">A Familiar Experience</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Application stores are fulfilled with ordering apps. I want to make it easy and simple for a person to reserve the table and food. Therefore, it is maintained a similar flow as restaurant-related applications basing on <em>Gestalt&apos;s similarity principles</em>. The users won&apos;t waste time to learn something completely new.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full px-0 md:px-4"
            >
              <Image
                src="/images/image27.png"
                alt="Challenge 1 - A Familiar Experience"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[500px]"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Challenge 2: "Where should I eat today?" */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="px-0 md:px-4">
              <h3 className="text-xl font-bold text-red-500 mb-2">CHALLENGE 2</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">&quot;Where should I eat today?&quot;</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The user can explore different restaurants by checking their menus in advance. Rating is also provided based on other users&apos;s experiences. Features such as proximity and best offers can be developed as well.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full px-0 md:px-4"
            >
              <Image
                src="/images/image28.png"
                alt="Challenge 2 - Where should I eat today"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[500px]"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Challenge 3: Connecting Friends */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="px-0 md:px-4">
              <h3 className="text-xl font-bold text-red-500 mb-2">CHALLENGE 3</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Connecting Friends</h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                Users can invite friends for a Sushi Party on the checkout. Each person can add their own order. Once everyone is ready, the party leader can checkout.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Less fuzzle. More fun.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full px-0 md:px-4"
            >
              <Image
                src="/images/image29.png"
                alt="Challenge 3 - Connecting Friends"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[500px]"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Challenge 4: Financial Wise for Restaurants */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="px-0 md:px-4">
              <h3 className="text-xl font-bold text-red-500 mb-2">CHALLENGE 4</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Financial Wise for Restaurants</h2>
              <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                If items are added to the cart, it is mandatory for the user to pay in advance. Customer didn&apos;t show up? The restaurant won&apos;t have a financial loss.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Restaurant owners can also plan with more certainty the amount of ingredients to prepare for the day.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full px-0 md:px-4"
            >
              <Image
                src="/images/image30.png"
                alt="Challenge 4 - Financial Wise for Restaurants"
                width={1280}
                height={720}
                className="w-full h-auto object-contain max-h-[500px]"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Style Guide Section */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center leading-tight">Style Guide</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkcVG5I67UdkCgtY_VJw5XwD2a9fA2_rGTo8kbafF-6pwOIRqJS8tqCuiKEbI3TZxDaZ-RU0dG_EskHU2NF93QaYGFTO__xAPoxqP8iwq--i8dlKhZxsKsUFeY1B-ws5YeTsfYo1OFFFnGsjOB4cJV6ZeZA388FBlFvylAwvpIjTtvwXweGORKobpvP3L03LZJsn2-pN16gjqLP8PsgXmZp_zk2yGMuXvEEt=w1280"
              alt="Style Guide"
              width={1280}
              height={720}
              className="w-full h-auto object-contain max-h-[700px]"
              unoptimized
            />
          </motion.div>
        </div>
      </Section>

      {/* Style Guide Carousel */}
      <Section className="my-16 mb-8 px-4 sm:px-6 lg:px-8 bg-white py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <Image
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkcqMhaNPis-pcXJw-l6PWuCHv8YjbS2cKBqPE5bgTpNowy2W9Pa0wLw613Lk-_96bvRTe6njTeuB66fRR05SjQerZRIb7t63mA0bl7NPg6ZdwmT6z39ylTdTftb3YY5CwYrdPE9jof0atLQx8I_LyWQAOSFBxkAmAAL7jaPy7jkyK5g5pmkbaSw=w16383"
              alt="Style Guide Carousel 1"
              width={1280}
              height={1024}
              className="w-full h-auto object-contain max-h-[400px]"
              unoptimized
            />
          </motion.div>
        </div>
      </Section>

      {/* Takeaways Section */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center leading-tight">Takeaways</h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
              As a sushi lover and a person who loves trying new sushi places, this first complete UX project of mine is extremely dear to me. Designing this app has showed me that sticking to the process will bring you good results. No good application will be made without conducting proper UX Researches and Usability Tests. The more iterations with real users before handing the final design to the production team, the better!
          </p>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
              Also, as a person who has worked as Product Manager before, I recognize how some past product problems could be solved by sticking to UX Processes basics as conducted above.
          </p>
          <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed">
            Thank you for reading until here!
          </p>
        </div>
      </Section>

      {/* Process Deck Link Section */}
      <Section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://drive.google.com/file/d/1n5BOGluz3eefZ_VTs8tcFtMbqpe6LmzT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200 mb-4"
          >
            PROCESS DECK →
          </a>
          <p className="text-gray-600">
            <Link href="/community" className="text-blue-600 hover:text-blue-800 underline italic">
              or Check my next project →
            </Link>
          </p>
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
                className="transition-transform hover:scale-110 duration-300"
              >
                <Image
                  src="/images/linkedin-icon.png"
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
                  src="/images/email-icon.png"
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

