import { generatePageMetadata } from "@/lib/metadata";
import MonetizationExperimentLayout from "@/components/monetization/MonetizationExperimentLayout";
import InlineAdExperiment from "@/components/monetization/InlineAdExperiment";
import BannerAdExperiment from "@/components/monetization/BannerAdExperiment";
import SponsoredCardExperiment from "@/components/monetization/SponsoredCardExperiment";

export const metadata = generatePageMetadata({
  title: "Ad Lab",
  description: "Researching the interaction between monetization systems and premium UX.",
});

/**
 * Ad Lab Page
 * 
 * RATIONALE:
 * - Isolated research environment for monetization.
 * - Uses standardized experiment layout for scalability.
 * - Centralized registry of experiments for the Lab ecosystem.
 */
export default function AdLabPage() {
  const experimentMetadata = {
    status: 'Placeholder Only' as const,
    category: 'Monetization',
    validated: false,
  };

  return (
    <MonetizationExperimentLayout
      title="Monetization Systems"
      description="Exploring how modular advertising can coexist with a calm, editorial design system without compromising performance or user experience."
      metadata={experimentMetadata}
    >
      <InlineAdExperiment />
      
      <hr className="border-border/30" />
      
      <BannerAdExperiment />
      
      <hr className="border-border/30" />
      
      <SponsoredCardExperiment />
    </MonetizationExperimentLayout>
  );
}
