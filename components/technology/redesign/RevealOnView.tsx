"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import styles from "../technology.module.css";
import type { RevealOnViewProps } from "./types";

export function RevealOnView({
  children,
  className,
  delayMs = 0,
  threshold = 0.2,
  once = true,
}: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;

        if (entry.isIntersecting) {
          setVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const style = {
    "--reveal-delay": `${delayMs}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={[
        styles.reveal,
        visible ? styles.revealVisible : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
