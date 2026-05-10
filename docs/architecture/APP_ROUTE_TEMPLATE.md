# Internal App Route Blueprint

This guide dictates the architecture for building new interactive frontend routes (e.g., `/project-slug`) within the portfolio ecosystem.

## 1. Component Separation (App Router)

Always strictly separate Server Components (for SEO and metadata) from Client Components (for interactivity).

### Server Component (`page.tsx`)
```tsx
import { Metadata } from "next";
import ClientComponent from "./ClientComponent";

export const metadata: Metadata = {
  title: "Project Name | Suraj Kumar",
  description: "A premium AI experiment...",
};

export default function Page() {
  return <ClientComponent />;
}
```

## 2. Design Token Reuse & Ecosystem Inheritance

**CRITICAL RULE**: Do not invent new color palettes, arbitrary padding values, or isolated styling systems for new routes.

- **Colors**: Rely entirely on `bg-surface-elevated`, `bg-surface-base`, `text-content-primary`, `text-content-secondary`, `text-content-tertiary`, `border-border`.
- **UI Primitives**: Always reuse `@/components/ui/Button` and `@/components/ui/ScrollReveal`.
- **Layout**: Mirror the padding rhythms established by `/contact` and existing projects (`pt-32 pb-24 md:pb-32`, `max-w-2xl mx-auto`).

## 3. Cinematic Loading & Motion

Replace abrupt state changes and generic spinners with premium motion.

- **Framer Motion**: Use `AnimatePresence` with `mode="wait"`.
- **Entry Animations**: Fades and soft y-axis floats (`initial={{ opacity: 0, y: 10 }}`, `animate={{ opacity: 1, y: 0 }}`).
- **Loading Text**: Use pulsing, thoughtful text (e.g., "Analyzing context...", "Retrieving data...").

## 4. State Management & Request Protection

Ensure the UI feels robust and defensively programmed:

- **Trim Input**: Always `.trim()` user input before submission.
- **Empty States**: Return early if the input is empty.
- **Duplicate Prevention**: Lock the submit button (`disabled={status === 'loading'}`) and ignore submission events while a request is inflight.

## 5. Flexible Architecture

Structure state variables generically (e.g., `const [result, setResult] = useState<any>(null);`) during early experimental phases so that the UI can gracefully accept enriched payloads (maps, metadata, flags) as the backend evolves, without requiring immediate frontend rewrites.

## 6. Environment Variables

Never hardcode backend URLs in Client Components. Always use `NEXT_PUBLIC_API_BASE_URL` defined in `.env.local`.
