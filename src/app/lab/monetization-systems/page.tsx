import { generatePageMetadata } from "@/lib/metadata";
import LabExperimentLayout from "@/components/lab/LabExperimentLayout";
import { 
  ExperimentOverview, 
  SystemNotes, 
  IterationNotes, 
  FrictionNotes, 
  FrictionPoint, 
  EcosystemImpact 
} from "@/components/lab/LabExperimentComponents";
import InlineAdExperiment from "@/components/monetization/InlineAdExperiment";
import BannerAdExperiment from "@/components/monetization/BannerAdExperiment";
import SponsoredCardExperiment from "@/components/monetization/SponsoredCardExperiment";
import { getArticleBySlug } from "@/lib/mdx";
import { experiments } from "@/data/experiments";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Monetization Systems Lab",
  description: "Researching the architectural isolation of third-party commercial layers to preserve ecosystem performance and calm UX.",
});

export default function MonetizationLabPage() {
  const experimentId = "monetization-systems";
  const experiment = experiments.find(e => e.id === experimentId);
  
  const relatedArticles = (experiment?.relatedArticles || [])
    .map(slug => getArticleBySlug(slug))
    .filter((a): a is any => a !== null);

  return (
    <LabExperimentLayout
      title="Monetization Systems"
      description="Exploring the intersection of performance-first commercialization and premium editorial design."
      status="Active Exploration"
      relatedArticles={relatedArticles}
      readingTime="8 min read"
      updatedDate="2026-05-14"
    >
      <ExperimentOverview why="Monetization systems often damage user experience through layout shifts and performance degradation. We are exploring how to integrate commercial layers without compromising ecosystem integrity.">
        <p>
          Sustainable platforms require monetization, but traditional "ad-tech" is often at odds with <strong>Calm Luxury</strong> design. This experiment tests the hypothesis that monetization can be a first-class architectural citizen—isolated, reversible, and performance-aware.
        </p>
      </ExperimentOverview>

      <SystemNotes>
        <p>
          The architecture focuses on <strong>Isolation & Reversibility</strong>—a core ecosystem tenet detailed in our <Link href="/writing/why-reversible-architecture-matters-in-early-systems">Foundational Essay</Link>. Every monetization component is sandboxed to ensure that third-party scripts never block the main thread or impact core vitals like LCP and CLS.
        </p>
        <ul>
          <li><strong>Isolated Integration</strong>: Ad scripts are loaded via non-blocking, asynchronous pipelines.</li>
          <li><strong>Layout Stability</strong>: Using fixed-ratio containers to prevent Cumulative Layout Shift (CLS).</li>
          <li><strong>Provider Agnostic</strong>: The system is designed to swap providers (AdSense, Direct, etc.) without foundational changes.</li>
        </ul>
      </SystemNotes>

      <div className="py-12 space-y-16">
        <div className="bg-surface-secondary/20 p-8 rounded-2xl border border-border">
          <h4 className="text-xs uppercase tracking-widest text-content-tertiary mb-8 font-normal">Active System Prototypes</h4>
          <div className="space-y-16">
            <InlineAdExperiment />
            <hr className="border-border/30" />
            <BannerAdExperiment />
            <hr className="border-border/30" />
            <SponsoredCardExperiment />
          </div>
        </div>
      </div>

      <IterationNotes>
        <p>
          Our iteration process centers on <strong>UX Validation</strong> and performance observation. We don&apos;t just measure revenue; we measure the "cost of attention."
        </p>
        <ol>
          <li><strong>Placement Testing</strong>: Iteratively moving ad units to identify the "least intrusive" zones within an editorial layout.</li>
          <li><strong>Performance Auditing</strong>: Continuous Lighthouse monitoring to ensure monetization scripts don't degrade our Lighthouse scores.</li>
          <li><strong>Reversibility Validation</strong>: Testing the speed at which monetization can be "switched off" ecosystem-wide in response to UX degradation.</li>
        </ol>
      </IterationNotes>

      <FrictionNotes>
        <FrictionPoint title="Failed Placement Ideas">
          <p>
            Initial experiments with "Interstitial" or "Sticky" banner units were immediately discarded. While high-revenue, they violated our core principle of <strong>Cognitive Respect</strong> and damaged the cinematic pacing of the site.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Third-Party Script Complexity">
          <p>
            The primary bottleneck remains the non-deterministic nature of ad-network scripts. Even with aggressive isolation, these scripts can occasionally trigger unexpected reflows or long-tasks.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Tradeoff: Density vs. Quality">
          <p>
            We prioritize <strong>readability over revenue density</strong>. This means accepting a lower ad count to ensure that the primary content—the Reflections and Projects—remains the focus of the experience.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Operational Constraints">
          <p>
            Managing monetization across a modular ecosystem requires a centralized "Ad State" that can be easily toggled during development or performance debugging.
          </p>
        </FrictionPoint>
      </FrictionNotes>

      <EcosystemImpact>
        <p>
          This experiment informs our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link>, ensuring that our commercialization strategy is as transparent as our technical architecture. 
        </p>
        <p>
          Lessons learned here regarding layout stability and script isolation are directly applied to our flagship <Link href="/projects/country-capital-ai">Project Case Studies</Link> to ensure that future integrations remain seamless and calm.
        </p>
      </EcosystemImpact>

      <div className="prose max-w-none pt-8">
        <h3 className="text-xl font-semibold text-content-primary">Future Direction</h3>
        <p>
          We are moving toward <strong>Ecosystem-Aware Commercialization</strong>—where monetization adapts to the user&apos;s behavior. If a user is deep in a long-form essay, the system should automatically suppress ads to protect their focus.
        </p>
        <p>
          Future refinements will explore <strong>Direct Sponsorship primitives</strong> that bypass noisy ad-networks entirely, further aligning our commercial interests with our editorial standards.
        </p>
      </div>
    </LabExperimentLayout>
  );
}
