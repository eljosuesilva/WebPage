import Link from "next/link";

import styles from "./footer.module.css";

interface FooterProps {
  variant?: "default" | "compact";
}

function GlobeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.5 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.5 7.25V7.3" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M10.5 18V13.6C10.5 12.2 11.4 11.2 12.8 11.2C14.2 11.2 15 12.15 15 13.75V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18V13.85C18 12.1 17.05 10.85 15.2 10.85C13.8 10.85 12.95 11.55 12.6 12.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Footer = ({ variant = "default" }: FooterProps) => {
  return (
    <footer className={styles.root} data-variant={variant}>
      <section className={styles.recruitBand} aria-label="Hiring">
        <div className={styles.recruitArc} aria-hidden="true" />
        <div className={styles.recruitContent}>
          <h2>Hiring Humans.</h2>
          <p>Our team is based in Washington DC and Madrid.</p>
        </div>
      </section>

      <section className={styles.mainFooter}>
        <div className={styles.inner}>
          <div className={styles.columns}>
            <div className={styles.brandColumn}>
              <div className={styles.brandRow}>
                <GlobeMark className={styles.brandIcon} />
                <p className={styles.brandName}>Columbus Earth</p>
              </div>
              <p className={styles.brandDescription}>
                The frontier AI lab building the first production Universal Geospatial Model to answer the
                planet&apos;s toughest questions.
              </p>
              <div className={styles.socials}>
                <a href="mailto:contact@columbus.earth" aria-label="Email Columbus Earth">
                  <MailIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/columbusearth/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Columbus Earth"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <p className={styles.colTitle}>PRODUCT</p>
              <Link href="/">Columbus Platform</Link>
              <Link href="/use-cases">Use-Cases</Link>
              <Link href="/maps-gpt">MapsGPT</Link>
            </div>

            <div className={styles.linkColumn}>
              <p className={styles.colTitle}>TECHNOLOGY</p>
              <Link href="/technology#lgm-vs-llm">LGM vs LLM</Link>
              <Link href="/technology#data-collection">Data Collection</Link>
              <Link href="/technology#core-reasoning">Core Reasoning</Link>
              <Link href="/technology#research-blog">Research Blog</Link>
            </div>

            <div className={styles.linkColumn}>
              <p className={styles.colTitle}>COMPANY</p>
              <Link href="/our-mission">+ Our Mission</Link>
              <Link href="/technology#careers">+ Careers</Link>
              <Link href="#">Legal</Link>
              <Link href="#">Report</Link>
            </div>
          </div>

          <p className={styles.legalCopy}>
            Columbus Earth © 2026. For investor relations, contact us on email or LinkedIn.
          </p>
        </div>
      </section>
    </footer>
  );
};
