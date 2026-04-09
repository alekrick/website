"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { useScrollHeader } from "@/hooks/useScrollHeader";

const HeroSection = dynamic(() => import("@/components/product-management/HeroSection").then((m) => ({ default: m.HeroSection })), { ssr: false });
const CaseStudiesSection = dynamic(() => import("@/components/product-management/CaseStudiesSection").then((m) => ({ default: m.CaseStudiesSection })), { ssr: false });
const BehindTheWorkSection = dynamic(() => import("@/components/product-management/BehindTheWorkSection").then((m) => ({ default: m.BehindTheWorkSection })), { ssr: false });
const SkillsSection = dynamic(() => import("@/components/product-management/SkillsSection").then((m) => ({ default: m.SkillsSection })), { ssr: false });
const CertificatesSection = dynamic(() => import("@/components/product-management/CertificatesSection").then((m) => ({ default: m.CertificatesSection })), { ssr: false });
const ImpactNumbersSection = dynamic(() => import("@/components/product-management/ImpactNumbersSection").then((m) => ({ default: m.ImpactNumbersSection })), { ssr: false });
const CtaSection = dynamic(() => import("@/components/product-management/CtaSection").then((m) => ({ default: m.CtaSection })), { ssr: false });

const ProductManagement = (): JSX.Element => {
  const isScrollingDown = useScrollHeader();

  return (
    <main
      className="min-h-screen bg-white dark:bg-[#0f0f0f] scroll-smooth overflow-x-hidden"
      data-testid="product-management-v2-page"
    >
      <Header isScrollingDown={isScrollingDown} currentPage="product-management" />

      <HeroSection />
      <CaseStudiesSection />
      <BehindTheWorkSection />
      <SkillsSection />
      <CertificatesSection />
      <ImpactNumbersSection />
      <CtaSection />

      <Footer />
    </main>
  );
};

export default ProductManagement;
