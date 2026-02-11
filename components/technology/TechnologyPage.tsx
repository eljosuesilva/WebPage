import styles from "./technology.module.css";
import { TechFooter } from "./TechFooter";
import { TechNavbar } from "./TechNavbar";
import { TechSidebarNav } from "./TechSidebarNav";
import { TechnologySections } from "./redesign/TechnologySections";

export function TechnologyPage() {
  return (
    <main className={`${styles.page} ${styles.dotGrid}`}>
      <TechNavbar />

      <div className={styles.pageBody}>
        <div className={styles.pageShell}>
          <div className={styles.sidebarColumn}>
            <TechSidebarNav />
          </div>

          <div className={styles.contentColumn}>
            <TechnologySections />
            <TechFooter />
          </div>
        </div>
      </div>
    </main>
  );
}
