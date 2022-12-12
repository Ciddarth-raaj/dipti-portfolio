import ContentBlock from "../components/ContentBlock/ContentBlock";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftBlock}>
        <h1 className={styles.name}>DIPTI RAVI</h1>
        <div className={styles.line} />
      </div>

      <div className={styles.rightBlock}>
        <ContentBlock />
      </div>
    </div>
  );
}
