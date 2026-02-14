"use client";

import Image from "next/image";
import { useState } from "react";
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

type ApplicationArea = {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  outputs: string[];
};

const APPLICATION_AREAS: ApplicationArea[] = [
  {
    id: "01",
    title: "Disaster response",
    summary: "Rapid situational awareness for earthquakes, floods and wildfires using multi-source layers.",
    highlights: [
      "Damage heatmaps in under 30 minutes.",
      "Road accessibility scoring for rescue corridors.",
      "Prioritization of hospitals and shelters by impact.",
    ],
    outputs: ["Live impact map", "Rescue routing", "Resource allocation"],
  },
  {
    id: "02",
    title: "Environmental and Safety Mitigation and Predictive warning",
    summary: "Predictive risk monitoring that combines terrain, weather and human activity to detect hazards early.",
    highlights: [
      "Slope-instability and landslide likelihood alerts.",
      "Air and water anomaly detection with historical baselines.",
      "Proactive mitigation plans by municipality.",
    ],
    outputs: ["Risk index", "Early warning feed", "Mitigation playbook"],
  },
  {
    id: "03",
    title: "City Security",
    summary: "Geo-intelligence layer for urban command centers to coordinate prevention and response.",
    highlights: [
      "Dynamic hotspot detection by block and hour.",
      "Pattern correlation across incidents and mobility flows.",
      "Patrol optimization with response-time simulation.",
    ],
    outputs: ["Hotspot dashboard", "Patrol planner", "Incident replay"],
  },
  {
    id: "04",
    title: "Retail Analytics",
    summary: "Trade-area understanding from footfall, sentiment and competitor behavior to maximize store performance.",
    highlights: [
      "Catchment-zone comparison by micro-neighborhood.",
      "Demand forecasting by seasonality and events.",
      "Competitor pressure tracking for pricing strategy.",
    ],
    outputs: ["Store ranking", "Demand forecast", "Competitor pulse"],
  },
  {
    id: "05",
    title: "Academic Research",
    summary: "Structured geospatial pipelines for researchers needing reproducible analysis at city and regional scale.",
    highlights: [
      "Layer versioning with full provenance metadata.",
      "Cross-domain datasets fused into one queryable model.",
      "Export-ready assets for papers and peer review.",
    ],
    outputs: ["Research workspace", "Reproducible exports", "Citation-ready layers"],
  },
  {
    id: "06",
    title: "Infrastructure Resilience",
    summary: "Stress-test roads, utilities and critical assets under climate, demand and disruption scenarios.",
    highlights: [
      "Network vulnerability analysis under extreme events.",
      "Maintenance prioritization by exposure and criticality.",
      "Investment planning with scenario comparison.",
    ],
    outputs: ["Asset risk matrix", "Failure simulation", "Capex roadmap"],
  },
];

export function UseCasesPage() {
  const [openAreas, setOpenAreas] = useState<string[]>(["04"]);
  const [isChatPanelOpen, setIsChatPanelOpen] = useState(false);

  const toggleArea = (id: string) => {
    setOpenAreas((previous) => (previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]));
  };

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
              <button
                type="button"
                className={`${styles.chatButton} ${isChatPanelOpen ? styles.chatButtonOpen : ""}`}
                onClick={() => setIsChatPanelOpen((previous) => !previous)}
                aria-expanded={isChatPanelOpen}
                aria-controls="use-cases-chat-panel"
              >
                Chat with us
              </button>
              <div
                id="use-cases-chat-panel"
                className={`${styles.chatPanel} ${isChatPanelOpen ? styles.chatPanelOpen : ""}`}
                aria-hidden={!isChatPanelOpen}
              >
                <div className={styles.chatPanelInner}>
                  <p className={styles.chatPanelTitle}>Let&apos;s design your geospatial workflow.</p>
                  <p className={styles.chatPanelCopy}>
                    Tell us your sector, geography and business goal. Our team will answer with a tailored proposal.
                  </p>
                  <div className={styles.chatPanelTags}>
                    <span>Site selection</span>
                    <span>Risk modeling</span>
                    <span>Market intelligence</span>
                  </div>
                  <a className={styles.chatPanelLink} href="mailto:contact@columbus.earth">
                    contact@columbus.earth
                  </a>
                </div>
              </div>
            </aside>

            <div className={styles.applicationListWrap}>
              <p className={styles.applicationLabel}>APPLICATION AREAS</p>
              <ol className={styles.applicationList}>
                {APPLICATION_AREAS.map((area) => (
                  <li
                    key={area.id}
                    className={`${styles.applicationItem} ${
                      openAreas.includes(area.id) ? styles.applicationItemOpen : ""
                    } ${area.id === "05" ? styles.applicationBreak : ""}`}
                  >
                    <button
                      type="button"
                      className={styles.applicationToggle}
                      onClick={() => toggleArea(area.id)}
                      aria-expanded={openAreas.includes(area.id)}
                    >
                      <span className={styles.applicationRow}>
                        <span className={styles.applicationId}>{area.id}.</span>
                        <span className={styles.applicationTitle}>{area.title}</span>
                        <span
                          className={`${styles.applicationIcon} ${
                            openAreas.includes(area.id) ? styles.applicationIconOpen : ""
                          }`}
                          aria-hidden="true"
                        >
                          <span className={styles.applicationIconLine} />
                          <span className={`${styles.applicationIconLine} ${styles.applicationIconLineVertical}`} />
                        </span>
                      </span>
                    </button>
                    <div className={styles.applicationPanel}>
                      <div className={styles.applicationPanelInner}>
                        <div className={styles.applicationPanelContent}>
                          <p className={styles.applicationSummary}>{area.summary}</p>
                          <div className={styles.applicationDetails}>
                            <ul className={styles.applicationHighlights}>
                              {area.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                              ))}
                            </ul>
                            <div className={styles.applicationOutputs}>
                              <p>Typical outputs</p>
                              <div className={styles.applicationOutputTags}>
                                {area.outputs.map((output) => (
                                  <span key={output}>{output}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
