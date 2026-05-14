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
import { getArticleBySlug } from "@/lib/mdx";
import { experiments } from "@/data/experiments";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Content Pipeline Agent Lab",
  description: "Exploring agentic orchestration and multi-step research pipelines to automate technical synthesis without losing editorial fidelity.",
});

export default function ContentPipelineAgentPage() {
  const experimentId = "content-pipeline-agent";
  const experiment = experiments.find(e => e.id === experimentId);
  
  const relatedArticles = (experiment?.relatedArticles || [])
    .map(slug => getArticleBySlug(slug))
    .filter((a): a is any => a !== null);

  return (
    <LabExperimentLayout
      title="Content Pipeline Agent"
      description="Automating the synthesis of technical knowledge through multi-step agentic orchestration."
      status="Active Exploration"
      relatedArticles={relatedArticles}
    >
      <ExperimentOverview why="Traditional content pipelines are linear and manual. We are exploring how agentic orchestration can handle the heavy lifting of research, synthesis, and formatting while preserving human editorial intent.">
        <p>
          The <strong>Content Pipeline Agent</strong> is an exploration into AI-native workflow design. It treats content creation not as a writing task, but as a systems engineering problem—decomposing complex research into a sequence of validated agentic steps.
        </p>
      </ExperimentOverview>

      <SystemNotes>
        <p>
          The system is built on a <strong>Directed Acyclic Graph (DAG)</strong> of specialized agents. Each agent is responsible for a single, isolated part of the pipeline, ensuring that the human operator can intervene or refine at any stage.
        </p>
        <ul>
          <li><strong>Research Agent</strong>: Scans documentation, repositories, and technical archives for raw data.</li>
          <li><strong>Synthesis Engine</strong>: Clusters findings and identifies core narrative patterns.</li>
          <li><strong>Formatting Layer</strong>: Transforms raw synthesis into ecosystem-consistent MDX structures.</li>
          <li><strong>Validation Loop</strong>: Checks for technical accuracy and semantic alignment with existing Writing.</li>
        </ul>
      </SystemNotes>

      <IterationNotes>
        <p>
          Our process focuses on <strong>Workflow Refinement</strong> and the "Human-Agent Interaction" model. We iteratively move from raw prompts to structured orchestration.
        </p>
        <ol>
          <li><strong>Agentic Decomposition</strong>: Breaking down the "Write an essay" goal into smaller, manageable sub-tasks (Research, Outline, Draft, Review).</li>
          <li><strong>Prompt Maturation</strong>: Transitioning from open-ended queries to strict JSON schemas to ensure deterministic output formatting.</li>
          <li><strong>Interaction Testing</strong>: Identifying the optimal points for human oversight to maximize quality without bottlenecking the automation.</li>
        </ol>
      </IterationNotes>

      <FrictionNotes>
        <FrictionPoint title="Failed Approaches: Linear Prompting">
          <p>
            Initial attempts to use a single "Mega-Prompt" for the entire pipeline failed due to hallucinations and loss of stylistic consistency. The shift to a modular DAG was essential for reliability.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Workflow Bottleneck: Hallucination Checks">
          <p>
            The primary bottleneck remains the manual verification of technical claims. Future iterations will explore automated cross-referencing against trusted knowledge bases.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Tradeoff: Automation vs. Nuance">
          <p>
            We accept a slower pipeline in exchange for <strong>Editorial Fidelity</strong>. Automating 100% of the writing is possible, but it lacks the "Systems Thinking" depth required for this ecosystem.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Operational Consistency">
          <p>
            Maintaining the "Suraj Kumar" voice across different model versions requires a robust set of <strong>Editorial Design Tokens</strong> that are injected into every agent prompt.
          </p>
        </FrictionPoint>
      </FrictionNotes>

      <EcosystemImpact>
        <p>
          This experiment directly informs our <Link href="/writing">Writing</Link> system, allowing us to produce deeper technical reflections with higher frequency. 
        </p>
        <p>
          The orchestration patterns developed here also influence our <Link href="/projects">Project Documentation</Link> strategy, ensuring that case studies are as architecturally rigorous as the codebases they describe.
        </p>
      </EcosystemImpact>

      <div className="prose max-w-none pt-8">
        <h3 className="text-xl font-semibold text-content-primary">Future Direction</h3>
        <p>
          The next phase of the Content Pipeline Agent will focus on <strong>Recursive Research</strong>—where agents can dynamically spawn sub-tasks to explore unexpected technical tangents.
        </p>
        <p>
          We are also exploring deeper integration with the [Lab](/lab) to allow agents to automatically document new experiments as they are being coded, closing the loop between prototyping and documentation.
        </p>
      </div>
    </LabExperimentLayout>
  );
}
