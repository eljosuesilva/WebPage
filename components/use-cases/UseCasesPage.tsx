import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import styles from "./use-cases.module.css";

const EXPLORED_LEFT = [
  "Generative GeoData",
  "GIS Research",
  "Commercial Real Estate",
  "Residential Real Estate",
  "Logistics",
  "Site Selection",
  "Faster Surveying",
];

const EXPLORED_RIGHT = [
  "Environmental Insights",
  "Urban Planning & Infrastructure",
  "Ground Due Dillegence",
  "Critical Mineral Prospecting",
  "Safety and Military Intelligence",
  "Investment",
];

const EXPLORED_RIGHT_TAIL = ["Geomarketing", "Market Intelligence"];

const RECENTS = [
  { name: "Tadaima", accent: "#d2a240" },
  { name: "Arcana", accent: "#3f4f76" },
  { name: "Cotogna", accent: "#926332" },
  { name: "Beit Rima", accent: "#905f35" },
];

const SITE_SELECTION_CUSTOMERS = [
  "Franchises",
  "Consultants",
  "CRE",
  "Residential Developers",
  "Wholesale brokers",
];

const APPLICATION_AREAS = [
  { id: "01", title: "Disaster response", expanded: false },
  { id: "02", title: "Environmental and Safety Mitigation and Predictive warning", expanded: false },
  { id: "03", title: "City Security", expanded: false },
  { id: "04", title: "Retail Analytics", expanded: true },
  { id: "05", title: "Academic Research", expanded: false },
  { id: "06", title: "", expanded: false },
];

export function UseCasesPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <div className={styles.pageBody}>
        <section className={styles.whySection}>
          <h1>Why does it matter?</h1>
          <h2>Current models will always be limited in their true understanding of the world. LLM models today cannot comprehend 3 dimensional mathematics or coordinates. Hallucinating. Thus, they are incapable of satisfying the ever growing Geospatial market.  </h2>
          <p>The possibilities for this technology are versatile and wide-ranging</p>
        </section>

        <section className={styles.exploredSection} aria-labelledby="explored-heading">
          <h2 id="explored-heading">Use-cases we&apos;ve explored</h2>
          <div className={styles.exploredGrid}>
            <ul className={styles.listColumn}>
              {EXPLORED_LEFT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className={styles.rightColumn}>
              <ul className={styles.listColumn}>
                {EXPLORED_RIGHT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.tailRow}>
                {EXPLORED_RIGHT_TAIL.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.siteSelectionSection}>
          <article className={styles.siteSelectionCard}>
            <div className={styles.siteSelectionCopy}>
              <h2>
                Real Estate
                <br />
                Site Selection
              </h2>
              <p>
                Enabling faster site-selection
                <br />
                for Residential and commercial
                <br />
                Real Estate customers, including:
              </p>
              <ul>
                {SITE_SELECTION_CUSTOMERS.map((customer) => (
                  <li key={customer}>{customer}</li>
                ))}
              </ul>
            </div>

            <div className={styles.mapSurface}>
              <Image src="/heropage.png" alt="Map visualization" fill className={styles.mapImage} priority />
              <div className={styles.mapOverlay} />

              <div className={styles.insightsCard}>
                <p className={styles.insightsTitle}>Insights</p>
                <div className={styles.inputGhost} />
                <p className={styles.recentsHeading}>RECENTS</p>
                <ul>
                  {RECENTS.map((item) => (
                    <li key={item.name}>
                      <span className={styles.avatar} style={{ backgroundColor: item.accent }} />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.chatCard}>
                <div className={styles.chatInput}>Give me the best places for a new investment</div>
                <p className={styles.recentsHeading}>RECENTS</p>
                <ul>
                  {RECENTS.map((item) => (
                    <li key={`chat-${item.name}`}>
                      <span className={styles.avatar} style={{ backgroundColor: item.accent }} />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className={styles.applicationsSection}>
          <div className={styles.applicationsGrid}>
            <aside className={styles.applicationsIntro}>
              <h2>
                More applications
                <br />
                of our technology.
              </h2>
              <p>
                We&apos;re exploring many more use
                <br />
                cases. We&apos;re interested to work with
                <br />
                people in the industry. Talk to us.
              </p>
              <button type="button" className={styles.chatButton}>
                Chat with us
              </button>
            </aside>

            <div className={styles.applicationListWrap}>
              <p className={styles.applicationLabel}>APPLICATION AREAS</p>
              <ol className={styles.applicationList}>
                {APPLICATION_AREAS.map((area) => (
                  <li key={area.id} className={styles.applicationRow}>
                    <span className={styles.applicationId}>{area.id}.</span>
                    <span className={styles.applicationTitle}>{area.title || "\u00a0"}</span>
                    {area.title ? (
                      <span className={styles.applicationIcon} aria-hidden="true">
                        {area.expanded ? "−" : "+"}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
