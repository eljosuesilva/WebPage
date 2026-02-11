import type { ReactNode } from "react";

export type TechnologySectionId =
  | "index"
  | "lgm-vs-llm"
  | "data-collection"
  | "fusing"
  | "database-visual"
  | "grid-intro"
  | "grid-full"
  | "grid-article"
  | "core-reasoning"
  | "genlayers"
  | "research-blog"
  | "dynamic-layers"
  | "careers"
  | "hiring-humans";

export type NavItem = {
  id: TechnologySectionId;
  label: string;
};

export type ResearchCard = {
  title: string;
  href: string;
  featured?: boolean;
};

export type GeoOverlayItem = {
  id: string;
  title: string;
  items: string[];
};

export type RevealTag = "div" | "section" | "article" | "span";

export type RevealOnViewProps = {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  once?: boolean;
};
