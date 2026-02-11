import Image from "next/image";

import styles from "../technology.module.css";
import {
  DYNAMIC_LAYER_CAPTIONS,
  FUSING_STEPS,
  GENLAYERS_OVERLAYS,
  LGM_COLUMNS,
  LLM_TOKEN_LINES,
  RESEARCH_CARDS,
} from "./content";
import { RevealOnView } from "./RevealOnView";
import type { TechnologySectionId } from "./types";

function Section({
  id,
  className,
  children,
}: {
  id: TechnologySectionId;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={[styles.section, className].filter(Boolean).join(" ")}>
      {children}
    </section>
  );
}

function UgmGlyph() {
  return (
    <svg
      className={styles.ugmGlyph}
      viewBox="0 0 138 138"
      fill="none"
      aria-hidden="true"
    >
      <path d="M15 69 L118 23" stroke="currentColor" strokeWidth="2" />
      <path d="M20 31 L110 112" stroke="currentColor" strokeWidth="2" />
      <path d="M36 17 L56 119" stroke="currentColor" strokeWidth="2" />
      <path d="M95 18 C108 40 118 66 110 91" stroke="#f8d657" strokeWidth="2.5" />
      {[
        [36, 58],
        [65, 51],
        [79, 74],
        [57, 86],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="currentColor" />
      ))}
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      className={styles.databaseSvg}
      viewBox="0 0 250 300"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="125" cy="58" rx="85" ry="30" fill="#9BB3D7" />
      <path d="M40 58V108C40 124 78 138 125 138C172 138 210 124 210 108V58" fill="#5A86C8" />
      <ellipse cx="125" cy="108" rx="85" ry="30" fill="#3F71BC" />
      <path d="M40 108V165C40 181 78 195 125 195C172 195 210 181 210 165V108" fill="#5A86C8" />
      <ellipse cx="125" cy="165" rx="85" ry="30" fill="#3A67AE" />
      <path d="M40 165V224C40 240 78 254 125 254C172 254 210 240 210 224V165" fill="#5A86C8" />
      <ellipse cx="125" cy="224" rx="85" ry="30" fill="#3A67AE" />
      <path d="M60 100C72 107 84 109 98 111" stroke="#2F67B8" strokeWidth="8" strokeLinecap="round" />
      <path d="M60 160C74 167 88 170 102 172" stroke="#2F67B8" strokeWidth="8" strokeLinecap="round" />
      <path d="M60 220C74 227 88 230 102 232" stroke="#2F67B8" strokeWidth="8" strokeLinecap="round" />
      {[98, 154, 210].map((y) => (
        <g key={y}>
          <circle cx="182" cy={y} r="4.8" fill="#F5C650" />
          <circle cx="197" cy={y - 9} r="4.8" fill="#F28B3C" />
        </g>
      ))}
    </svg>
  );
}

function DynamicPins({ right = false }: { right?: boolean }) {
  return (
    <>
      {Array.from({ length: right ? 14 : 28 }).map((_, index) => {
        const width = 8 + (index % 5) * 6;
        const hueClass = index % 3;
        return (
          <span
            key={`pin-${index}`}
            className={[
              styles.pin,
              hueClass === 0 ? styles.pinBlue : "",
              hueClass === 1 ? styles.pinRed : "",
              hueClass === 2 ? styles.pinGreen : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              width: `${width}px`,
              left: `${(index * (right ? 5.5 : 3.1)) % 94}%`,
              top: `${8 + ((index * 13) % 80)}%`,
              transform: `rotate(${(index % 7) * 9 - 18}deg)`,
            }}
          />
        );
      })}
    </>
  );
}

