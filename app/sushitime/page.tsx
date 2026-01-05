"use client";

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "@/components/sushitime/HeroSection";
import { ProjectInfoSection } from "@/components/sushitime/ProjectInfoSection";
import { ProblemGoalSection } from "@/components/sushitime/ProblemGoalSection";
import { KickoffSection } from "@/components/sushitime/KickoffSection";
import { ImageSection } from "@/components/sushitime/ImageSection";
import { PaperWireframesSection } from "@/components/sushitime/PaperWireframesSection";
import { WireflowSection } from "@/components/sushitime/WireflowSection";
import { ChallengeSection } from "@/components/sushitime/ChallengeSection";
import { TakeawaysSection } from "@/components/sushitime/TakeawaysSection";
import { ProcessDeckSection } from "@/components/sushitime/ProcessDeckSection";
import { useScrollHeader } from "@/hooks/useScrollHeader";

const SushiTime = (): JSX.Element => {
  const isScrollingDown = useScrollHeader();

  return (
    <main className="min-h-screen bg-white scroll-smooth overflow-x-hidden" data-testid="sushitime-page">
      <Header isScrollingDown={isScrollingDown} currentPage="sushitime" />

      <HeroSection />

      <ProjectInfoSection />

      <ProblemGoalSection />

      <KickoffSection />

      <ImageSection
        title="Meet the users"
        imageSrc="/images/image34.png"
        imageAlt="User personas"
        maxHeight="max-h-[400px]"
        bgColor="gray"
      />

      <ImageSection
        title="Information Architecture"
        imageSrc="/images/image35.png"
        imageAlt="Information Architecture"
        maxHeight="max-h-[700px]"
        bgColor="white"
      />

      <PaperWireframesSection />

      <WireflowSection />

      <ChallengeSection
        challengeNumber={1}
        title="A Familiar Experience"
        description={
          <>
            Application stores are fulfilled with ordering apps. I want to make it easy and simple for a person to reserve the table and food. Therefore, it is maintained a similar flow as restaurant-related applications basing on <em>Gestalt&apos;s similarity principles</em>. The users won&apos;t waste time to learn something completely new.
          </>
        }
        imageSrc="/images/image27.png"
        imageAlt="Challenge 1 - A Familiar Experience"
        bgColor="gray"
      />

      <ChallengeSection
        challengeNumber={2}
        title='"Where should I eat today?"'
        description="The user can explore different restaurants by checking their menus in advance. Rating is also provided based on other users's experiences. Features such as proximity and best offers can be developed as well."
        imageSrc="/images/image28.png"
        imageAlt="Challenge 2 - Where should I eat today"
        bgColor="white"
      />

      <ChallengeSection
        challengeNumber={3}
        title="Connecting Friends"
        description={
          <>
            <p className="mb-6">Users can invite friends for a Sushi Party on the checkout. Each person can add their own order. Once everyone is ready, the party leader can checkout.</p>
            <p>Less fuzzle. More fun.</p>
          </>
        }
        imageSrc="/images/image29.png"
        imageAlt="Challenge 3 - Connecting Friends"
        bgColor="gray"
      />

      <ChallengeSection
        challengeNumber={4}
        title="Financial Wise for Restaurants"
        description={
          <>
            <p className="mb-6">If items are added to the cart, it is mandatory for the user to pay in advance. Customer didn&apos;t show up? The restaurant won&apos;t have a financial loss.</p>
            <p>Restaurant owners can also plan with more certainty the amount of ingredients to prepare for the day.</p>
          </>
        }
        imageSrc="/images/image30.png"
        imageAlt="Challenge 4 - Financial Wise for Restaurants"
        bgColor="white"
      />

      <ImageSection
        title="Style Guide"
        imageSrc="/images/image42.png"
        imageAlt="Style Guide"
        maxHeight="max-h-[700px]"
        bgColor="gray"
      />

      <ImageSection
        title=""
        imageSrc="/images/image43.png"
        imageAlt="Style Guide Carousel 1"
        maxHeight="max-h-[400px]"
        bgColor="white"
      />

      <TakeawaysSection />

      <ProcessDeckSection />

      <Footer />
    </main>
  );
};

export default SushiTime;
