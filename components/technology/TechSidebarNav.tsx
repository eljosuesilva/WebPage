"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./technology.module.css";
import { OBSERVED_SECTION_IDS, TECHNOLOGY_NAV_ITEMS } from "./redesign/content";
import type { TechnologySectionId } from "./redesign/types";

export function TechSidebarNav() {
  const [activeId, setActiveId] = useState<TechnologySectionId>("index");

  useEffect(() => {
    const sections = OBSERVED_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => Boolean(node)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target?.id) return;

        setActiveId(visible.target.id as TechnologySectionId);
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-18% 0px -48% 0px",
      }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <aside className={styles.sidebar} aria-label="Technology section index">
      <nav>
        <ul className={styles.sidebarList}>
          {TECHNOLOGY_NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={[styles.sidebarLink, isActive ? styles.sidebarLinkActive : ""].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={styles.sidebarMarker}>{isActive ? "+" : ""}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