export function TechnologySections() {
  return (
    <>
      <Section id="index" className={styles.indexSection}>
        <div className={styles.standardContainer}>
          <div className={styles.heroLayout}>
            <RevealOnView className={styles.heroCopy}>
              <h1>Building a brain for Earth.</h1>
              <p>
                At Columbus, we want to collect the world&apos;s data and build a
                brain that comprehends it all.
              </p>
              <p>
                We&apos;re building frontier geospatial intelligence. It&apos;s pretty
                cool.
              </p>
            </RevealOnView>

            <RevealOnView className={styles.pipelineShell} delayMs={120}>
              <div className={styles.pipelineCardWide}>
                <div className={styles.pipelineLabel}>Data Collection &amp; Labeling</div>
                <div className={styles.pipelineTiles}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={`tile-${index}`} className={styles.pipelineTile} />
                  ))}
                </div>
              </div>

              <svg className={styles.pipelineDashedTop} viewBox="0 0 520 120" fill="none" aria-hidden="true">
                {[120, 190, 260, 330, 400].map((x) => (
                  <path
                    key={x}
                    d={`M${x} 0 C${x + (260 - x) * 0.5} 42 ${x + (260 - x) * 0.8} 76 260 94`}
                    className={styles.dashedPathRed}
                  />
                ))}
                <path d="M260 94 L260 118" className={styles.dashedPathRed} />
              </svg>

              <div className={styles.pipelineCenterCard}>
                <div className={styles.pipelineLabel}>Columbus Database</div>
                <div className={styles.pipelineNode} />
              </div>

              <svg className={styles.pipelineDashedBottom} viewBox="0 0 520 88" fill="none" aria-hidden="true">
                <path d="M260 0 L260 18 L160 18 L160 88" className={styles.dashedPathRed} />
                <path d="M260 0 L260 18 L360 18 L360 88" className={styles.dashedPathRed} />
              </svg>

              <div className={styles.pipelineBottomGrid}>
                <div className={styles.pipelineCardSmall}>
                  <div className={styles.pipelineLabel}>Brain Model</div>
                  <div className={styles.pipelineBlob} />
                </div>
                <div className={styles.pipelineCardSmall}>
                  <div className={styles.pipelineLabel}>Earth Grid</div>
                  <div className={styles.pipelineGridIcon} />
                </div>
              </div>

              <div className={styles.pipelineFooter}>Insights, Patterns, Answers.</div>
            </RevealOnView>
          </div>
        </div>
      </Section>

      <Section id="lgm-vs-llm" className={styles.bluePanelSection}>
        <RevealOnView className={styles.standardContainer}>
          <h2 className={styles.lgmTitle}>
            Large Language Model vs Large Geospatial Model. A new foundational
            model.
          </h2>
          <p className={styles.lgmLead}>
            If an LLM is for language in the digital world, we&apos;re for the
            physical world. An IRL AI.
          </p>

          <div className={styles.lgmTagline}>Think about it like AGI for the physical world</div>

          <div className={styles.lgmColumns}>
            <article className={styles.lgmColumn}>
              <h3>LLM</h3>
              <div className={styles.llmTokens}>
                {LLM_TOKEN_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className={styles.lgmFoot}>Transformer Attention</p>
              <a href="#" className={styles.articleLink}>
                Read our article ↗
              </a>
            </article>

            {LGM_COLUMNS.map((column) => (
              <article key={column.title} className={styles.lgmColumn}>
                <h3>{column.title}</h3>
                <div className={styles.lgmBody}>
                  {column.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {column.footer ? <p className={styles.lgmFoot}>{column.footer}</p> : null}
              </article>
            ))}

            <article className={styles.lgmColumn}>
              <h3>UGM</h3>
              <UgmGlyph />
              <p className={styles.lgmFoot}>We&apos;re different</p>
              <div className={styles.lgmBody}>
                <p>Intuition eyes on an Earth grid.</p>
                <p>Not needing as much pre-training.</p>
              </div>
            </article>
          </div>
        </RevealOnView>
      </Section>

      <Section id="data-collection" className={styles.dataCollectionSection}>
        <div className={styles.standardContainer}>
          <RevealOnView>
            <p className={styles.kicker}>Data Collection</p>
            <h2 className={styles.sectionTitle}>The more you know, the smarter you are. We collect vast amounts of data.</h2>

            <div className={styles.dataCards}>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={`data-box-${index}`} className={styles.dataCard} />
              ))}
            </div>

            <div className={styles.dataList}>
              <p>Data Collection</p>
              <ul>
                <li>our collection methods</li>
                <li>dormant data</li>
                <li>broken data</li>
              </ul>
            </div>
          </RevealOnView>
        </div>
      </Section>

      <Section id="fusing" className={styles.fusingSection}>
        <div className={styles.standardContainer}>
          <div className={styles.fusingLayout}>
            <RevealOnView>
              <h2 className={styles.fusingTitle}>Fusing...</h2>
              <ul className={styles.fusingList}>
                {FUSING_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </RevealOnView>

            <svg className={styles.fusingLines} viewBox="0 0 520 620" fill="none" aria-hidden="true">
              {[
                [40, 20, 230, 610],
                [150, 0, 300, 610],
                [260, 0, 260, 610],
                [370, 0, 220, 610],
                [480, 20, 290, 610],
              ].map(([x1, y1, x2, y2]) => (
                <line key={`${x1}-${x2}`} x1={x1} y1={y1} x2={x2} y2={y2} className={styles.dashedPathGray} />
              ))}
            </svg>
          </div>
        </div>
      </Section>

      <Section id="database-visual" className={styles.databaseSection}>
        <div className={styles.standardContainer}>
          <div className={styles.databaseStage}>
            <svg className={styles.databaseIncomingLines} viewBox="0 0 900 140" fill="none" aria-hidden="true">
              {[
                [220, 10, 420, 130],
                [320, 10, 470, 130],
                [450, 0, 450, 130],
                [580, 10, 430, 130],
                [680, 10, 480, 130],
              ].map(([x1, y1, x2, y2]) => (
                <line key={`${x1}-${x2}`} x1={x1} y1={y1} x2={x2} y2={y2} className={styles.dashedPathGray} />
              ))}
            </svg>

            <RevealOnView className={styles.databaseIconWrap} delayMs={80}>
              <DatabaseIcon />
            </RevealOnView>
          </div>
        </div>
      </Section>

      <Section id="grid-intro" className={styles.gridIntroSection}>
        <div className={styles.standardContainer}>
          <RevealOnView>
            <p className={styles.kicker}>The Grid</p>
            <div className={styles.gridIntroCard}>
              <Image
                src="/tokyo.png"
                alt="Shibuya crossing in Tokyo"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 92vw, 1000px"
                className={styles.coverImage}
                priority
              />
              <div className={styles.imageShade} />
              <div className={styles.gridIntroCopy}>
                Shibuya crossing in Tokyo. The world&apos;s most busy street,
                densely packed with businesses and infrastructure.
              </div>
            </div>
            <div className={styles.scrollHint}>
              <span aria-hidden="true">↓</span>
              <span>Scroll to see our magic.</span>
            </div>
          </RevealOnView>
        </div>
      </Section>

      <Section id="grid-full" className={[styles.fullBleed, styles.gridFullSection].join(" ")}>
        <div className={styles.fullBleedCard}>
          <Image
            src="/tokyo.png"
            alt="Shibuya crossing full view"
            fill
            sizes="100vw"
            className={styles.coverImage}
          />
          <div className={styles.imageShadeStrong} />
          <RevealOnView className={styles.gridFullCopy}>
            Shibuya crossing in Tokyo. The world&apos;s most busy street, densely
            packed with businesses and infrastructure.
          </RevealOnView>
        </div>
      </Section>

      <Section id="grid-article" className={styles.gridArticleSection}>
        <div className={styles.standardContainer}>
          <RevealOnView>
            <p className={styles.kicker}>The Grid</p>
            <article className={styles.gridArticleCard}>
              <Image
                src="/tokyo.png"
                alt="Earth grid map"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 92vw, 1000px"
                className={styles.coverImageMap}
              />
              <div className={styles.gridOverlay} />

              <p className={styles.gridTopCopy}>
                The whole world is comprised of 13,000,000,000,000 squares. And
                that&apos;s with 100x100 meter grids.
              </p>

              <div className={styles.gridGlassPanel}>
                <p>
                  But, does an adult need to know the whole world to understand
                  the semantic nature of a city&apos;s fabric?
                </p>
                <a href="#" className={styles.articleLinkSmall}>
                  Read our article ↗
                </a>
              </div>
            </article>
            <p className={styles.gridNo}>Well, no.</p>
          </RevealOnView>
        </div>
      </Section>

      <Section id="core-reasoning" className={styles.coreReasoningSection}>
        <div className={styles.verticalLineOverlay} aria-hidden="true" />
        <div className={styles.standardContainer}>
          <RevealOnView className={styles.coreReasoningBody}>
            <p className={styles.kicker}>Core Reasoning</p>
            <h2 className={styles.sectionTitleNarrow}>Reasoning with Space and Geography</h2>
            <p className={styles.coreReasoningText}>
              Building an artificial intelligence to comprehend, and critically
              think in coordinate spaces.
            </p>
          </RevealOnView>
        </div>
      </Section>

      <Section id="genlayers" className={[styles.fullBleed, styles.genlayersSection].join(" ")}>
        <div className={styles.genlayersCard}>
          <Image
            src="/forest.png"
            alt="Mapping the unknown with GenLayers"
            fill
            sizes="100vw"
            className={styles.coverImage}
          />
          <div className={styles.imageShadeStrong} />

          <RevealOnView className={styles.genlayersHeader}>
            <h2>Mapping the unknown with GenLayers.</h2>
            <p>
              How we generate new layers of geospatial intelligence, using big
              data and sophisticated reasoning to extrapolate.
            </p>
          </RevealOnView>

          <div className={styles.genlayersShapes} aria-hidden="true">
            <div className={styles.genShapeLeft} />
            <div className={styles.genShapeRight} />
          </div>

          <div className={styles.calloutConnectorLeft} aria-hidden="true" />
          <div className={styles.calloutConnectorRight} aria-hidden="true" />

          <div className={styles.genlayersCallouts}>
            {GENLAYERS_OVERLAYS.map((overlay, index) => (
              <RevealOnView
                key={overlay.id}
                className={[
                  styles.genlayersCallout,
                  index === 0 ? styles.genlayersCalloutLeft : styles.genlayersCalloutRight,
                ].join(" ")}
                delayMs={120 + index * 80}
              >
                {overlay.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </RevealOnView>
            ))}
          </div>
        </div>
      </Section>

      <Section id="research-blog" className={styles.researchSection}>
        <div className={styles.standardContainerWide}>
          <RevealOnView>
            <div className={styles.researchHead}>
              <h2>Columbus Research</h2>
              <p>
                Explore the innovative research and recent papers from our team
              </p>
            </div>
            <div className={styles.researchDivider} />
            <h3 className={styles.researchSubhead}>Read our latest releases</h3>

            <div className={styles.researchScroller}>
              {RESEARCH_CARDS.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className={[
                    styles.researchCard,
                    card.featured ? styles.researchCardFeatured : styles.researchCardThin,
                  ].join(" ")}
                >
                  {card.featured ? <span className={styles.researchArrow}>↗</span> : null}
                  <span>{card.title}</span>
                </a>
              ))}
            </div>
          </RevealOnView>
        </div>
      </Section>

      <Section id="dynamic-layers" className={[styles.fullBleed, styles.dynamicSection].join(" ")}>
        <div className={styles.dynamicStage}>
          <div className={styles.dynamicTopBlur} aria-hidden="true" />
          <div className={styles.dynamicBottomBlur} aria-hidden="true" />
          <RevealOnView className={styles.dynamicHeading}>
            <h2>
              Dynamically creating geodata layers, without complex and expensive
              surveying.
            </h2>
            <a href="#" className={styles.dynamicPill}>
              Explore more maps we&apos;ve made ↗
            </a>
          </RevealOnView>

          <div className={styles.dynamicColumns}>
            <article className={styles.dynamicColumn}>
              <Image src="/tokyo.png" alt="Solar roof possibility layer" fill sizes="33vw" className={styles.coverImage} />
              <div className={styles.dynamicShadeLeft} />
              <div className={styles.dynamicPinLayer}>
                <DynamicPins />
              </div>
              <div className={styles.dynamicCaption}>
                <small>Columbus GenLayer</small>
                <p>{DYNAMIC_LAYER_CAPTIONS[0]}</p>
              </div>
            </article>

            <article className={styles.dynamicColumn}>
              <Image src="/heropage.png" alt="Resident vibes layer" fill sizes="33vw" className={styles.coverImage} />
              <div className={styles.dynamicShadeMid} />
              <div className={styles.dynamicCaption}>
                <small>Columbus GenLayer</small>
                <p>{DYNAMIC_LAYER_CAPTIONS[1]}</p>
              </div>
            </article>

            <article className={styles.dynamicColumn}>
              <Image src="/heropage.png" alt="Safety score layer" fill sizes="33vw" className={styles.coverImageRight} />
              <div className={styles.dynamicShadeRight} />
              <div className={styles.dynamicPinLayer}>
                <DynamicPins right />
              </div>
              <div className={styles.dynamicCaption}>
                <small>Columbus GenLayer</small>
                <p>{DYNAMIC_LAYER_CAPTIONS[2]}</p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section id="careers" className={styles.careersSection}>
        <div className={styles.standardContainerWide}>
          <RevealOnView>
            <div className={styles.careersHead}>
              <h2>Careers</h2>
              <p>
                If you&apos;re excited about creating paradigm shifts in physical
                world understanding. <strong>Join us now.</strong>
              </p>
            </div>
            <div className={styles.researchDivider} />

            <form
              action="mailto:contact@columbus.earth?subject=Careers%20Application"
              method="post"
              encType="text/plain"
              className={styles.careersForm}
            >
              <label>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>

              <label>
                <span>Enter email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>

              <div className={styles.careersFormMeta}>
                <button type="submit" className={styles.careersSend}>
                  Send application
                </button>
                <p>We accept interns.</p>
              </div>
            </form>
          </RevealOnView>
        </div>
      </Section>

      <Section id="hiring-humans" className={[styles.fullBleed, styles.hiringSection].join(" ")}>
        <div className={styles.hiringArcWrap}>
          <div className={styles.hiringArcHighlight} aria-hidden="true" />
          <RevealOnView className={styles.hiringCopy}>
            <h2>Hiring Humans.</h2>
            <p>Our team is based in Washington DC and Madrid.</p>
          </RevealOnView>
        </div>
      </Section>
    </>
  );
}
