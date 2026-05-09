import { generatePageMetadata } from "@/lib/metadata";
import LabPageClient from "./LabPageClient";

export const metadata = generatePageMetadata({
  title: "Lab",
  description:
    "Prototypes, experiments, AI concepts, and automation explorations.",
});

export default function LabPage() {
  return <LabPageClient />;
}
