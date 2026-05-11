import { Metadata } from "next";
import MovieAppClient from "./MovieAppClient";

export const metadata: Metadata = {
  title: "Movie Recommendation AI | Suraj Kumar",
  description: "An elegant, AI-driven cinematic exploration tool providing curated movie details and smart recommendations.",
};

export default function MovieAppPage() {
  return <MovieAppClient />;
}
