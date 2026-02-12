import { Navbar } from "@/components/layout/Navbar";

import styles from "./technology.module.css";
import { TechFooter } from "./TechFooter";
import { TechSidebarNav } from "./TechSidebarNav";
import { TechnologySections } from "./redesign/TechnologySections";
import { VantorScrollFeel } from "./redesign/VantorScrollFeel";

export function TechnologyPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <VantorScrollFeel />

      <div className={styles.pageBody}>
        <div className={styles.pageShell}>
          <div className={styles.sidebarColumn}>
            <TechSidebarNav />
          </div>

          <div className={styles.contentColumn}>
            <TechnologySections />
            <div className={styles.footerBleedWrap}>
              <TechFooter />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
