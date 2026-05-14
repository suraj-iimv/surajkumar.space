import { generatePageMetadata } from "@/lib/metadata";
import LabPageClient from "./LabPageClient";

export const metadata = generatePageMetadata({
  title: "Lab",
  description:
    "A space for experimentation, prototyping, and the validation of architectural hypotheses.",
});

export default function LabPage() {
  return <LabPageClient />;
}
