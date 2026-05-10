# Ecosystem Architecture Guide

This document serves as the master operating system for building, integrating, and evolving projects within the premium AI portfolio ecosystem.

## 1. Core Philosophy
Projects within this ecosystem are not isolated entities. They are interconnected modules that must adhere to a "calm luxury" presentation style. The goal is to build a scalable, premium AI experimentation platform.

- **Calm Luxury**: Refined typography, generous whitespace, understated colors, and fluid, subtle animations. Avoid neon, cyberpunk, or hyper-technical aesthetics unless strictly warranted.
- **Automation-Ready**: Conventions must support script-driven project setup, reusable metadata systems, and AI-assisted onboarding.

## 2. Project Types System

Standardizing the structure of incoming projects ensures consistency:

- **Internal Interactive App**: 
  - *Routing*: Native Next.js App Router (`/app-name`).
  - *Frontend*: Highly integrated, consuming ecosystem tokens.
  - *Backend*: Decoupled API service or Next.js API routes.
- **External Hosted App**: 
  - *Routing*: Dedicated domain or subdomain.
  - *Presentation*: Referenced via a project card pointing to external URL.
- **API Service**: 
  - *Routing*: Deployed independently (e.g., Render, Vercel).
  - *Presentation*: Documented internally via an MDX guide; consumed by frontend experiments.
- **Experimental Lab**: 
  - *Routing*: `/lab/[experiment]`
  - *Expectations*: Lightweight, self-contained interactive demos with fewer UI constraints but identical typographic scaling.
- **Writing-Integrated Experiment**: 
  - *Routing*: Integrated directly into an article (`/writing/[slug]`).

## 3. Project Evolution Path (Versioning)

Projects are treated as living ecosystems, not static artifacts. Gradual evolution is normalized.

- **v1: Experimental**: Initial prototype (e.g., local Streamlit or CLI). Focus on core logic.
- **v2: Refined Frontend**: Interactive demo integrated into the Next.js portfolio.
- **v3: Scalable Backend**: Core logic extracted into a decoupled, robust API (FastAPI, Node).
- **v4: Ecosystem Integration / Separation**: Deployed as an independent subdomain or SaaS product while retaining an MDX entry in the portfolio.

## 4. Design & Presentation Consistency

- **Design Tokens**: Frontend projects *must* inherit existing tokens (`bg-surface-elevated`, `text-content-primary`). Do not create isolated styling logic.
- **Motion Philosophy**: Use `framer-motion` for subtle opacity fades, elegant y-axis floats, and calm loading states. Avoid aggressive spinners or bouncy/springy extremes.
- **Mobile Fluidity**: Prioritize comfortable touch target spacing, responsive typographic scaling, and refined padding. Cramped mobile layouts are unacceptable.

## 5. Naming, Slugs, and Metadata

- **Naming**: Use clear, sophisticated titles (e.g., "Country Capital AI", not "country-lookup-app").
- **Slugs**: Lowercase, kebab-case (`country-capital-ai`).
- **Images**: Hero images should represent soft minimal interface visuals or abstract geometry.
- **Status Badges**: `live`, `experimental`, `in-progress`, `archived`.

## 6. AI Prompting Conventions

To maintain architectural consistency across AI-assisted workflows, use these standard prompts:

- **Frontend Generation**: *"Create a React Client Component for [Feature] using Tailwind. Strictly reuse the existing `bg-surface-elevated`, `text-content-*` colors, and `border-border` classes. Implement subtle Framer Motion entry animations. Do not invent new color palettes."*
- **Backend Integration**: *"Draft a FastAPI endpoint for [Feature]. Include comprehensive Pydantic validation, strict CORS configuration for `localhost` and `surajkumar.space`, and robust error handling."*
- **Project Onboarding**: *"Generate the MDX entry for [Project]. Use a calm, editorial tone focusing on architecture, design decisions, and learnings. Follow the precise schema defined in `PROJECT_TEMPLATE.mdx`."*
- **Animation/Motion**: *"Implement a cinematic loading state. Use soft opacity transitions and elegant text reveals instead of generic spinners."*
- **Deployment**: *"Outline the deployment matrix for this stack. Assume Next.js on Vercel and FastAPI on Render."*
