import { ContactSection } from "@/features/landing/components/contact-section";
import { DifferentiatorsSection } from "@/features/landing/components/differentiators-section";
import { HeroSection } from "@/features/landing/components/hero-section";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import { LandingHeader } from "@/features/landing/components/landing-header";
import { ServicesSection } from "@/features/landing/components/services-section";
import { TrustBar } from "@/features/landing/components/trust-bar";

export function LandingPageContent() {
  return (
    <>
      <LandingHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <DifferentiatorsSection />
        <ContactSection />
      </main>
      <LandingFooter />
    </>
  );
}
