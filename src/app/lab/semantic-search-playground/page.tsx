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
  title: "Semantic Search Playground Lab",
  description: "Technical foundations of meaning-oriented retrieval, exploring vector embeddings, RAG pipelines, and semantic discovery layers.",
});

export default function SemanticSearchLabPage() {
  const experimentId = "semantic-search-playground";
  const experiment = experiments.find(e => e.id === experimentId);
  
  const relatedArticles = (experiment?.relatedArticles || [])
    .map(slug => getArticleBySlug(slug))
    .filter((a): a is any => a !== null);

  return (
    <LabExperimentLayout
      title="Semantic Search Playground"
      description="Moving beyond keyword matching to explore the architecture of meaning-based discovery."
      status="Active Exploration"
      relatedArticles={relatedArticles}
    >
      <ExperimentOverview why="Keyword-first retrieval is limited by rigid character matching and fails to understand user intent. We are exploring how semantic understanding changes the discovery workflow across the ecosystem.">
        <p>
          The <strong>Semantic Search Playground</strong> is a technical foundation for our broader "Conversational Intelligence" goals. It focuses on <strong>meaning-oriented information architecture</strong>—treating content as vectors in a high-dimensional semantic space rather than just strings in a database.
        </p>
      </ExperimentOverview>

      <SystemNotes>
        <p>
          The architecture focuses on the <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline, separating the raw meaning extraction from the presentation layer.
        </p>
        <ul>
          <li><strong>Embedding Layer</strong>: Transforming text into dense vector representations using specialized transformer models.</li>
          <li><strong>Vector Indexing</strong>: Organizing semantic data for high-speed similarity search using HNSW (Hierarchical Navigable Small World) algorithms.</li>
          <li><strong>Contextual Filtering</strong>: Layering traditional metadata over semantic results to ensure relevance and ecosystem consistency.</li>
        </ul>
      </SystemNotes>

      <IterationNotes>
        <p>
          Our iteration process focuses on <strong>Retrieval Refinement</strong> and the handling of semantic ambiguity. This refinement is critical for high-stakes semantic systems, such as our <Link href="/projects/hate-speech-detector">Hate Speech Detector</Link>, where ambiguity can lead to significant moderation errors.
        </p>
        <ol>
          <li><strong>Model Benchmarking</strong>: Testing various embedding models to identify the optimal balance between vector dimensionality and retrieval latency.</li>
          <li><strong>Prompt Calibration</strong>: Refining how queries are "pre-processed" to better capture intent before reaching the vector index.</li>
          <li><strong>Workflow Adjustments</strong>: Iteratively improving the indexing pipeline to handle dynamic content updates without significant downtime.</li>
        </ol>
      </IterationNotes>

      <FrictionNotes>
        <FrictionPoint title="Friction: Semantic Ambiguity">
          <p>
            The system often struggles with words that have multiple meanings in different technical contexts. We are refining our "contextual injection" strategies to mitigate this drift.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Failed Approaches: Brute-Force Retrieval">
          <p>
            Initial experiments with flat vector comparisons were too slow for a "Calm" user experience. The transition to approximate nearest neighbor (ANN) indexing was a critical architectural pivot.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Tradeoff: Precision vs. Flexibility">
          <p>
            Semantic search is inherently "fuzzy." We accept a lower precision for certain queries in exchange for the discovery of related concepts that keyword search would have missed entirely.
          </p>
        </FrictionPoint>
        <FrictionPoint title="Operational Complexity">
          <p>
            Managing a vector database adds significant infrastructure overhead. We are exploring <strong>Local Vector Primitives</strong> to simplify this for smaller, isolated experiments.
          </p>
        </FrictionPoint>
      </FrictionNotes>

      <EcosystemImpact>
        <p>
          This research directly informs the recommendation engine of the <Link href="/projects/mood-movie-agent">Mood Movie Agent</Link> and the cross-linking logic of our <Link href="/writing">Writing</Link> system.
        </p>
        <p>
          By establishing a unified <strong>Semantic Discovery Layer</strong>, we ensure that users can navigate the ecosystem based on concepts and ideas rather than just nav-links.
        </p>
      </EcosystemImpact>

      <div className="prose max-w-none pt-8">
        <h3 className="text-xl font-semibold text-content-primary">Future Direction</h3>
        <p>
          We are exploring <strong>Multi-Modal Retrieval</strong>—allowing the system to understand relationships between text, code, and interface patterns in a single semantic space.
        </p>
        <p>
          Future refinements will focus on <strong>Hybrid Search</strong>, combining the precision of BM25 (keyword) with the nuance of semantic vectors to create the ultimate "Calm Discovery" experience.
        </p>
      </div>
    </LabExperimentLayout>
  );
}
