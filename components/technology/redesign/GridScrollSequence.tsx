"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import styles from "../technology.module.css";

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export function GridScrollSequence() {
  const sequenceSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const pageBody = document.querySelector<HTMLElement>(`.${styles.pageBody}`);
    if (!pageBody) return;

    let rafId = 0;

    const getViewportHeight = () => pageBody.getBoundingClientRect().height;

    const updateScrollProgress = () => {
      const section = sequenceSectionRef.current;
      if (!section) {
        rafId = 0;
        return;
      }

      const viewportHeight = getViewportHeight();
      const rect = section.getBoundingClientRect();
      const travel = Math.max(rect.height - viewportHeight, 1);
      const p = clamp01((-rect.top) / travel);

      const zoomIn = clamp01((p - 0.02) / 0.28);
      const zoomOut = clamp01((p - 0.56) / 0.28);
      const fullStrength = p < 0.56 ? zoomIn : 1 - zoomOut;

      const shibuyaIn = clamp01((p + 0.3) / 0.12);
      const shibuyaOut = clamp01((p - 0.56) / 0.12);
      const shibuyaOpacity = clamp01(shibuyaIn * (1 - shibuyaOut));
      const worldOpacity = clamp01((p - 0.7) / 0.16);
      const noOpacity = clamp01((p - 0.86) / 0.14);
      const hintOpacity = 1 - clamp01((p - 0.04) / 0.12);
      const gridOpacity = clamp01((p - 0.68) / 0.18);
      const kickerOpacity = 1 - clamp01((p - 0.18) / 0.14);

      section.style.setProperty("--grid-seq-progress", p.toFixed(4));
      section.style.setProperty("--grid-seq-full", fullStrength.toFixed(4));
      section.style.setProperty("--grid-seq-shibuya", shibuyaOpacity.toFixed(4));
      section.style.setProperty("--grid-seq-world", worldOpacity.toFixed(4));
      section.style.setProperty("--grid-seq-no", noOpacity.toFixed(4));
      section.style.setProperty("--grid-seq-hint", hintOpacity.toFixed(4));
      section.style.setProperty("--grid-seq-grid", gridOpacity.toFixed(4));
      section.style.setProperty("--grid-seq-kicker", kickerOpacity.toFixed(4));

      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();
    pageBody.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      pageBody.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="grid-intro" ref={sequenceSectionRef} className={[styles.section, styles.gridSequenceSection].join(" ")}>
      <div className={[styles.slideFrame, styles.gridSequenceSticky].join(" ")}>
        <div className={styles.gridSequenceCanvas}>
          <p className={[styles.kicker, styles.gridSequenceKicker].join(" ")}>The Grid</p>

          <div className={[styles.gridArticleCard, styles.gridSequenceMedia].join(" ")}>
            <Image
              src="/tokyo.png"
              alt="Shibuya crossing in Tokyo"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 92vw, 1400px"
              className={styles.coverImage}
              priority
            />

            <div className={styles.imageShadeStrong} />
            <div className={styles.gridSequenceGridOverlay} />

            <p className={styles.gridSequenceShibuyaText}>
              Shibuya crossing in Tokyo. The world&apos;s most busy street,
              densely packed with businesses and infrastructure.
            </p>

            <p className={[styles.gridTopCopy, styles.gridSequenceTopCopy].join(" ")}>
              The whole world is comprised of 13,000,000,000,000 squares. And
              that&apos;s with 100x100 meter grids.
            </p>

            <div className={[styles.gridGlassPanel, styles.gridSequenceGlass].join(" ")}>
              <p>
                But, does an adult need to know the whole world to understand the
                semantic nature of a city&apos;s fabric?
              </p>
            </div>

            <a href="#" className={[styles.articleLinkSmall, styles.gridSequenceArticleLink].join(" ")}>
              Read our article ↗
            </a>
          </div>

          <p className={styles.gridSequenceNo}>Well, no.</p>

          <div className={[styles.scrollHint, styles.gridSequenceHint].join(" ")}>
            <span aria-hidden="true">↓</span>
            <span>Scroll to see our magic.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
