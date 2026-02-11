"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./technology.module.css";
import {
  OBSERVED_SECTION_IDS,
  SIDEBAR_HIDDEN_ON,
  TECHNOLOGY_NAV_ITEMS,
} from "./redesign/content";
import type { TechnologySectionId } from "./redesign/types";

export function TechSidebarNav() {
  const [activeId, setActiveId] = useState<TechnologySectionId>("index");

  useEffect(() => {
    const elements = OBSERVED_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => Boolean(node)
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target?.id) return;

        const id = visible.target.id as TechnologySectionId;
        setActiveId(id);
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-18% 0px -54% 0px",
      }
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const hideSidebar = SIDEBAR_HIDDEN_ON.has(activeId);

  return (
    <aside
      className={[styles.sidebar, hideSidebar ? styles.sidebarHidden : ""].join(" ")}
      aria-hidden={hideSidebar}
    >
      <p className={styles.sidebarTitle}>Index</p>
      <nav>
        <ul className={styles.sidebarList}>
          {TECHNOLOGY_NAV_ITEMS.map((item) => {
            const isActive = item.id === activeId;

            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={[
                    styles.sidebarLink,
                    isActive ? styles.sidebarLinkActive : "",
                  ].join(" ")}
                >
                  {isActive ? <span className={styles.sidebarMarker}>+</span> : null}
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
