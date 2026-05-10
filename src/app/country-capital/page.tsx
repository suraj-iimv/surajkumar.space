import { Metadata } from "next";
import CountryCapitalClient from "./CountryCapitalClient";

export const metadata: Metadata = {
  title: "Country Capital AI | Suraj Kumar",
  description: "A lightweight AI-assisted knowledge interaction system demonstrating modular API architecture and scalable AI integration workflows.",
};

export default function CountryCapitalPage() {
  return <CountryCapitalClient />;
}
