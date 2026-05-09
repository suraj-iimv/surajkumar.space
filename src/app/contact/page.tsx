import { generatePageMetadata } from "@/lib/metadata";
import ContactPageClient from "./ContactPageClient";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch for collaboration, freelance projects, or conversations about AI and creative technology.",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
