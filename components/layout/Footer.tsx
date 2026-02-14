import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";

interface FooterProps {
  variant?: "default" | "compact";
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
      <path d="M8.2 10.06H5.85V17.5H8.2V10.06Z" fill="currentColor" />
      <path
        d="M7.02 9.12C7.76 9.12 8.35 8.52 8.35 7.79C8.35 7.05 7.76 6.46 7.02 6.46C6.29 6.46 5.69 7.05 5.69 7.79C5.69 8.52 6.29 9.12 7.02 9.12Z"
        fill="currentColor"
      />
      <path
        d="M18.35 13.23C18.35 10.89 17.08 9.42 15.16 9.42C13.74 9.42 13.07 10.18 12.74 10.8V10.06H10.53V17.5H12.88V13.82C12.88 12.86 13.38 12.16 14.3 12.16C15.22 12.16 15.67 12.83 15.67 13.82V17.5H18.02V13.28C18.02 13.26 18.35 13.25 18.35 13.23Z"
        fill="currentColor"
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
                <span className={styles.brandLogoWrap} aria-hidden="true">
                  <Image src="/logobueno.png" alt="" fill className={styles.brandLogoImage} />
                </span>
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
