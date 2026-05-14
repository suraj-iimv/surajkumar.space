export interface Experiment {
  id: string;
  title: string;
  description: string;
  category: "ai-prototype" | "automation" | "interaction" | "concept";
  status: "active" | "archived" | "concept";
  tags: string[];
  url?: string;
  relatedArticles?: string[];
}

export const experiments: Experiment[] = [
  {
    id: "semantic-search-playground",
    title: "Semantic Search Playground",
    description:
      "An interactive system for exploring vector embeddings and semantic similarity across different text inputs.",
    category: "ai-prototype",
    status: "active",
    tags: ["Embeddings", "Vector DB", "Search"],
    url: "/lab/semantic-search-playground",
  },
  {
    id: "content-pipeline-agent",
    title: "Content Pipeline Agent",
    description:
      "Automated content discovery, synthesis, and formatting pipeline powered by multi-step AI agents.",
    category: "automation",
    status: "active",
    tags: ["Agents", "Automation", "LLM"],
    url: "/lab/content-pipeline-agent",
  },
  {
    id: "gesture-ui-prototype",
    title: "Gesture-Driven UI Prototype",
    description:
      "Exploring hand-gesture-based navigation for web interfaces using MediaPipe and WebGL.",
    category: "interaction",
    status: "concept",
    tags: ["MediaPipe", "WebGL", "Gestures"],
  },
  {
    id: "ai-code-review",
    title: "AI Code Review Bot",
    description:
      "A GitHub-integrated bot that provides contextual code review feedback using static analysis and LLMs.",
    category: "automation",
    status: "active",
    tags: ["GitHub", "Code Review", "LLM"],
  },
  {
    id: "conversational-data-explorer",
    title: "Conversational Data Explorer",
    description:
      "Ask questions about your data in natural language and get visualizations as answers.",
    category: "ai-prototype",
    status: "concept",
    tags: ["NL2SQL", "Data Viz", "Chat"],
  },
  {
    id: "adaptive-ui-system",
    title: "Adaptive UI System",
    description:
      "A design system that adjusts component density, color, and layout based on user behavior patterns.",
    category: "interaction",
    status: "concept",
    tags: ["Design Systems", "Personalization", "ML"],
  },
  {
    id: "monetization-systems",
    title: "Monetization Systems",
    description:
      "Exploring how monetization systems interact with performance, UX, and ecosystem design in a premium environment.",
    category: "interaction",
    status: "active",
    tags: ["Monetization", "UX", "Performance"],
    url: "/lab/monetization-systems",
    relatedArticles: ["why-reversible-architecture-matters-in-early-systems"],
  },
];

export const categories = [
  { key: "all", label: "All" },
  { key: "ai-prototype", label: "AI Prototypes" },
  { key: "automation", label: "Automation" },
  { key: "interaction", label: "Interaction" },
  { key: "concept", label: "Concepts" },
] as const;
